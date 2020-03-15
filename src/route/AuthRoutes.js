import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUserInfo } from '../api/userInfo';
import { store } from '../store';

// const checkPath = (path, target) => {
//   const pathArray = path.split('/');
//   const targetArray = path.split('/');
//   let checkResult = true;
//   pathArray.forEach((path, index) => {
//     const hadVar = path.indexOf(':') >= 0;
//     if (hadVar) { // 是否有冒号后2变量
//       checkResult = checkResult && (targetArray[index] !== undefined);
//     }
//     if (path === targetArray[index]) {
//       checkResult = checkResult && true;
//     }
//     return checkResult;
//   });
// }

export default class AuthRoutes extends React.Component {
  render() {
    const { location, config } = this.props;
    const { pathname } = location;
    // const isLogin = JSON.stringify(store.getState().userInfo.userInfo) !== '{}';
    const isLogin = true;

    console.log(store.getState().userInfo.userInfo)
    // 如果该路由不用进行权限校验，登录状态下登陆页除外
    // 因为登陆后，无法跳转到登陆页
    // 这部分代码，是为了在非登陆状态下，访问不需要权限校验的路由
    const targetRouteConfig = config.find(item => {
      const path = item.path;
      const isVar = item.path.indexOf(':') >= 0;
      if (isVar) {
        return pathname.indexOf(path.split(':')[0]) >= 0;
      } else {
        return path === pathname;
      }
    });
    // console.log('targetRouteConfig first', targetRouteConfig)
    if (targetRouteConfig && !targetRouteConfig.auth) {
      // console.log('targetRouteConfig', targetRouteConfig, pathname)
      const { component } = targetRouteConfig;
      // const isVar = item.path.indexOf(':') >= 0;
      return <Route exact path={pathname} component={component} />
    }
    
    if (isLogin) {
      // 如果是登陆状态，想要跳转到登陆，重定向到主页
      if (pathname === '/admin/login') {
        return <Redirect to='/' />
      } else {
        // 如果路由合法，就跳转到相应的路由
        if (targetRouteConfig) {
          return <Route path={pathname} component={targetRouteConfig.component} />
        } else {
          // 如果路由不合法，重定向到 404 页面
          return <Redirect to='/404' />
        }
      }
    } else {
      // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      if (targetRouteConfig && targetRouteConfig.auth) {
        console.log(targetRouteConfig, 'login', location)
        return <Redirect to='/admin/login' />
      } else {
        console.log(targetRouteConfig, '404')
        // 非登陆状态下，路由不合法时，重定向至 404
        return <Redirect to='/404' />
      }
      // const toRender = (targetRouteConfig, location) => {
      //   // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
      //   if (targetRouteConfig && targetRouteConfig.auth) {
      //     console.log(targetRouteConfig, 'login', location)
      //     return <Redirect to='/admin/login' />
      //   } else {
      //     console.log(targetRouteConfig, '404')
      //     // 非登陆状态下，路由不合法时，重定向至 404
      //     return <Redirect to='/404' />
      //   }
      // }
      // return getUserInfo().then(res => {
      //   console.log('right')
      //   store.dispatch({type: 'UPDATE', data: res.data}).then(() => {
      //     return <Redirect to='/404' />
      //   });
      // }, () => {
      //   console.log('error')
      //   return <Redirect to='/404' />
      // });
    } 
  }
}