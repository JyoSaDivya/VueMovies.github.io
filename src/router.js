import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MovieDetail from './views/MovieDetail.vue'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'Movie Detail',
      component: MovieDetail
    },
  ]
})
export default router
