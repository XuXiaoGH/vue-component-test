import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/test1',
            name: 'test1',
            component: resolve => require(['../page/test1.vue'], resolve)
        },
        {
            path: '/test2',
            name: 'test2',
            component: resolve => require(['../page/test2.vue'], resolve)
        },
        {
            path: '/test3',
            name: 'test3',
            component: resolve => require(['../page/test3.vue'], resolve)
        }
    ]
});

export default router;