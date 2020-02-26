import Vue from 'vue';
import Vuex from 'vuex';

import { userService } from '@/service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    ['SET_USERS'](state, { users }) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const {
        data: { users },
      } = await userService.users();

      commit('SET_USERS', { users });
    },
  },
});
