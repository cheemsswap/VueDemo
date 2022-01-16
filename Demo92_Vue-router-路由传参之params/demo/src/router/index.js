
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../view/Home'
import About from '../view/About'
import Links from '../view/Links'
import ContactUs from '../view/ContactUs'
import News from '../view/News'
import Messages from '../view/Messages'
import Details from '../view/Details'


export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News,
                    children: [
                        {
                            name: "newsdetails",
                            path: "details",
                            component: Details
                        }
                    ]
                },
                {
                    path: 'messages',
                    component: Messages,
                    children: [
                        {
                            name: "messagesdetails",
                            path: "details",
                            component: Details
                        }
                    ]
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
                            name: "linksdetails",
                            path: "details/:title/:url",
                            component: Details
                        }
                    ]

                },
                {
                    path: 'contactus',
                    component: ContactUs,
                    children: [
                        {
                            name: "contactusdetails",
                            path: "details/:title/:content",
                            component: Details
                        }
                    ]
                }
            ]
        }
    ]
})