import api from '../../api/imgur';

const state = {
    token : null
};

const getters = {
    isLoggedIn: (state) => {
      return !!state.token ;
    }
    //!! convert value to boolean
};

const actions ={
    finalizeLogin: () => {

    },
    logout: ({commit}) => {
        commit('setToken', null);
    },
    login: () => {
        api.login();
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};