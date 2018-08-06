// // 合并单元格的计算方法
// combineMaterials({
//     row,
//     column,
//     rowIndex,
//     columnIndex
// }) {
//     // 按材料展示时需要合并的列
//     const fieldsCombinedByMaterail = ['材料编码', '材料名称', '规格型号', '采购数量'];
//     // [rowSpan, colSpan] [1, 1]单元格不合并
//     let span = [1, 1];

//     let groupMap, countByField, findCondition;

//     if (this.displayByDept && column.label == '科室') {
//         findCondition = {
//             'dept': row.dept
//         }
//         countByField = 'dept';
//     } else if (!this.displayByDept && ~fieldsCombinedByMaterail.indexOf(column.label)) {
//         findCondition = {
//             'mcode': row.mcode
//         };
//         countByField = 'mcode';
//     }

//     // 单元格需要做合并处理
//     if (countByField) {
//         // 在排好序的材料数组中，找到第一条符合条件的材料index （与当前行材料编码相同的第一条材料/与当前行科室相同的第一条材料
//         const index = _.findIndex(this.sortedMaterials, findCondition);
//         if (index != rowIndex) { // 此行不是合并的第一行
//             span = [0, 0]; // 去掉单元格显示
//         } else { // 如果是合并的第一行，需要计算rowSpan的值
//             // 按照材料编码/科室分组计数
//             let groupMap = _.countBy(this.materials, countByField);
//             // 取到材料编码/科室相同的材料的个数作为rowSpan的值
//             span[0] = groupMap[row[countByField]];
//         }
//     }

//     return span;
// },