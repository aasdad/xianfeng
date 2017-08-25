import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/view/home.vue';
import Test from '@/components/view/test.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
    	path:'*',
    	redirect:'/home'
    }
  ]
})
