import React from 'react';
import Loadable from 'react-loadable';
import { 
  HashRouter as Router,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import Loading from './components/Loading';

import './App.css';

const Home = Loadable({
  loader: () => import('./views/front/home/Home'),
  loading: Loading,
  timeout: 10000
});

const Article = Loadable({
  loader: () => import('./views/front/article/Article'),
  loading: Loading,
  timeout: 10000
});

const Login = Loadable({
  loader: () => import('./views/admin/login/Login'),
  loading: Loading,
  timeout: 10000
});

const AdminHome = Loadable({
  loader: () => import('./views/admin/home/Home'),
  loading: Loading,
  timeout: 10000
});

const ActionArticle = Loadable({
  loader: () => import('./views/admin/actionArticle/ActionArticle'),
  loading: Loading,
  timeout: 10000
});

const Routes = withRouter(({location}) => (
  <SwitchTransition>
    <CSSTransition
      timeout={300}
      classNames={'fade'}
      key={location.pathname}>
      <Switch location={location}>
        <Redirect exact from='/' to='/index' />
        <Route exact path="/index" component={Home} />
        <Route exact path="/article/:id" component={Article} />
        <Redirect exact from='/admin' to='/admin/index' />
        <Route exact path="/admin/login" component={Login} />
        <Route exact path="/admin/index" component={AdminHome} />
        <Route exact path="/admin/article/add" component={ActionArticle} />
        <Route exact path="/admin/article/edit/:id" component={ActionArticle} />
      </Switch>
    </CSSTransition>
  </SwitchTransition>
));

export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes></Routes>
      </Router>
    );
  }
}
