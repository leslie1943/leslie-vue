// import lcjr_1 from "./imgs/lcjr_1.jpg";
// import lcjr_2 from "./imgs/lcjr_2.jpg";
// import lcjr_3 from "./imgs/lcjr_3.jpg";

import dd1 from "./imgs/dd1.jpg";
import dd2 from "./imgs/dd2.jpg";
import dd3 from "./imgs/dd3.jpg";
import dd4 from "./imgs/dd4.jpg";

import etj1 from "./imgs/etj1.jpg";
import etj2 from "./imgs/etj2.jpg";
import etj3 from "./imgs/etj3.jpg";
import etj4 from "./imgs/etj4.jpg";

import jysp1 from "./imgs/jysp1.jpg";
import jysp2 from "./imgs/jysp2.jpg";
import jysp3 from "./imgs/jysp3.jpg";
import jysp4 from "./imgs/jysp4.jpg";

export default {
  previewDialogVisible: false,
  previewDialogImageUrl: "",
  dialogVisible: false,
  currentRow: {
    ending: {

    },
    name: "",
  },
  dramas: [
    // -------------------------- 蛊魂铃
    {
      name: "蛊魂铃", persons: 6, copyright: false, type: "现代都市",
      host: "NANA",
      roles: [
        { realName: "冬冬", cosName: "龙锦坤" },
        { realName: "郭磊", cosName: "韩啸天" },
        { realName: "周游", cosName: "叶昧娘" },
        { realName: "马克", cosName: "龙晓五" },
        { realName: "雪莲", cosName: "花月楼" },
        { realName: "苏震", cosName: "龙承志" }
      ],
      status: 2,
      places: ["Keys"],
      photos: [
        { id: 1, path: dd1 },
        { id: 2, path: dd2 },
        { id: 4, path: dd4 },
        { id: 3, path: dd3 },
      ],
    },
    // --------------------------孽岛疑云
    {
      name: "孽岛疑云", persons: 5, copyright: false, type: "现代都市",
      host: 'NANA',
      roles: [
        { realName: "冬冬", cosName: "阿海" },
        { realName: "周游", cosName: "阿杰" },
        { realName: "颖姐", cosName: " 舒望" },
        { realName: "马克", cosName: "玉馨" },
        { realName: "雪莲", cosName: "唐小姐" },
      ],
      status: 2,
      places: ["Keys"],
      photos: [
        { id: 4, path: dd4 },
        { id: 3, path: dd3 },
        { id: 1, path: dd1 },
        { id: 2, path: dd2 },
      ],
    },
    // --------------------------良辰吉日
    {
      name: "良辰吉日", persons: 8, copyright: false, type: "现代都市",
      host: "路人甲",
      roles: [
        { realName: "冬冬", cosName: "武仲文" },
        { realName: "郭磊", cosName: "柳眠" },
        { realName: "周游", cosName: "殷思齐" },
        { realName: "颖姐", cosName: "妙玄" },
        { realName: "马克", cosName: "梁仁甫" },
        { realName: "雪莲", cosName: "武夫人" },
        { realName: "苏震", cosName: "净虚子" },
        { realName: "慧莹", cosName: "含烟" }
      ],
      status: 2,
      places: ["Keys"],
      photos: [
        { id: 2, path: dd2 },
        { id: 3, path: dd3 },
        { id: 4, path: dd4 },
        { id: 1, path: dd1 },
      ],
    },
    // --------------------------盖弥书院
    {
      name: "盖弥书院", persons: 7, copyright: false, type: "现代都市",
      host: "NANA",
      roles: [
        { realName: "冬冬", cosName: "学生A-擅长C语言" },
        { realName: "郭磊", cosName: "医生助理" },
        { realName: "周游", cosName: "三重身份的老师" },
        { realName: "颖姐", cosName: "学生B-早恋女孩" },
        { realName: "马克", cosName: "食堂大妈-陈琴" },
        { realName: "雪莲", cosName: "学生C-擅长偷听" },
        { realName: "苏震", cosName: "医生" },
      ],
      status: 2,
      places: ["Keys"],
      photos: [
        { id: 3, path: dd3 },
        { id: 1, path: dd1 },
        { id: 2, path: dd2 },
        { id: 4, path: dd4 }
      ],
    },
    // --------------------------星座怪谈
    {
      name: "星座怪谈", persons: 7, copyright: false, type: "现代都市",
      host: "NANA",
      roles: [
        { realName: "冬冬", cosName: "老师-田蝎" },
        { realName: "郭磊", cosName: "占星师-陈谢" },
        { realName: "周游", cosName: "警察-杨佰" },
        { realName: "颖姐", cosName: "调音师-秦水" },
        { realName: "马克", cosName: "舞者-黄天平" },
        { realName: "雪莲", cosName: "人事科长-霍双" },
        { realName: "苏震", cosName: "研究生-何杰" },
      ],
      status: 2,
      places: ["Keys"],
      photos: [
        { id: 2, path: dd2 },
        { id: 3, path: dd3 },
        { id: 1, path: dd1 },
        { id: 4, path: dd4 }
      ],
    },
    // --------------------------大胥密史
    {
      name: "大胥密史", persons: 7, copyright: false, type: "现代都市",
      host: "胖弟",
      roles: [
        { realName: "冬冬", cosName: "二皇子-唐煜" },
        { realName: "郭磊", cosName: "王爷-唐沛" },
        { realName: "周游", cosName: "御医-宫禾因" },
        { realName: "颖姐", cosName: "继后-柳秀烟" },
        { realName: "马克", cosName: "镇南王-陈钊" },
        { realName: "雪莲", cosName: "郡主-陈适如" },
        { realName: "苏震", cosName: "状元-李又廷" },
      ],
      status: 2,
      places: ["U乐园"],
      photos: [
        { id: 1, path: dd1 },
        { id: 3, path: dd3 },
        { id: 2, path: dd2 },
        { id: 4, path: dd4 }
      ],
      ending: {
        name: '大胥秘史',
        realMurder: "镇南王 陈钊",
        voteMurder: "继后 柳秀烟",
        detail: [
          { index: 1, desc: "王爷唐沛手握边疆兵权，助二皇子唐煜（实为唐沛之子）夺得皇位，当上了摄政王。" },
          { index: 2, desc: "二皇子唐煜未能与状元李又廷双宿双飞，闲云野鹤，无奈的继承王位，当上了皇帝。" },
          { index: 3, desc: "状元李又廷助唐煜夺取皇位后，黯然褪去，从此闲云野鹤。" },
          { index: 3, desc: "镇南王陈钊造反失败，逃出京城，与外藩勾结，伺机继续造反。" },
          { index: 4, desc: "郡主陈适如未能用腹中之子夺得皇位，但是唐煜宅心仁厚，未处死陈适如，而是转纳为妾，让其在宫中苟活。" },
          { index: 5, desc: "继后柳如烟未能通过玉玺和假圣旨夺得皇位，由于跟王爷唐沛有私情，唐沛怕事情败露影响皇位，残忍将其灭口。" },
          { index: 5, desc: "御医宫禾因助唐煜夺取皇位，而背叛了有救命之恩的柳后，令人匪夷所思。后来因为知道的事太多，也被灭口。" },
        ]
      },
    },
    // --------------------------苍笙九剑
    {
      name: "苍笙九剑", persons: 7, copyright: true, type: "现代都市",
      host: "NANA",
      roles: [
        { realName: "郭磊", cosName: "郭清" },
        { realName: "周游", cosName: "离夜" },
        { realName: "颖姐", cosName: "绝尘" },
        { realName: "马克", cosName: "白洛" },
        { realName: "雪莲", cosName: "如梦" },
        { realName: "苏震", cosName: "无为道人" },
        { realName: "慧莹", cosName: "薛恩初" }
      ],
      status: 2,
      places: ["Keys"],
      photos: [
        { id: 2, path: dd2 },
        { id: 1, path: dd1 },
        { id: 4, path: dd4 },
        { id: 3, path: dd3 },
      ],
      ending: {
        name: '苍笙九剑',
        realMurder: "无为道士（降剑谷 楚风）",
        voteMurder: "摘星阁 郭清",
        detail: [
          { index: 1, desc: "白洛和绝尘双宿双飞，儿女成行，并与离夜和薛恩初结为好友。" },
          { index: 2, desc: "离夜和薛恩初双宿双飞，儿女成行，并与白洛和绝尘结为好友。" },
          { index: 3, desc: "如梦（寒月）与楚风互相渗透失败，后来惨死" },
          { index: 4, desc: "楚风没能与师妹寒月相认，也未能将九剑谜章带回降剑谷，从此闲云野鹤" },
          { index: 5, desc: "郭清没能救活爱妻，也没与离夜相认父子，最终殉情而去。" },
        ]
      },
    },
    // -------------------------- 儿童劫
    {
      name: "儿童劫", persons: 7, copyright: false, type: "未来穿越",
      host: "胖姐",
      roles: [
        { realName: "郭磊", cosName: "林间" },
        { realName: "老板", cosName: "安南" },
        { realName: "马克", cosName: "海岸" },
        { realName: "雪莲", cosName: "韵竹" },
        { realName: "苏震", cosName: "安北" },
        { realName: "慧莹", cosName: "慕璟" }
      ],
      status: 2,
      places: ["U乐园"],
      photos: [
        { id: 2, path: etj1 },
        { id: 1, path: etj2 },
        { id: 4, path: etj3 },
        { id: 3, path: etj4 },
      ],
      ending: {
        name: '儿童劫',
        realMurder: "杀死岳雨克隆体-林间, 杀死岳雨本体-安北, 幕后黑手-慕璟",
        voteMurder: "杀死岳雨克隆体-韵竹, 杀死岳雨本体-海岸, 幕后黑手-无",
        detail: [
          { index: 1, desc: "全体懵逼" },
          { index: 2, desc: "全体懵逼" },
          { index: 3, desc: "全体懵逼" },
          { index: 4, desc: "全体懵逼" },
          { index: 5, desc: "全体懵逼" },
        ]
      },
    },
    // -------------------------- 记忆碎片
    {
      name: "记忆碎片", persons: 7, copyright: true, type: "未来穿越",
      host: "老板",
      roles: [
        { realName: "郭磊", cosName: "马修" },
        { realName: "周游", cosName: "托尔" },
        { realName: "颖姐", cosName: "香香" },
        { realName: "马克", cosName: "莱特🐺" },
        { realName: "雪莲", cosName: "扎克" },
        { realName: "苏震", cosName: "艾米" },
        { realName: "慧莹", cosName: "璐娅🐺" }
      ],
      status: 2,
      places: ["海帝"],
      photos: [
        { id: 2, path: jysp1 },
        { id: 1, path: jysp2 },
        { id: 4, path: jysp3 },
        { id: 3, path: jysp4 },
      ],
      ending: {
        name: '记忆碎片',
        realMurder: "艾米",
        voteMurder: "香香",
        detail: [
          { index: 1, desc: "老板主持好评,继续保持！👍👍👍👍👍👍" },
          { index: 2, desc: "莱特和璐娅是两条狗确实出人意料，归功于老板的画工。" },
          { index: 3, desc: "马修通吃艾米和托尔姐弟俩，佩服佩服." },
          { index: 4, desc: "托尔，em......................." },
          { index: 5, desc: "莱特真❤爱选的是艾米，而不是同类的璐娅，可以可以!" },
          { index: 6, desc: "扎克，接盘侠！" },
          { index: 7, desc: "香香，为了生存，套路众人，之后杀了自己的孩子，本剧最该投死之人,众望所归!" },
        ]
      },
    },
    // -------------------------- 大明青龙劫
    {
      name: "大明青龙劫", persons: 7, copyright: true, type: "未来穿越",
      host: "Mark",
      roles: [
        { realName: "冬冬", cosName: "王农夫" },
        { realName: "郭磊", cosName: "何总兵" },
        { realName: "周游", cosName: "鬼小妾" },
        { realName: "颖姐", cosName: "撒师爷" },
        { realName: "雪莲", cosName: "杨巡捕" },
        { realName: "苏震", cosName: "蓉浪人" },
        { realName: "慧莹", cosName: "白秀才" }
      ],
      status: 2,
      places: ["海帝"],
      photos: [
        { id: 2, path: jysp1 },
        { id: 1, path: jysp2 },
        { id: 4, path: jysp3 },
        { id: 3, path: jysp4 },
      ],
      ending: {
        name: '大明青龙劫',
        realMurder: "鬼小妾",
        voteMurder: "鬼小妾",
        detail: [
          { index: 1, desc: "Mark主持好评,继续保持！👍👍👍👍👍👍" },
          { index: 2, desc: "何总兵和蓉浪人分别自爆身份，撇清嫌疑。" },
          { index: 3, desc: "王农夫作为一个逃兵是如何混进的县衙，如何吃的屎？一直困扰着大家" },
          { index: 4, desc: "撒师爷画蛇添足的一枪也洗清了犯罪嫌疑" },
          { index: 5, desc: "白秀才虽然多次被鬼小妾和撒师爷泼脏水，终究洗白了自己" },
          { index: 6, desc: "鬼小妾，投票给自己的亲生姐姐，一子错满盘皆输，聪明反被聪明误。" },
          { index: 7, desc: "杨巡捕在全场懵逼的状态下，抓住了最后一投的机会，成功绝杀了鬼小妾，使得真凶无处躲藏，真相大败于天下。" },
        ]
      },
    },
  ]
}
