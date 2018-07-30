export default {
  addAction({commit}){
    setTimeout(()=>{
      commit('add',4)
    },3000);
    console.info('我比reduce提前执行.');
  },
  reduceAction({commit}){
    commit('reduce',4)
  },
}
