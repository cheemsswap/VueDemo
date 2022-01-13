import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)

export default new VueX.Store({
    state: {
        sum: 0
    },
    getters: {
        bigsum(states) {
            return states.sum * 10
        }
    },
    actions: {
        addsum(t, n) {
            t.commit("ADDSUM", n)
        },
        sunsum(t, n) {
            t.commit("SUBSUM", n)
        },
    },
    mutations: {
        ADDSUM(states, n) {
            states.sum += n
        },
        SUBSUM(states, n) {
            states.sum -= n
        }
    }
})