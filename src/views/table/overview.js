export function getTableData() {
    return {
        // 表头: 采购需求+采购详细+ 所有报价的供应商.
        names: ["大连万达集团", "大连理工大学", "大连交通大学", "东北财经大学", "大连海洋大学"],
        // 内容: 
        tables: [
            // data 1
            {
                rowspan: 7, // 4+x(证件)
                rows: [
                    {

                        demandName: "笔记本电脑",
                        demandPara: "品牌、规格型号: 苹果, air联想, Lenove G470, 戴尔 D10",
                        demandProviders: ["苹果 air", "联想 Lenove G480", "联想 Lenove G490", "联想 Lenove X1", "戴尔 D20"],
                    },
                    {

                        demandName: "笔记本电脑",
                        demandPara: "售后服务要求: 三年保修7*24小时电话支持",
                        demandProviders: ["5年保修7*24小时电话支持", "8年保修7*24小时电话支持", "10年保修7*24小时电话支持", "20年保修7*24小时电话支持", "终身保修7*24小时电话支持"],
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
                        demandProviders: ["报价备注-1111", "报价备注-2222", "报价备注-3333", "报价备注-4444", "报价备注-5555"],
                    },
                ]
            },
            // data 2
            {
                rowspan: 6,
                rows: [
                    {

                        demandName: "鼠标",
                        demandPara: "品牌、规格型号: 罗技100,双飞燕200,雷柏300",
                        demandProviders: ["双飞燕200", "雷柏300", "雷柏300", "双飞燕200", "外星人"],
                    },
                    {

                        demandName: "鼠标",
                        demandPara: "售后服务要求: 无条件退款",
                        demandProviders: ["无条件退款-1111", "无条件退款-2222", "无条件退款-3333", "无条件退款-4444", "11"],
                    },
                    {

                        demandName: "鼠标",
                        demandPara: "实名证件-身份证",
                        demandProviders: ["身份证-鼠标1", "身份证-鼠标2", "身份证-鼠标3", "身份证-鼠标4", "身份证-鼠标5"],
                    },
                    {

                        demandName: "鼠标",
                        demandPara: "厂商证件 - 医疗器械生产许可证",
                        demandProviders: ["厂商证件-鼠标1", "厂商证件-鼠标2", "厂商证件-鼠标3", "厂商证件-鼠标4", "厂商证件-鼠标5"],
                    },
                    {

                        demandName: "鼠标",
                        demandPara: "供应商报价",
                        demandProviders: ["66.00", "77.00", "88.00", "99.00", "100.00"],
                    },
                    {

                        demandName: "鼠标",
                        demandPara: "报价备注",
                        demandProviders: ["报价备注-1111", "报价备注-2222", "报价备注-3333", "报价备注-4444", "报价备注-5555"],
                    },
                ]
            },
            // data 3
            {
                rowspan: 5,
                rows: [
                    {

                        demandName: "针管",
                        demandPara: "品牌、规格型号: 100ml",
                        demandProviders: ["100ml", "120ml", "130ml", "", "150ml"],
                    },
                    {

                        demandName: "针管",
                        demandPara: "售后服务要求: 无条件",
                        demandProviders: ["无条件-1111", "无条件-2222", "无条件-3333", "无条件-4444", "11"],
                    },
                    {

                        demandName: "针管",
                        demandPara: "实名证件-身份证",
                        demandProviders: ["身份证-针管1", "身份证-针管2", "身份证-针管3", "身份证-针管4", "身份证-针管5"],
                    },
 
                    {

                        demandName: "针管",
                        demandPara: "供应商报价",
                        demandProviders: ["166.00", "717.00", "828.00", "939.00", "1020.00"],
                    },
                    {

                        demandName: "针管",
                        demandPara: "报价备注",
                        demandProviders: ["报价备注针管-1111", "报价备注针管-2222", "报价备注针管-3333", "报价备注针管-4444", "报价备注针管-5555"],
                    },
                ]
            },
            
            //4
            {
                rowspan: 4,
                rows: [
                    {

                        demandName: "杯子",
                        demandPara: "品牌、规格型号: 100ml",
                        demandProviders: ["星巴克-200ml", "漫咖啡-320ml", "巴黎贝甜-430ml", "test440ml", "aa550ml"],
                    },
                    {

                        demandName: "杯子",
                        demandPara: "售后服务要求: 无条件",
                        demandProviders: ["无-1", "无-2", "无-3", "无-4", "无-5"],
                    },
 
                    {

                        demandName: "杯子",
                        demandPara: "供应商报价",
                        demandProviders: ["21.00", "31.00", "32.00", "45.00", "99.00"],
                    },
                    {

                        demandName: "杯子",
                        demandPara: "报价备注",
                        demandProviders: ["星巴克", "杯子-2222", "杯子-3333", "杯子-4444", "杯子-5555"],
                    },
                ]
            },
        ],
    }
}