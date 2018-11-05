//mutation是固定写法,意思是改变的,
//我们只需要知道要改变state里属性的值的操作(方法)必须写在mutation里.
export default {
  add(state, n) {
    state.count += (n ? n : 1);
  },
  reduce(state, n) {
    state.count -= (n ? n : 1);
  },
  endLoading(state){
    state.appLoading = false;
  }
};
