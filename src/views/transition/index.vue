<template>
  <div style="text-align:center;">
    <!-- DEMO_______________1 -->
    <el-button @click="add" type="primary">Add a number</el-button>
    <el-button @click="remove" type="danger">Remove a number</el-button> <br><br>
    <transition-group name="bounce" enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
      <div v-for="(item,index) in items" :key="index" class="list-item">
        {{item}}
      </div>
    </transition-group>

    <hr>

    <!-- DEMO_______________2 -->
    
    <el-button @click="addProduct" type="primary">Add products</el-button>
    <el-button @click="removeProduct" type="danger">Remove products</el-button> <br><br>
    <el-row>
      <el-col :offset="9" :span="6">
        <el-input v-model="product" placeholder=""></el-input>
      </el-col>
    </el-row>

    <div><code>enter-active-class="bounceInLeft" leave-active-class="bounceOutRight"</code></div>
    <transition-group name="bounce" enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
      <div style="padding-top:10px;" v-for="(item,index) in products" :key="index">
        <el-tag closable :type="getTagType()">
          {{item}}
        </el-tag>
      </div>
    </transition-group>
    <hr>
    
  </div>
</template>

<script>
import {uuid} from "@/utils/normal";
export default {
  data(){
    // var defaultSides = 10
  	// var stats = Array.apply(null, { length: defaultSides })
    // 	.map(function () { return 100 })
    return{
      items:[1,2,3,4,5,6,7,8,9],
      nextNum:10,
      products:[],
      product:"",
      tagType:"",
      tagTypes:["success","info","warning","danger"],
    }
  },
  
  methods:{
     getTagType(){
      let tagType = ["primary","info","warning","success","danger"];
      let index = Math.floor(Math.random() * 5);
      return tagType[index]
    },

    randomIndex(){
      return Math.floor(Math.random()*this.items.length);
    },

    add(){
      this.items.splice(this.randomIndex(),0,this.nextNum++);
    },

    remove(){
      this.items.splice(this.randomIndex(),1);
    },

    addProduct(){
      this.product = uuid();
      this.products.push(this.product);
    },

    removeProduct(){
      this.products.splice(this.randomIndex(),1);
    }
  },
  mounted: function () {
  },
}

</script>

<style lang="scss">
.list-item{
  display: inline-block;
  margin-right: 10px;
  color:rgb(63, 168, 160);
}
.list-enter-active, .list-leave-active{
  transition: all 1s;
}
.list-enter,.list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
</style>

