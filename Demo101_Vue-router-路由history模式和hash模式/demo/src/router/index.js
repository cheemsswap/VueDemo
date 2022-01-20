import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}
import Home from '../view/Home'
import About from '../view/About'
import News from '../view/News'
import Message from '../view/Message'
import Links from '../view/Links'
import ContactUs from '../view/ContactUs'
import Details from '../view/Details'
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            meta: { title: 'xxx管理系统' }
        },
        {
            path: "/home",
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message
                }
            ]
        },
        {
            path: '/about',
            component: About,
            meta: { title: '关于' },
            children: [
                {
                    path: 'links',
                    component: Links,
                    meta: { isAuth: true, title: '关于->友情链接' },
                    children: [
                        {
                            path: 'details',
                            component: Details,
                            meta: { isAuth: true },
                            props({ query: { title, url } }) {
                                return { title, url }
                            }
                        }
                    ]
                },
                {
                    path: 'contactus',
                    component: ContactUs,
                    meta: { isAuth: true, title: '关于->联系我们' },
                    children: [
                        {
                            name: 'contactusdetails',
                            path: 'details/:title/:url',
                            component: Details,
                            meta: { isAuth: true },
                            props: true
                        }
                    ]
                }
            ]
        }
    ]
})

export default router