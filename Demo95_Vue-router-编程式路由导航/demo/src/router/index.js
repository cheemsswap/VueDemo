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
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
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
            children: [
                {
                    path: 'links',
                    component: Links,
                    children: [
                        {
                            path: 'details',
                            component: Details,
                            props({ query: { title, url } }) {
                                return { title, url }
                            }
                        }
                    ]
                },
                {
                    path: 'contactus',
                    component: ContactUs,
                    children: [
                        {
                            name: 'contactusdetails',
                            path: 'details/:title/:url',
                            component: Details,
                            props: true
                        }
                    ]
                }
            ]
        }
    ]
})