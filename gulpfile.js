// Run with command: gulp test
var gulp = require('gulp');
var through = require('through2');
const cheerio = require('cheerio')


function addIdInTemplate(header){
    let returnContent = header.replace(/\r\n/g, ' ')
    returnContent = returnContent.replace(/\r/g, ' ')
    returnContent = returnContent.replace(/\n/g, ' ')
    returnContent = returnContent.replace(/<\/el-/g, '\n<\/el-')
    returnContent = returnContent.replace(/<el-/g, '\n<el-')
    var regModule=/(model=\")([^\"]*)\"/g
    var regId=/(id=\")([^\"]*)\"/g
    var regBtn = /<(el-button)([^<>]*)>/g
    var regInput = /<(el-input)([^<>]*)>/g
    var regSele = /<(el-select)([^<>]*)>/g
    var regDate = /<(el-date-picker)([^<>]*)>/g
    let contentArr=returnContent.split('\n');
   let resultArr =contentArr.map((item,index)=>{
      let id;
      // if(item.indexOf("guaranteeYear")>-1){
      //   console.info(regId.test(item))
      //   console.info(item)
      // }
      if(regId.test(item)){ 
        return item;
      }else{
       if(regInput.test(item)){
        while (res = regModule.exec(item)) { 
          if(res.length>0){
           id=res[0].replace('model="','').replace(/\"/g,'').replace(/\./g,'_');
          }
        }
        item="<el-input"+" id=\"input_"+id+"\""+item.substring("<el-input".length,item.length-1)+" "
      }
      if(regSele.test(item)){
        while (res = regModule.exec(item)) { 
          if(res.length>0){
            id=res[0].replace('model="','').replace(/\"/g,'').replace(/\./g,'_');
          }
        }
        item="<el-select"+" id=\"select_"+id+"\""+item.substring("<el-select".length,item.length-1)+" "
      }
      if(regDate.test(item)){
        while (res = regModule.exec(item)) { 
          if(res.length>0){
            id=res[0].replace('model="','').replace(/\"/g,'').replace(/\./g,'_');
          }
        }
        item="<el-date-picker"+" id=\"date_"+id+"\""+item.substring("<el-date-picker".length,item.length-1)+" "
      }
      if(regBtn.test(item)){
        item="<el-button"+" id=\"btn_"+index+"\""+item.substring("<el-button".length,item.length-1)+" "
      }
    }
      return item;
    })
    return (resultArr.join("\n"));
}


function getTemplateContent(res,path) {

    var total = res.length;
    var indexStart = res.indexOf('<template');
    var indexEnd = res.indexOf('</template>');
    var template = res.substring(indexStart, (indexEnd + 12));
    var remain = res.substring(template.length, total);
    
    template = addIdInTemplate(template);

    return template + remain;
}

gulp.task('test', function () {
    gulp.src('src/views/**/*.vue')
        .pipe(through.obj(function (file, encode, cb) {
            console.info(file.path);
            var result = file.contents.toString();
            result = getTemplateContent(result,file.path);
            const $ = cheerio.load(result)

            file.contents = new Buffer($.html());
            this.push(file);
            cb();
        }))
        .pipe(gulp.dest('dest/views/'));
})

gulp.task('default', ['test'])
