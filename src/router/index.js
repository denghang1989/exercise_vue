import Vue from 'vue'
import Router from 'vue-router'
import BaseHeader from '@/components/common/BaseHeader.vue';
import BookTag from '@/components/book/BookTag'
import BookTagContent from '@/components/book/BookTagContent'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: BaseHeader,
        content: BookTagContent,
        aside: BookTag
      }
    }
  ]
})
