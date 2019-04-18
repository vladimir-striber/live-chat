import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Chat from  './components/Chat'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      beforeEnter: ( to, from, next ) => {
        if(to.params.name) {
          next()
        } else {
          next( {name: "Home"} )
        }
      }
    }
  ]
})
