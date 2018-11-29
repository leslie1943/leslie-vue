
import { getUserInfoAPI } from "@/api/user";
export default {
    namespaced: true,
    state: {
        userList: [],
    },
    mutations: {
        SET_USERS_LIST: (state, users) => {
            state.userList = users;
        },
    },
    actions: {
        async getUserList({ commit }) {
            const res = await getUserInfoAPI();
            console.info(res);
            commit('SET_USERS_LIST', res.data);
            // const { status, message, data } = res.data
            // if (status === 1) {
            //     commit('SET_USERS_LIST', data);
            // } else {
            //     throw new Error(message);
            // }
            return res;
        }
    }
};
