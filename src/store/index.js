import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations'
import getters from './getters'
import immutable from './modules/immutable';
import permission from './modules/permission';
import user from './modules/user';

Vue.use(Vuex);

const state = {
  count: 1,
  appLoading: true,
};

// export default 封装代码，可以让外部引用.
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: false,
  modules: {
    immutable,
    permission,
    user,
  }
});
