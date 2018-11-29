// import lcjr_1 from "./imgs/lcjr_1.jpg";
// import lcjr_2 from "./imgs/lcjr_2.jpg";
// import lcjr_3 from "./imgs/lcjr_3.jpg";

import dd1 from "./imgs/dd1.jpg";
import dd2 from "./imgs/dd2.jpg";
import dd3 from "./imgs/dd3.jpg";
import dd4 from "./imgs/dd4.jpg";

export default {
    previewDialogVisible: false,
    previewDialogImageUrl: "",
    dialogVisible: false,
    currentRow:{},
    dramas:[
        // {name:"良辰吉日", type:"逻辑推理",persons:7, timeSpan:"4-5 小时",cost:"￥59.00",difficuty:3.8, recom: 4, status: 2,places:["青泥洼桥"],detail:"蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中蛊魂铃是一个特别好玩的剧本,由著名工作室不知道来开发,剧中....",dinner:["香辣蟹","烧烤"],},
        
        // -------------------------- 蛊魂铃
        {
          name: "蛊魂铃", persons : 6, copyright: false,type:"现代都市",
          roles:[
            {realName:"冬冬", cosName: "龙锦坤"},
            {realName:"郭磊", cosName: "韩啸天"},
            {realName:"周游", cosName: "叶昧娘"},
            {realName:"马克", cosName: "龙晓五"},
            {realName:"雪莲", cosName: "花月楼"},
            {realName:"苏震", cosName: "龙承志"}
          ], 
          status: 2, 
          places:["Keys"],
          photos:[
            {id: 1, path: dd1},
            {id: 2, path: dd2},
            {id: 4, path: dd4},
            {id: 3, path: dd3},
          ],
        },
        // --------------------------孽岛疑云
        {
          name: "孽岛疑云", persons : 5, copyright: false,type:"现代都市",
          roles:[
            {realName:"冬冬", cosName: "阿海"},
            {realName:"周游", cosName: "阿杰"},
            {realName:"颖姐", cosName: " 舒望"},
            {realName:"马克", cosName: "玉馨"},
            {realName:"雪莲", cosName: "唐小姐"},
          ], 
          status: 2, 
          places:["Keys"],
          photos:[
            {id: 4, path: dd4},
            {id: 3, path: dd3},
            {id: 1, path: dd1},
            {id: 2, path: dd2},
          ],
        },
        // --------------------------良辰吉日
        {
          name: "良辰吉日", persons : 8, copyright: false, type:"现代都市",
          roles:[
            {realName:"冬冬", cosName: "武仲文"},
            {realName:"郭磊", cosName: "柳眠"},
            {realName:"周游", cosName: "殷思齐"},
            {realName:"颖姐", cosName: "妙玄"},
            {realName:"马克", cosName: "梁仁甫"},
            {realName:"雪莲", cosName: "武夫人"},
            {realName:"苏震", cosName: "净虚子"},
            {realName:"惠莹", cosName: "含烟"}
          ], 
          status: 2, 
          places:["Keys"],
          photos:[
            {id: 2, path: dd2},
            {id: 3, path: dd3},
            {id: 4, path: dd4},
            {id: 1, path: dd1},
          ],
        },
        // --------------------------盖弥书院
        {
          name: "盖弥书院", persons : 7, copyright: false, type:"现代都市",
          roles:[
            {realName:"冬冬", cosName: "学生A-擅长C语言"},
            {realName:"郭磊", cosName: "医生助理"},
            {realName:"周游", cosName: "三重身份的老师"},
            {realName:"颖姐", cosName: "学生B-早恋女孩"},
            {realName:"马克", cosName: "食堂大妈-陈琴"},
            {realName:"雪莲", cosName: "学生C-擅长偷听"},
            {realName:"苏震", cosName: "医生"},
          ], 
          status: 2, 
          places:["Keys"],
          photos:[
            {id: 3, path: dd3},
            {id: 1, path: dd1},
            {id: 2, path: dd2},
            {id: 4, path: dd4}
          ],
        },
        // --------------------------星座怪谈
        {
          name: "星座怪谈", persons : 7, copyright: false,type:"现代都市",
          roles:[
            {realName:"冬冬", cosName: "老师-田蝎"},
            {realName:"郭磊", cosName: "占星师-陈谢"},
            {realName:"周游", cosName: "警察-杨佰"},
            {realName:"颖姐", cosName: "调音师-秦水"},
            {realName:"马克", cosName: "舞者-黄天平"},
            {realName:"雪莲", cosName: "人事科长-霍双"},
            {realName:"苏震", cosName: "研究生-何杰"},
          ], 
          status: 2, 
          places:["Keys"],
          photos:[
            {id: 2, path: dd2},
            {id: 3, path: dd3},
            {id: 1, path: dd1},
            {id: 4, path: dd4}
          ],
        },
        // --------------------------大胥密史
        {
          name: "大胥密史", persons : 7, copyright: false,type:"现代都市",
          roles:[
            {realName:"冬冬", cosName: "二皇子-唐煜"},
            {realName:"郭磊", cosName: "王爷-唐沛"},
            {realName:"周游", cosName: "御医-宫禾因"},
            {realName:"颖姐", cosName: "继后-柳秀烟"},
            {realName:"马克", cosName: "镇南王-陈钊"},
            {realName:"雪莲", cosName: "郡主-陈适如"},
            {realName:"苏震", cosName: "状元-李又廷"},
          ], 
          status: 2, 
          places:["U乐园"],
          photos:[
            {id: 1, path: dd1},
            {id: 3, path: dd3},
            {id: 2, path: dd2},
            {id: 4, path: dd4}
          ],
        },
        // --------------------------苍笙九剑
        {
          name: "苍笙九剑", persons : 7, copyright: true,type:"现代都市",
          roles:[
            {realName:"郭磊", cosName: "郭清"},
            {realName:"周游", cosName: "离夜"},
            {realName:"颖姐", cosName: "绝尘"},
            {realName:"马克", cosName: "白洛"},
            {realName:"雪莲", cosName: "如梦"},
            {realName:"苏震", cosName: "无为道人"},
            {realName:"惠莹", cosName: "薛恩初"}
          ], 
          status: 2, 
          places:["Keys"],
          photos:[
            {id: 2, path: dd2},
            {id: 1, path: dd1},
            {id: 4, path: dd4},
            {id: 3, path: dd3},
            
          ],
        },
    ]
      
}