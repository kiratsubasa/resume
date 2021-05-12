import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Website from '../views/Website.vue'
import Installation from '../views/Installation.vue'
import Graphic from '../views/Graphic.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/graphic',
    name: 'Graphic',
    component: Graphic
  },
  {
    path: '/installation',
    name: 'Installation',
    component: Installation
  },
  {
    path: '/website',
    name: 'Website',
    component: Website
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
]

const router = new VueRouter({
  routes
})

export default router
