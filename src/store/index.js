import Vue from 'vue'
import Vuex from 'vuex'
import bookModule from '@/store/modules/bookModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        // user: {
        //     name: 'jj',
        //     address: 'metola'
        // },
    },
    getters: {
        // user(state) {
        //     return state.user
        // },
    },
    mutations: {
        // setNewUser(state, payload) {
        //     state.user = payload.user
        // },
    },
    actions: {

    },
    modules: {
        bookModule
    }
})
