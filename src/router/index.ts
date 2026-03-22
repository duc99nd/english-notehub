import { createRouter, createWebHistory } from 'vue-router'
import DocsView from '@/views/DocsView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: 'smooth',
      }
    }

    if (to.path !== from.path) {
      return { top: 0 }
    }

    return undefined
  },
  routes: [
    {
      path: '/',
      redirect: '/docs',
    },
    {
      path: '/docs/:slug?',
      name: 'docs',
      component: DocsView,
    },
  ],
})

export default router
