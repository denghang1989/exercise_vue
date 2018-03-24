import Vue from 'vue'
import Router from 'vue-router'
import BaseHeader from '@/components/common/BaseHeader.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: {
        default: BaseHeader,
        content: "",
        aside: ""
      }
    }
  ]
})
