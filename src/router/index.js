import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import rebbitMQ from '../components/rebbitMQ.vue'
import kafkaTopic from '../components/kafkaTopic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/rebbitMQ',
      component: rebbitMQ
    },
    {
      path: '/KafkaTopic',
      component: kafkaTopic
    }
  ]
})
