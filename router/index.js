import Vue from 'vue'
import Router from 'vue-router'
import Indexhome from '@/pages/home/index.vue'
import Money from '@/pages/money/index.vue'
import Ious from '@/pages/ious/index.vue'
import Raise from '@/pages/raise/index.vue'
import Download from '@/pages/special/download.vue'
import "../css/reset.scss"


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/indexhome',
      name:'/indexhome',
      component: Indexhome
    },
    {
      path:'/indexmoney',
      name:'/money',
      component:Money
    },
    {
      path:'/indexious',
      component:Ious
    },
    {
      path:'/indexraise',
      component:Raise
    },
    {
      path:'/download',
      component:Download
    },
    {
      path:'/',
      redirect:'/indexhome'
    }
  ]
})
