import {createStore} from 'vuex'

export default createStore({
    state: {
        authenticated: false,
        accessToken: null,
        // accountId: null,
        // username: ""
    },
    mutations: {
        SET_AUTH: (state , auth) => state.authenticated = auth,
        // setAccessToken: (state, token) => state.accessToken = token,
        // setAccountId: (state, token) => state.accountId = token,
        // setUsername: (state, username) => state.username = username,
        // resetStore: (state) => {
        //     state.authenticated = false;
        //     state.username = "";
        //     state.accountId = null;
        //     state.accessToken = null;
        // }
    },
    actions: {
        setAuth: ({ commit }, auth) => commit('SET_AUTH', auth),
        // register: (context, data) => {
        //
        // }
    },
    // getters: {
    //     isAuthenticated: state => !!state.accessToken,
    //     authStatus: state => state.status,
    // },
    modules: {}
})

