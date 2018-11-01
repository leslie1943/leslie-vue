const getters = {
  count: state => state.count,
  immutableData: state => state.immutable.immutableData,
  leftMenus: state => state.permission.leftMenus,
}

export default getters;
