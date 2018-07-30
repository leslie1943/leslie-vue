module.exports = function (content) {
  let returnContent = content.replace(/\r\n/g, ' ')
  returnContent = returnContent.replace(/\r/g, ' ')
  returnContent = returnContent.replace(/\n/g, ' ')
  returnContent = returnContent.replace(/<\/el-/g, '\n<\/el-')
  returnContent = returnContent.replace(/<el-/g, '\n<el-')
  var regModule = /(model=\")([^\"]*)\"/g
  // var regClick = /(click=\")[\s\S]*\"/g
  var regId = /(id=\")([^\"]*)\"/g
  var regBtn = /<(el-button)([^<>]*)>/g
  var regInput = /<(el-input)([^<>]*)>/g
  var regSele = /<(el-select)([^<>]*)>/g
  var regDate = /<(el-date-picker)([^<>]*)>/g
  var regInputNumber = /<(el-input-number)([^<>]*)>/g
  function makeId_input(index, item) {
    let id;
    let res = regModule.exec(item)
    if (res && res.length > 0) {
      id = res[0].replace('model="', '').replace(/\"/g, '').replace(/\./g, '_');
    }
    return id ? id : index;
  }
  function makeId_btn(index, item) {
    let id;
    let clickAllArr = item.split(/click=/g);
    let subClick = "";
    let subClickArr = [];
    if (clickAllArr.length > 1) {
      subClick = clickAllArr[1].substring(1, clickAllArr[1].length);
      subClickArr = subClick.split(/"/g);
      if (subClickArr.length > 1) {
        id = subClickArr[0].split(/\=/g)[0].split(/\(\"/g)[0].split(/\(\'/g)[0].split(/\(/g)[0];
      } else {
        id = index;
      }
    } else {
      id = index;
    }
    // console.info(id)
    // console.info("-------------------------------------------------------------");
    return id ? id : index;
  }
  let contentArr = returnContent.split('\n');
  let resultArr = contentArr.map((item, index) => {
    let id;
    if (!regId.test(item)) {
      // 输入框 - 数字
      if (regInputNumber.test(item)) {
        item = "<el-input-number" + " id=\"input_number_" + makeId_input(index, item) + "\"" + item.substring("<el-input-number".length, item.length) + " "
      } else if (regInput.test(item)) {
        // 输入框
        item = "<el-input" + " id=\"input_" + makeId_input(index, item) + "\"" + item.substring("<el-input".length, item.length) + " "
      }
      if (regSele.test(item)) {
        // 选择狂
        item = "<el-select" + " id=\"select_" + makeId_input(index, item) + "\"" + item.substring("<el-select".length, item.length) + " "
      }
      if (regDate.test(item)) {
        // 日期选择
        item = "<el-date-picker" + " id=\"date_" + makeId_input(index, item) + "\"" + item.substring("<el-date-picker".length, item.length) + " "
      }
      if (regBtn.test(item)) {
        // 按钮
        item = "<el-button" + " id=\"btn_" + makeId_btn(index, item) + "\"" + item.substring("<el-button".length, item.length) + " "
        // console.info(item);
      }
    }

    return item;
  })
  return resultArr.join("\n");
}