import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home.vue';
import Land from '../components/land/Land.vue';
import Project from '../components/project/Project.vue';
import My from '../components/my/my.vue';
import Landdetail from '../components/landdetail/Landdetail.vue';

Vue.use(Router);
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/land',
    name: 'Land',
    component: Land,
    subRoutes: {
      '/landdetail': {
        component: Landdetail
      }
    }
  },
  {
    path: '/landdetail',
    name: 'Landdetail',
    component: Landdetail
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/my',
    name: 'my',
    component: My
  }
];

export default new Router({
  routes: routes,
  linkActiveClass: 'active'
});
