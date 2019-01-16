import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
 
Vue.use(Router)
 
export default new Router({
    mode:'history',
    routes: [
        {
            path:'/',
            name: 'index',
            component: Index
        },
        {
            path: '/layout',
            name: 'layout',
            component: () => import('./components/Layout.vue')
        },
        {
            path: '/button',
            name: 'button',
            component: () => import('./components/Button.vue')
        },
        {
            path: '/tag',
            name: 'tag',
            component: () => import('./components/Tag.vue')
        },
        {
            path: '/cell',
            name: 'cell',
            component: () => import('./components/Cell.vue')
        }
    ]
})