import Vue   from 'vue'
import Vuex  from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state    : {
        menus            : [],
        paginas_dinamicas: [],
        glossario        : []
    },
    getters  : {
        menus            : state =>
        {
            return state.menus;
        },
        paginas_dinamicas: state =>
        {
            return pageId =>
            {
                return state.paginas_dinamicas[pageId];
            }
        },
        glossario        : state =>
        {
            return state.glossario;
        }
    },
    mutations: {
        SET_MENUS(state, menus)
        {
            state.menus = menus;
        },
        SET_PAGINAS_DINAMICAS(state, paginas_dinamicas)
        {
            state.paginas_dinamicas = paginas_dinamicas;
        },
        SET_PAGINAS_GLOSSARIO(state, glossario)
        {
            state.glossario = glossario;
        }
    },
    actions  : {

        async fetchData({commit})
        {
            return await axios
                .get('https://gist.githubusercontent.com/rodrigowaters/b7c4b0d879a97979010cbf40a0608f93/raw/f0b72ecbcfe4b4432a20ebdf6f26e9af90d94ae7/getInfos.json', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response =>
                {
                    commit('SET_MENUS', response.data.menus);
                    commit('SET_PAGINAS_DINAMICAS', response.data.paginas_dinamicas);
                    commit('SET_PAGINAS_GLOSSARIO', response.data.glossario);
                })
                .catch(function (error)
                {
                    alert(error);
                });
        },

    },
})
