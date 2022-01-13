import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
import { nanoid } from 'nanoid'
export default new VueX.Store({
    state: {
        sum: 0,
        school: '家里蹲大学',
        subject: "Vue",
        personList: [
            { id: "001", name: "张三" }
        ]
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
        addPerson(t, personName) {
            const personObj = {
                id: nanoid(),
                name: personName
            }
            t.commit("ADDPERSON", personObj)
        }
    },
    mutations: {
        ADDSUM(states, n) {
            states.sum += n
        },
        ADDPERSON(states, personObj) {
            states.personList.unshift(personObj)
        }
    },
})