/**
 * 存储localStorage
 */

 const localUtil = window.localStorage;

 export const setStore = (name,content) => {
    if(!name) return;
    if(typeof content !== 'string'){
        content = JSON.stringify(content);
    }
    localUtil.setItem(content);
 }

 /**
 * 获取localStorage
 */
 export const getStore = (name) => {
     if(!name) return;
     let value = localUtil.getItem(name);
     if(value !== null){
         try{
             value = JSON.parse(value);
         }catch(e){
             value = value;
         }
     }
     return value;
 }

/**
 * 清除localStorage
 */
export const removeStore = (name) =>{
    if(!name) return;
    localUtil.removeItem(name);
}