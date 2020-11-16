import Vue from 'vue'
import Vuex from 'vuex'
import bookModule from '@/store/modules/bookModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        bookModule
    }
})
