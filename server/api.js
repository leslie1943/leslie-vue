const mongoose = require('mongoose');
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 获取数据
const execCallback = function (p, err, data, res) {
    if (err) {
        res.send(err);
    } else {
        p.find().count((err, result) => {
            if (err) {
                res.send({ 'status': 0, 'data': '', 'message': err, 'coutn': '' });
            } else {
                res.send({ 'status': 1, 'data': data, 'message': 'success', 'count': result });
            }
        });
    }
}

// 回调
const callback = function (err, data, res) {
    if (err) {
        res.send({ 'status': 0, 'data': '', 'message': err, 'count': '' });
    } else {
        res.send({ 'status': 1, 'data': data, 'message': 'success', 'count': '' });
    }
}

/**
 * 获取信息列表
 * @params:pageIndex
 * @params:pageSize
 */
router.get('/api/user/getUserInfo', (req, res) => {
    console.info('In get user information.');

    console.info('into getUserInfo ------- ');
    // const pageIndex = parseInt(req.query.pageIndex);
    // const pageSize = parseInt(req.query.pageSize);

    const m = models.Users.find({});
    let p = models.Users;
    // const start = (pageIndex - 1) * pageSize;

    // m.skip(start);
    // m.limit(pageSize);
    // m.sort({ 'createTime': 'desc' });
    m.exec(function (err, data) {
        console.info(data);
        execCallback(p, err, data, res);
    });
});

console.log('dddd')
module.exports = router;