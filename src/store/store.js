import Vue from 'vue';
import Vuex from 'vuex';
import VuexSaga from 'vuex-saga';
import fetchWarehouses from '../actions/fetchWarehouses';

Vue.use(Vuex);

const state = {
    warehouses: []
};

const mutations = {
};

const getters = {
    getWarehouses: (state) => {
        return state.warehouses;
    }
}

const actions = {
    fetchWarehouses,
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});

Vue.use(VuexSaga, { store: store });

export default store;