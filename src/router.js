import Vue from 'vue'
import Router from 'vue-router'
import store from 'store/index'
const Tabbar = () => import('./components/Tabbar/')
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: () => import('./views/Home/Home.vue'),
                tabbar: Tabbar
            },
            meta: {
                auth: false, // 是否需要登录
                keepAlive: true // 是否缓存组件
            }
        },
        {
            path: '/category',
            name: 'category',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {
                default: () =>import(/* webpackChunkName: "category" */ './views/Category/Category.vue'),
                tabbar: Tabbar
            },
            meta: {
                auth: false,
                keepAlive: true
            }
        },
        {
            path: '/cart',
            name: 'cart',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {
                default: () =>import(/* webpackChunkName: "cart" */ './views/Cart/Cart.vue'),
                tabbar: Tabbar
            },
            meta: {
                auth: false,
                keepAlive: true
            }
        },
        {
            path: '/mine',
            name: 'mine',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            components: {
                default: () =>import(/* webpackChunkName: "mine" */ './views/Mine/Mine.vue'),
                tabbar: Tabbar
            },
            meta: {
                auth: false,
                keepAlive: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import(/* webpackChunkName: "login" */ './views/Login/Login.vue'),
            meta: {
                auth: false,
                keepAlive: true
            }
        },
        {
            path: '*', // 未匹配到路由时重定向
            redirect: '/',
            meta: {
                // auth: true,
                // keepAlive: true
            }
        }
    ]
})

// 全局路由钩子函数 对全局有效
router.beforeEach((to, from, next) => {
    let auth = to.meta.auth
    let token = store.getters['login/token'];

    if (auth) { // 需要登录
        if (token) {
            next()
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next()
    }
})
export default router
