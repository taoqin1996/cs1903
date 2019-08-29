import vue from 'vue'
import vuex, { Store } from 'vuex'
vue.use(vuex)

export default new Store({
    state: {
        count: 1,
        num: 2
    },
    mutations: {
        add(state) {
            state.count++
        },
        sub(state) {
            state.count--
        }
    },
    getters: {
        getCount(state) {
            return state.count + '$$$$$$$$$$$$$$'
        }
    },
    actions: {
        add(context) {
            context.commit('add')
        },
        sub(context) {
            context.commit('sub')
        }
    }
})