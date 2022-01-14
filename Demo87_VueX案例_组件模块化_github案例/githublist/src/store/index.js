import axios from 'axios'
import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

const Search = {
    namespaced: true,
    state: {
        keyWord: ''
    },
    gettters: {

    },
    actions: {
        updatakeyWord(t, val) {
            t.commit("UPDATAKEYWORD", val)
        }
    },
    mutations: {
        UPDATAKEYWORD(states, val) {
            states.keyWord = val
        }
    }
}
const List = {
    namespaced: true,
    state: {
        message: "请检索....",
        userList: []
    },
    gettters: {

    },
    actions: {
        SearchKeyWord_ajax(t) {
            t.commit("UPDATAMESSAGE", "正在检索请等待...");
            axios.get(`https://api.github.com/search/users?q=${this.state.Search.keyWord}`).then(
                data => {
                    if (data.data.total_count) {
                        t.commit("UPDATAMESSAGE", "");
                    }
                    else t.commit("UPDATAMESSAGE", "啥都没有搜到");
                    t.commit("UPDATAUSERLIST", data.data.items)
                },
                error => {
                    t.commit("UPDATAMESSAGE", error.message)
                }
            )
        }
    },
    mutations: {
        UPDATAUSERLIST(states, val) {
            states.userList = val
        },
        UPDATAMESSAGE(states, val) {
            states.message = val
        }
    }
}
export default new VueX.Store({
    modules: {
        Search,
        List
    }
})