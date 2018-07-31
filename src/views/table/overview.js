export function getTableData() {
    return {
        // 表头: 采购需求+采购详细+ 所有报价的供应商.
        names: ["大连万达集团", "大连理工大学", "大连交通大学", "东北财经大学", "大连海洋大学"],
        // 内容: 
        tables: [
            // --------------------------------- data 1
            {
                rowspan: 8, // 5 + x(证件)
                rows: [
                    //品牌、规格型号
                    {
                        demandName: "笔记本电脑",
                        demandPara: ["苹果air", "联想Lenove G470", "戴尔 D10"],
                        demandProviders: [{ flag: 3, item:"苹果air" }, { flag: 3, item:"联想Lenove" }, { flag: 3 , item:"戴尔 D10"}, { flag: 3, item:"戴尔 D10" }, { flag: 3, item:"苹果air" }],
                    },
                    // 技术参数及设置要求
                    {
                        demandName: "笔记本电脑",
                        demandPara: ["1T硬盘", "8M内存"],
                        demandProviders: [{ flag: 2, desc:"技术参数及设置要求-补充说明" }, { flag: 2, desc:"技术参数及设置要求-补充说明" }, { flag: 1, desc:"技术参数及设置要求-补充说明" }, { flag: 1 , desc:"技术参数及设置要求-补充说明"}, { flag: 2, desc:"技术参数及设置要求-补充说明"}],
                    },
                    // 售后服务要求
                    {
                        demandName: "笔记本电脑",
                        demandPara: ["三年保修", "7*24小时电话支持"],
                        demandProviders: [{ flag: 1, desc:"售后服务要求-补充说明" }, { flag: 1, desc:"售后服务要求-补充说明" }, { flag: 2, desc:"售后服务要求-补充说明" }, { flag: 2 , desc:"售后服务要求-补充说明"}, { flag: 1, desc:"售后服务要求-补充说明" }],
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
                rows: [
                    //品牌、规格型号
                    {
                        demandName: "鼠标",
                        demandPara: ["苹果air", "联想Lenove G470", "戴尔 D10"],
                        demandProviders: [{ flag: 3, item:"苹果air" }, { flag: 3, item:"联想Lenove" }, { flag: 3 , item:"戴尔 D10"}, { flag: 3, item:"戴尔 D10" }, { flag: 3, item:"苹果air" }],
                    },
                    // 技术参数及设置要求
                    {
                        demandName: "鼠标",
                        demandPara: ["1T硬盘", "8M内存"],
                        demandProviders: [{ flag: 2, desc:"技术参数及设置要求-补充说明" }, { flag: 2, desc:"技术参数及设置要求-补充说明" }, { flag: 1, desc:"技术参数及设置要求-补充说明" }, { flag: 1 , desc:"技术参数及设置要求-补充说明"}, { flag: 2, desc:"技术参数及设置要求-补充说明"}],
                    },
                    // 售后服务要求
                    {
                        demandName: "鼠标",
                        demandPara: ["三年保修", "7*24小时电话支持"],
                        demandProviders: [{ flag: 1, desc:"售后服务要求-补充说明" }, { flag: 1, desc:"售后服务要求-补充说明" }, { flag: 2, desc:"售后服务要求-补充说明" }, { flag: 2 , desc:"售后服务要求-补充说明"}, { flag: 1, desc:"售后服务要求-补充说明" }],
                    },

                    // {
                    //     demandName: "鼠标",
                    //     demandPara: "实名证件-身份证",
                    //     demandProviders: ["身份证-111111111", "身份证-222222222", "身份证-333333333", "身份证-444444444", "身份证-555555555"],
                    // },

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
    }
}