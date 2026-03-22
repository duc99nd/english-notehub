import { createRouter, createWebHistory } from 'vue-router'

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
        behavior: 'instant',
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
      component: () => import('@/views/DocsView.vue'),
    },
  ],
})

export default router
