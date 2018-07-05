import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import errorPage from '../components/error.vue'
import rebbitMQ from '../components/rebbitMQ.vue'
// import vhostDetail from '../components/vhostDetail.vue'
import kafkaTopic from '../components/kafkaTopic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      component: errorPage
      // children: [
      //   {
      //     path: '/:id',
      //     component: kafkaTopic
      //   },
      //   {
      //     path: 'vhostDetail',
      //     component: kafkaTopic
      //   }
      // ]
    },
    {
      path: '/rebbitMQ',
      component: rebbitMQ,
      children: [
        {
          path: '/vhostDetail',
          component: kafkaTopic
        }
      ]
    },
    {
      path: '/kafkaTopic',
      component: kafkaTopic
    }
  ]
})
