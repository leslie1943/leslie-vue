import Vue from 'vue';
import defaultImgOnError from '@/assets/img-icon.png';

Vue.directive('imgOnError', {
    bind: function (el, binding) {
        el.onerror = function(){
            this.src = defaultImgOnError;
        }
    }
})