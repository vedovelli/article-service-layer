import Vue from 'vue';
import Vuex from 'vuex';

import { userService } from '@/service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    ui: {
      error: '',
    },
  },
  mutations: {
    ['SET_USERS'](state, { users }) {
      state.users = users;
    },
    ['SET_ERROR_MESSAGE'](state, { error }) {
      state.ui.error = error;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const {
        data: { users },
      } = await userService.users();

      commit('SET_USERS', { users });
    },
    setErrorMessage({ commit }, { error }) {
      commit('SET_ERROR_MESSAGE', { error });
    },
  },
});
