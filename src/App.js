import React from 'react';
import { 
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './App.css';
import Home from './views/front/home/Home';
import Article from './views/front/article/Article';
import Login from './views/admin/login/Login';
import AdminHome from './views/admin/home/Home';
import ActionArticle from './views/admin/actionArticle/ActionArticle';

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
))

export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Routes></Routes>
      </Router>
    );
  }
}
