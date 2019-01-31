import ViewClamp from './src/ViewClamp';

/*  页面左右布局 */
ViewClamp.install = function (Vue) {
  Vue.component(ViewClamp.name, ViewClamp);
};

export default ViewClamp;