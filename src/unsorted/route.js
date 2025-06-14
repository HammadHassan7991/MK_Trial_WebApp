import loadable from '@loadable/component'; //code spliting

const routes = [
  {
    name: 'Home',
    path: '/',
    component: loadable(() =>
      import(/*WebpackChunkName:"HomePage"*/ '../pages/LandingPage')
    ),
  },
  {
    name: 'About Us',
    path: '/about',
    component: loadable(() =>
      import(/*webpackChunkName:"About Us"*/ '../pages/About')
    ),
  },
  {
    name: 'Gallery',
    path: '/about',
    component: loadable(() =>
      import(/*webpackChunkName:"About Us"*/ '../pages/Gallery')
    ),
  },
  {
    name: 'About Us',
    path: '/about',
    component: loadable(() =>
      import(/*webpackChunkName:"About Us"*/ '../pages/About')
    ),
  },
  {
    name: 'Shop',
    path: '/shop',
    component: loadable(() =>
      import(/*webpackChunkName:"Shop"*/ '../pages/Shop')
    ),
  },
];

export default routes;
