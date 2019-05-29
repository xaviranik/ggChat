import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Chat from './views/Chat.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if(to.params.name) {
          next();
        }
        else {
          next({ name: 'Welcome' });
        }
      }
    }
  ]
})
