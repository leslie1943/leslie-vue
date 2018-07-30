export default {
    namespaced: true,
    state: {
        immutableData: {
            name: "suzhen",
            mobile: "13478452949"
        }
    },
    mutations: {
        SET_DATA: (state, data) => {
            state.immutableData = data;
        },

    },
    actions: {
        initData({ commit }, data) {
            commit('SET_DATA', result);
        },
    },
};
