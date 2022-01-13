import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)

export default new VueX.Store({
    state: {
        sum: 0,
        name: "张三",
        age: 18,
        school: "家里蹲大学",
        schoolAddress: "家里"
    },
    getters: {
        bigsum(states) {
            return states.sum * 10
        },
        bigage(states) {
            return states.age * 10
        }
    },
    actions: {
        add(t, n) {
            t.commit("ADD", n)
        }
    },
    mutations: {
        ADD(states, n) {
            states.sum += n
        }
    }
})