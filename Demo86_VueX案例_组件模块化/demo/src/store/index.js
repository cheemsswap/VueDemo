import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
import { nanoid } from 'nanoid'

const count = {
    namespaced: true,
    state: {
        sum: 0,
        school: '家里蹲大学',
        subject: "Vue",
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
        subsum(t, n) {
            t.commit("ADDSUM", -n)
        },
        addsumOdd(t, n) {
            if (t.state.sum % 2) {
                t.commit("ADDSUM", n)
            }
        },
        addsumWait(t, n) {
            setTimeout(() => {
                t.commit("ADDSUM", n)
            }, 3000)
        },
    },
    mutations: {
        ADDSUM(states, n) {
            states.sum += n
        },
    }
}
const person = {
    namespaced: true,
    state: {
        personList: [
            { id: "001", name: "张三" }
        ]
    },
    getters: {

    },
    actions: {
        addPerson(t, personName) {
            const personObj = {
                id: nanoid(),
                name: personName
            }
            t.commit("ADDPERSON", personObj)
        }
    },
    mutations: {
        ADDPERSON(states, personObj) {
            states.personList.unshift(personObj)
        }
    }
}


export default new VueX.Store({
    modules: {
        count,
        person
    }
})

