import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddRisk from '@/components/AddRisk'
import AllRisks from '@/components/AllRisks'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/addRisk',
      name: 'AddRisk',
      component: AddRisk
    },
    {
      path: '/risks',
      name: 'AllRisks',
      component: AllRisks
    }
  ]
})
