import Loadable from 'react-loadable';
import Loading from '../components/loading/Loading';

const Home = Loadable({
  loader: () => import('../views/front/home/Home'),
  loading: Loading,
  timeout: 10000
});

const Article = Loadable({
  loader: () => import('../views/front/article/Article'),
  loading: Loading,
  timeout: 10000
});

const Login = Loadable({
  loader: () => import('../views/admin/login/Login'),
  loading: Loading,
  timeout: 10000
});

const AdminHome = Loadable({
  loader: () => import('../views/admin/home/Home'),
  loading: Loading,
  timeout: 10000
});

const ActionArticle = Loadable({
  loader: () => import('../views/admin/actionArticle/ActionArticle'),
  loading: Loading,
  timeout: 10000
});

const ErrorPage = Loadable({
  loader: () => import('../views/errorPage/ErrorPage'),
  loading: Loading,
  timeout: 10000
});

export const routesConfig = [
  {
    path: '/',
    component: Home
  },{
    path: '/index',
    component: Home
  },{
    path: '/article/:id',
    component: Article,
  },{
    path: '/admin/login',
    component: Login
  },{
    path: '/admin',
    component: AdminHome,
    auth: false
  },{
    path: '/admin/index',
    component: AdminHome,
    auth: false
  },{
    path: '/admin/article/add',
    component: ActionArticle,
    auth: false
  },{
    path: '/admin/article/edit/:id',
    component: ActionArticle,
    auth: false
  },{
    path: '/404',
    component: ErrorPage
  }
];

{/* <Redirect exact from='/' to='/index' />
<Route exact path="/index" component={Home} />
<Route exact path="/article/:id" component={Article} />
<Redirect exact from='/admin' to='/admin/index' />
<Route exact path="/admin/login" component={Login} />
<Route exact path="/admin/index" component={AdminHome} />
<Route exact path="/admin/article/add" component={ActionArticle} />
<Route exact path="/admin/article/edit/:id" component={ActionArticle} /> */}