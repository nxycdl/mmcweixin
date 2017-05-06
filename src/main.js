// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import {AjaxPlugin} from 'vux';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(AjaxPlugin);

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app-box');
router.beforeEach((to, from, next) => {
  console.log('route', to, from);
  next();
});

