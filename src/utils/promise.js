// function callback(){
//     console.info('Done');
// }

// console.info('before setTimeout');
// setTimeout(callback,1000);
// console.info('after setTimeout');

/**
 * Run result:
 * before setTimeout 
 * after setTimeout
 * Done
 */

// ES6 Promise基本用法

/**
 * 
    new Promise(fn) 返回一个promise对象
    在 fn 中指定异步等处理。
    处理结果正常的话，调用 resolve(处理结果值)。
    处理结果错误的话，调用 reject(Error对象)。
 * 
 */

 export function getURL(URL){
    return new Promise((resolve, reject) => {
        var req = new XMLHttpRequest();
        req.open('GET', URL,true);
        req.onload = function(){
            if(req.status === 200){
                console.info('11111111');
                return resolve(req.responseText);
            }else{
                console.info('22222222');
                return reject(new Error(req.statusText));
            }
        };
        req.onerror = function(){
            console.info('33333333');
            return reject(new Error(req.statusText));
        };
        console.info('44444444');
        req.send();
    });
 }

//  var URL = 'localhost';
getURL(URL)
 .then(res=>{
    console.info('55555555');
     console.info(res)
 })
 .catch(err => {
    console.info('66666666');
     console.info(err);
 });

 // 44444444
 // 11111111
 // 55555555
 // 44444444
 // 11111111