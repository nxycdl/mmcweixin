import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home.vue';
import Land from '../components/land/Land.vue';
import Project from '../components/project/Project.vue';
import My from '../components/my/My.vue';
import Landdetail from '../components/landdetail/Landdetail.vue';
import ProjectDetail from '../components/project/ProjectDetail.vue';
import MyInfo from '../components/my/MyInfo.vue';
import MettingList from '../components/Meeting/MeetingList.vue';
import MessageList from '../components/Message/MessageList.vue';

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
  },
  {
    path: '/projectDetail',
    name: 'projectDetail',
    component: ProjectDetail
  },
  {
    path: '/myInfo',
    name: 'myInfo',
    component: MyInfo
  },
  {
    path: '/mettingList',
    name: 'mettingList',
    component: MettingList
  },
  {
    path: '/messageList',
    name: 'messageList',
    component: MessageList
  }
];

export default new Router({
  mode: 'history',
  routes: routes,
  linkActiveClass: 'active'
});
