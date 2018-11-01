
const permission = {
  namespaced: true,
  state: {
    leftMenus: [],
  },
  mutations: {
    INIT_LEFT_MENUS:(state, menus) => {
      state.leftMenus = menus;
    },
  },
  actions: {}
};

export default permission;
