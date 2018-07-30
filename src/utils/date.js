/**
 * 
 * @param {几天后} days 
 * @param {默认时间} t 
 */
function getDaysLater(days,time){
    let target = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000);
    let date = target.getFullYear();
    let month = target.getMonth() + 1;
    let day = target.getDate();
    let t = time + ":00:00";
    return date + "-" + month + "-" + day + " " + t;
    // return new Date(date+"/" + month + "/" + day + " " + t);
}

/**
 * function: 需求单剩余时间比较
 * params: 
 *    data - 当前要处理的需求单
 * result:
 *    return : 已结束
 *    return : days + "天" + hours + ":" + minutes + ":" + seconds;
 */

function calcLeftTime(time) {
    // let end = new Date(time.replace(/\-/g, "/"));
    var arr = time.split(/[- : /]/);
    let end = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
    let current = new Date();
    
    //时间差的毫秒数
    var diff = end.getTime() - current.getTime();
    if (diff < 0) {
      return "已结束";
    }
    //计算出相差天数
    var days = Math.floor(diff / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); 
    //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    minutes = minutes > 9 ? minutes : "0" + minutes;
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); 
    //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
  
    seconds = seconds > 9 ? seconds : "0" + seconds;
    return days + " 天 " + hours + ":" + minutes + ":" + seconds;
  }

export {
    getDaysLater,
    calcLeftTime
  };