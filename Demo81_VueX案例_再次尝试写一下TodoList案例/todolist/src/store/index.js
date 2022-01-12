import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

export default new VueX.Store({
    state: {
        Works: JSON.parse(localStorage.getItem("Works")) || []
    },
    actions: {
        addWork(context, workObj) {
            if (workObj.name.trim() == "") return
            context.commit("ADDWORK", workObj)
        },
    },
    mutations: {
        ADDWORK(states, workObj) {
            states.Works.unshift(workObj)
        },
        UPDATAWORKDONE(states, [id, done]) {
            states.Works.forEach(element => {
                if (element.id == id) element.done = done
            });
        },
        DELETEWORK(states, id) {
            states.Works = states.Works.filter((e) => {
                return e.id != id
            })
        },
        WORKALLDONE(states, done) {
            states.Works.forEach((e) => {
                e.done = done
            })
        },
        DLETEDONETRUEWORK(states) {
            states.Works = states.Works.filter((e) => {
                return !e.done
            })
        }
    },
})
