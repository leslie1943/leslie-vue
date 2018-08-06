export function getTableData() {
    return {
        pureData:{
            // 表头: 采购需求+采购详细+ 所有报价的供应商.
            names: ["大连万达集团", "大连理工大学", "大连交通大学", "东北财经大学", "大连海洋大学"],
            totalPrice: [10000, 20000, 30000, 40000, 50000],
            // 内容: 
            tables: [
                // --------------------------------- data 1
                {
                    rowspan: 8, // 5 + x(证件)
                    quantity: 3,
                    unit: "台",
                    rows: [
                        //品牌、规格型号
                        {
                            demandName: "笔记本电脑",
                            demandPara: ["苹果air", "联想Lenove G470", "戴尔 D10"],
                            demandProviders: [{ flag: 3, item: "苹果air", desc: "更多" }, { flag: 3, item: "联想Lenove", desc: "更多" }, { flag: 3, item: "戴尔 D10", desc: "更多" }, { flag: 3, item: "戴尔 D10", desc: "更多" }, { flag: 3, item: "苹果air", desc: "更多" }],
                        },
                        // 技术参数及设置要求
                        {
                            demandName: "笔记本电脑",
                            demandPara: ["1T硬盘", "8M内存"],
                            demandProviders: [{ flag: 2, desc: "技术参数及设置要求-补充说明" }, { flag: 2, desc: "技术参数及设置要求-补充说明" }, { flag: 1, desc: "技术参数及设置要求-补充说明" }, { flag: 1, desc: "技术参数及设置要求-补充说明" }, { flag: 2, desc: "技术参数及设置要求-补充说明" }],
                        },
                        // 售后服务要求
                        {
                            demandName: "笔记本电脑",
                            demandPara: ["三年保修", "7*24小时电话支持"],
                            demandProviders: [{ flag: 1, desc: "售后服务要求-补充说明" }, { flag: 1, desc: "售后服务要求-补充说明" }, { flag: 2, desc: "售后服务要求-补充说明" }, { flag: 2, desc: "售后服务要求-补充说明" }, { flag: 1, desc: "售后服务要求-补充说明" }],
                        },
    
                        {
                            demandName: "笔记本电脑",
                            demandPara: "实名证件-身份证",
                            demandProviders: ["身份证-111111111", "身份证-222222222", "身份证-333333333", "身份证-444444444", "身份证-555555555"],
                        },
    
                        {
                            demandName: "笔记本电脑",
                            demandPara: "厂商证件 - 医疗器械生产许可证",
                            demandProviders: ["厂商证件-111111111", "厂商证件-222222222", "厂商证件-333333333", "厂商证件-444444444", "厂商证件-555555555"],
                        },
    
                        {
                            demandName: "笔记本电脑",
                            demandPara: "代理商证件-医疗器械产品注册证",
                            demandProviders: ["代理商证件-111111111", "代理商证件-222222222", "代理商证件-333333333", "代理商证件-444444444", "代理商证件-555555555"],
                        },
                        {
                            demandName: "笔记本电脑",
                            demandPara: "供应商报价",
                            demandProviders: ["10000.00", "20000.00", "30000.00", "44123.00", "99999.00"],
                        },
                        {
                            demandName: "笔记本电脑",
                            demandPara: "报价备注",
                            demandProviders: ["电脑-报价备注-1111", "电脑-报价备注-2222", "电脑-报价备注-3333", "电脑-报价备注-4444", "电脑-报价备注-5555"],
                        },
                    ]
                },
    
                // --------------------------------- data 2
                {
                    rowspan: 7, // 5 + x(证件)
                    quantity: 3,
                    unit: "个",
                    rows: [
                        //品牌、规格型号
                        {
                            demandName: "鼠标",
                            demandPara: ["苹果air", "联想Lenove G470", "戴尔 D10"],
                            demandProviders: [{ flag: 3, item: "苹果air", desc: "更多" }, { flag: 3, item: "联想Lenove", desc: "更多" }, { flag: 3, item: "戴尔 D10", desc: "更多" }, { flag: 3, item: "戴尔 D10", desc: "更多" }, { flag: 3, item: "苹果air", desc: "更多" }],
                        },
                        // 技术参数及设置要求
                        {
                            demandName: "鼠标",
                            demandPara: ["1T硬盘", "8M内存"],
                            demandProviders: [{ flag: 2, desc: "技术参数及设置要求-补充说明" }, { flag: 2, desc: "技术参数及设置要求-补充说明" }, { flag: 1, desc: "技术参数及设置要求-补充说明" }, { flag: 1, desc: "技术参数及设置要求-补充说明" }, { flag: 2, desc: "技术参数及设置要求-补充说明" }],
                        },
                        // 售后服务要求
                        {
                            demandName: "鼠标",
                            demandPara: ["三年保修", "7*24小时电话支持"],
                            demandProviders: [{ flag: 1, desc: "售后服务要求-补充说明" }, { flag: 1, desc: "售后服务要求-补充说明" }, { flag: 2, desc: "售后服务要求-补充说明" }, { flag: 2, desc: "售后服务要求-补充说明" }, { flag: 1, desc: "售后服务要求-补充说明" }],
                        },
    
                        {
                            demandName: "鼠标",
                            demandPara: "厂商证件 - 医疗器械生产许可证",
                            demandProviders: ["厂商证件-111111111", "厂商证件-222222222", "厂商证件-333333333", "厂商证件-444444444", "厂商证件-555555555"],
                        },
    
                        {
                            demandName: "鼠标",
                            demandPara: "代理商证件-医疗器械产品注册证",
                            demandProviders: ["代理商证件-111111111", "代理商证件-222222222", "代理商证件-333333333", "代理商证件-444444444", "代理商证件-555555555"],
                        },
                        {
                            demandName: "鼠标",
                            demandPara: "供应商报价",
                            demandProviders: ["10000.00", "20000.00", "30000.00", "44123.00", "99999.00"],
                        },
                        {
                            demandName: "鼠标",
                            demandPara: "报价备注",
                            demandProviders: ["电脑-报价备注-1111", "电脑-报价备注-2222", "电脑-报价备注-3333", "电脑-报价备注-4444", "电脑-报价备注-5555"],
                        },
                    ]
                },
            ],
        },

        // ############################### ELEMENT TABLE ###############################
        labels:[
            {id: '总报价',params: ``}, 
            // 笔记本电脑
            {id: '笔记本电脑',params: `品牌、规格型号:苹果air联想Lenove G470戴尔 D10`}, 
            {id: '笔记本电脑',params: '供应商报价'}, 
            {id: '笔记本电脑',params: `技术参数及设置要求:1T硬盘8M内存`}, 
            {id: '笔记本电脑',params: `售后服务要求:三年保修7*24小时电话支持`},
            {id: '笔记本电脑',params: '实名证件-身份证'}, 
            {id: '笔记本电脑',params: '厂商证件 - 医疗器械生产许可证'},
            {id: '笔记本电脑',params: '代理商证件-医疗器械产品注册证'},
            {id: '笔记本电脑',params: '投标备注'},
            //鼠标
            {id: '鼠标',params: `品牌、规格型号:苹果air联想Lenove G470戴尔 D10`}, 
            {id: '鼠标',params: '供应商报价'}, 
            {id: '鼠标',params: `技术参数及设置要求:1T硬盘8M内存`}, 
            {id: '鼠标',params: `售后服务要求:三年保修7*24小时电话支持` },
            {id: '鼠标',params: '实名证件-身份证'}, 
            {id: '鼠标',params: '厂商证件 - 医疗器械生产许可证'},
            {id: '鼠标',params: '投标备注'},
            //证件
            {id:"供应商证件",params:"实名证件-营业执照"},
            {id:"供应商证件",params:"厂商证件-生产许可证"},
            {id:"供应商证件",params:"代理商证件-资格证"},
            {id:"供应商证件",params:"产品-税务登记证"},
        ],

        mergeArray : [
            {rowIndex:1, rowSpan:8},
            {rowIndex:9, rowSpan:7},
            {rowIndex:16, rowSpan:4},
        ],

        suppliers:["大连万达集团", "大连理工大学", "大连交通大学", "东北财经大学", "大连海洋大学","大连民族大学","大连科技大学"],

        metricsData:{
            "0-0":"10000.00元",
            "0-1":"20000.00元",
            "0-2":"30000.00元",
            "0-3":"40000.00元",
            "0-4":"50000.00元",
            "0-5":"60000.00元",
            "0-6":"70000.00元",
    
            "1-0":"MacbookPro-0-0",
            "1-1":"MacbookPro-0-1",
            "1-2":"MacbookPro-0-2",
            "1-3":"MacbookPro-0-3",
            "1-4":"MacbookPro-0-4",
            "1-5":"MacbookPro-0-5",
            "1-6":"MacbookPro-0-6",
    
            "2-0":"100.00元",
            "2-1":"200.00元",
            "2-2":"300.00元",
            "2-3":"400.00元",
            "2-4":"500.00元",
            "2-5":"600.00元",
            "2-6":"700.00元",

            "3-0":"1T硬盘8M内存",
            "3-1":"2T硬盘8M内存",
            "3-2":"3T硬盘8M内存",
            "3-3":"4T硬盘8M内存",
            "3-4":"5T硬盘8M内存",
            "3-5":"6T硬盘8M内存",
            "3-6":"7T硬盘8M内存",

            "4-0":"3年保修7*24小时电话支持",
            "4-1":"4年保修7*24小时电话支持",
            "4-2":"5年保修7*24小时电话支持",
            "4-3":"6年保修7*24小时电话支持",
            "4-4":"7年保修7*24小时电话支持",
            "4-5":"8年保修7*24小时电话支持",
            "4-6":"9年保修7*24小时电话支持",

            "5-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "5-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "5-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "5-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "5-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "5-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "5-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],

            "6-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "6-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "6-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "6-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "6-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "6-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "6-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],

            "7-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "7-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "7-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "7-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "7-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "7-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "7-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],


            "8-0": "我的最好，买我的吧11",
            "8-1": "我的最好，买我的吧12",
            "8-2": "我的最好，买我的吧13",
            "8-3": "我的最好，买我的吧14",
            "8-4": "我的最好，买我的吧15",
            "8-5": "我的最好，买我的吧16",
            "8-6": "我的最好，买我的吧17",
            
            // ----------- 
            "9-0":"MacbookPro-0-0",
            "9-1":"MacbookPro-0-1",
            "9-2":"MacbookPro-0-2",
            "9-3":"MacbookPro-0-3",
            "9-4":"MacbookPro-0-4",
            "9-5":"MacbookPro-0-5",
            "9-6":"MacbookPro-0-6",

            "10-0": "1000.00元",
            "10-1": "2000.00元",
            "10-2": "3000.00元",
            "10-3": "4000.00元",
            "10-4": "5000.00元",
            "10-5": "6000.00元",
            "10-6": "7000.00元",

    
            "11-0":"1T硬盘8M内存",
            "11-1":"2T硬盘8M内存",
            "11-2":"3T硬盘8M内存",
            "11-3":"4T硬盘8M内存",
            "11-4":"5T硬盘8M内存",
            "11-5":"6T硬盘8M内存",
            "11-6":"7T硬盘8M内存",

            "12-0":"3年保修7*24小时电话支持",
            "12-1":"4年保修7*24小时电话支持",
            "12-2":"5年保修7*24小时电话支持",
            "12-3":"6年保修7*24小时电话支持",
            "12-4":"7年保修7*24小时电话支持",
            "12-5":"8年保修7*24小时电话支持",
            "12-6":"9年保修7*24小时电话支持",

            "13-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "13-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "13-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "13-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "13-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "13-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "13-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],

            "14-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "14-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "14-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "14-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "14-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "14-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "14-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],

            "15-0": "我的最好，买我的吧11",
            "15-1": "我的最好，买我的吧12",
            "15-2": "我的最好，买我的吧13",
            "15-3": "我的最好，买我的吧14",
            "15-4": "我的最好，买我的吧15",
            "15-5": "我的最好，买我的吧16",
            "15-6": "我的最好，买我的吧17",

            "16-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "16-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "16-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "16-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "16-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "16-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "16-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],

            "17-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "17-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "17-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "17-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "17-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "17-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "17-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],

            "18-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "18-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "18-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "18-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "18-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "18-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "18-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],

            "19-0":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "19-1":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "19-2":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "19-3":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "19-4":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "19-5":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
            "19-6":["https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3848643630,3994988733&fm=27&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1258138064,4136944438&fm=27&gp=0.jpg","https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1228561688,2139983026&fm=27&gp=0.jpg"],
          }
    }
}