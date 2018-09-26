export default {
    // model
    formModel:{name:"222", age:12, gender:'femal', first:'su', last:'zhen', testA:"testA", testB:'testB', testC:'testC',payWay:'',bugetType:'',publishDate:'',effectDate:[], bizScope:[],desc:'',saleService:'',signDays:'',addrCity:"210200",addrCityDesc:"大连",addrProvince:"210000",addrProvinceDesc:"辽宁省",addrDist:"210211",addrDistDesc:"甘井子区"},
    // rules
    formRules:{
      name: [{ required: true, message: "请输入名称", trigger: "blur" }],
      gender: [{ required: true, message: "请输入性别", trigger: "blur" }],
      last: [{ required: true, message: "请输入输入姓氏", trigger: "blur" }],
      testA: [{ required: true, message: "请输入测试字段", trigger: "blur" }],
      payWay: [{ required: true, message: "请输入付款方式", trigger: "change" }],
      bugetType: [{ required: true, message: "请输入预算方式", trigger: "change" }],
      publishDate: [{ required: true, message: "请输入发布日期", trigger: "change" }],
      effectDate: [{ required: true, message: "请输入有效日期", trigger: "change" }],
      bizScope: [{ required: true, message: "请输入经营范围", trigger: "change" }],
      desc: [{ required: true, message: "请输入详细描述", trigger: "change" }],
      saleService: [{ required: true, message: "请输入售后服务", trigger: "change" }],
      signDays: [{ required: true, message: "请输入签约时间", trigger: "change" }],
    },
    // reference
    formRef:"personForm",
    // tile
    title:"个人信息",
    // fields
    fieldsArray:[
      {label:"项目名称",prop:"name",required:true,attr:"name",placeholder:"请输入名字", width:"100%", prefix:"",suffix:"",type:'input'},
      {label:"经费卡号",prop:"age",required:false,attr:"age",placeholder:"请输入年龄",width:"100%",prefix:"",suffix:"",type:'input'},
      {label:"申请单位",prop:"gender",required:true,attr:"gender",placeholder:"请输入性别",width:"100%",prefix:"",suffix:"",type:'input'},
      {label:"申请手机",prop:"first",required:false,attr:"first",placeholder:"请输入姓氏",width:"100%",prefix:"",suffix:"",type:'input'},
      {label:"申请人",prop:"last",required:true,attr:"last",placeholder:"请输入名字",width:"100%",prefix:"",suffix:"",type:'input'},
      {label:"申请邮箱",prop:"testA",required:true,attr:"testA",placeholder:"请输入测试字段",width:"100%",prefix:"",suffix:"",type:'input'},
      {label:"重量",prop:"testB",required:false,attr:"testB",placeholder:"请输入测试字段",width:"100%",prefix:"",suffix:"",type:'input'},
      {label:"外观尺寸",prop:"testC",required:false,attr:"testC",placeholder:"请输入测试字段",width:"100%",prefix:"",suffix:"",type:'input'},
      {label:"付款方式",prop:"payWay",required:true,attr:"payWay",placeholder:"请选择付款方式",width:"100%",prefix:"",suffix:"",type:'select',options:[{label:'货到付款',value:101},{label:'先付定金到货后再付款',value:102},{label:'货到后7个工作日内付款',value:103}]},
      {label:"预算方式",prop:"bugetType",required:true,attr:"bugetType",placeholder:"请选择预算方式",width:"100%",prefix:"",suffix:"",type:'radio',options:[{label:'允许(不公布预算)',value:1},{label:'不允许(公布预算)',value:2}]},
      {label:"发布日期",prop:"publishDate",required:true,attr:"publishDate",placeholder:"请输入发布日期",width:"100%",prefix:"",suffix:"",type:'date'},
      {label:"有效日期",prop:"effectDate",required:true,attr:"effectDate",placeholder:"请输入有效日期",width:"100%",prefix:"",suffix:"",type:'dateRange',options:{'startPlaceholder':'开始日期','endPlaceholder':'结束日期'}},
      {label:"经营范围",prop:"bizScope",required:true,attr:"bizScope",placeholder:"请选择经营范围",width:"100%",prefix:"",suffix:"",type:'checkbox',options:[{label:'咖啡',value:'biz-101'},{label:'蛋糕',value:'biz-102'},{label:'中餐',value:'biz-103'},{label:'西餐',value:'biz-104'}]},
      {label:"签约时间",prop:"signDays",required:true,attr:"signDays",placeholder:"请输入签约时间",width:"50%",prefix:"成交后",suffix:"个工作日",type:'input'},
      {label:"详细描述",prop:"desc",required:true,attr:"desc",placeholder:"请输入详细描述",width:"100%",prefix:"",suffix:"",type:'textArea'},
      {label:"售后服务",prop:"saleService",required:true,attr:"saleService",placeholder:"请输入售后服务",width:"100%",prefix:"",suffix:"",type:'textArea'},
      {label:"收货地点",prop:"",required:false,attr:"",placeholder:"请输入收货地点",width:"100%",prefix:"",suffix:"",type:'address'},
    ]
}
