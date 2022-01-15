import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home'
import About from '../views/About'
import HomeNews from '../views/Home/News'
import HomeMessage from '../views/Home/Message'
import AboutLinks from '../views/About/Links'
import AboutContact from '../views/About/Contact'

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    // 命名路由
                    name: "news",
                    component: HomeNews,
                },
                {
                    path: 'message',
                    component: HomeMessage
                },
            ]
        },
        {
            path: '/about',
            component: About,
            children: [
                {
                    path: 'links',
                    component: AboutLinks
                },
                {
                    path: 'contact',
                    component: AboutContact
                }
            ]
        },

    ]
})