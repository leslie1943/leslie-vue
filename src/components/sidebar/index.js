import SideBar from './src/sidebar';
SideBar.install = function (Vue) {
  Vue.component(SideBar.name, SideBar);
};

export default SideBar;