import VueX from 'vuex'
import Vue from 'vue'
Vue.use(VueX)
export default new VueX.Store({
    actions: {
        add(context, n) {
            context.commit("ADD", n)
        },
        sub(context, n) {
            context.commit("SUB", n)
        },
        addOdd(context, n) {
            if (context.state.sum % 2) {
                context.commit("ADD", n)
            }
        },
        addWait(context, n) {
            setTimeout(() => {
                context.commit("ADD", n)
            }, 3000)
        },
    },
    mutations: {
        ADD(state, n) {
            state.sum += n
        },
        SUB(state, n) {
            state.sum -= n
        }
    },
    state: {
        sum: 0
    },
})