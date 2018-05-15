import Vue from 'vue';
import Vuex from 'vuex';
import { callFetchApi } from "../utils/shared/api";
import * as constants from '../utils/shared/constants';

Vue.use(Vuex);

const state = {
    warehouses: []
};

const mutations = {
    FETCH_WAREHOUSES_SUCCESS (state, warehouses) {
        state.warehouses = warehouses
    },
};

const getters = {
    getWarehouses: state => state.warehouses
}

const actions = {
    FETCH_WAREHOUSES (context) {
        return callFetchApi(constants.url, {}, 'GET')
            .then((response) => context.commit('FETCH_WAREHOUSES_SUCCESS', response))
            .catch((error) => context.commit('API_FAILURE', error));
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});

export default store;