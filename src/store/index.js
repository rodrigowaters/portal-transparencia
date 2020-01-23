import Vue   from 'vue'
import Vuex  from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state    : {
        menus            : [],
        paginas_dinamicas: [],
        glossario        : [],
        breadcrumb       : []
    },
    getters  : {
        menus(state)
        {
            return state.menus;
        },
        paginas_dinamicas(state)
        {
            return pageId =>
            {
                return state.paginas_dinamicas[pageId];
            }
        },
        glossario(state)
        {
            return state.glossario;
        },
        breadcrumb(state)
        {
            return state.breadcrumb;
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
        },
        SET_BREADCRUMB(state, breadcrumbArray)
        {
            state.breadcrumb = breadcrumbArray;
        }
    },
    actions  : {

        async fetchData({commit})
        {
            return await axios
                .get('https://gist.githubusercontent.com/rodrigowaters/b7c4b0d879a97979010cbf40a0608f93/raw/9a21bc61267409a421d9456b474e1f80bfcbcce3/getInfos.json', {
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

        refreshBreadcrumb({commit}, breadcrumbArray)
        {
            commit('SET_BREADCRUMB', breadcrumbArray);
        }
    },
})
