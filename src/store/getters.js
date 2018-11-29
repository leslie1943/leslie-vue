const getters = {
  count: state => state.count,
  immutableData: state => state.immutable.immutableData,
  leftMenus: state => state.permission.leftMenus,
  userList: state => state.user.userList,
}

export default getters;
