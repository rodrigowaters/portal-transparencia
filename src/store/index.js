import Vue      from 'vue'
import Vuex     from 'vuex'
import menuJson from '../menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state    : {
        menus: menuJson
    },
    getters  : {
        menus: state =>
        {
            return state.menus;
        }
    },
    mutations: {},
    actions  : {},
    modules  : {}
})
