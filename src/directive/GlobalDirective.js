import Vue from 'vue';
import defaultImgOnError from '@/assets/img-icon.png';

Vue.directive('imgOnError', {
    bind: function (el, binding) {
        el.onerror = function(){
            this.src = defaultImgOnError;
        }
    }
})

Vue.directive('imgOnClick', {
    // <img v-imgOnError v-imgOnClick="{name:'suzhen',age:20}" />
    bind: function (el, binding) {
        console.info(binding.value); // {name:'suzhen' , age: 20}
        el.style.cursor = 'pointer';
        el.onclick = function(){
            VUE_INSTANCE.$message({ message: binding.value, type: "success" });
        }
    }
})