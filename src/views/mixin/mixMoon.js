export default {
    data(){
        return {
          moon:{ name: "Moon", age: 6, company: 'School'}
        }
      },
      methods:{
        showInfo(){
          this.$message({
            type:'info',
            message: this.leslie,
          });
        },
      }
}