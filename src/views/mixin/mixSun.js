export default {
    data(){
        return {
          sun:{ name: "Sun", age: 1111116, company: 'Sky'}
        }
      },
      methods:{
        showError(){
          this.$message({
            type:'error',
            message: this.sun,
          });
        },
      }
}