const express = require('express');
const api = require('./api'); // 引入编写好的api
const http = require('http');
const path = require('path'); // 引入处理路径的模块
const fs = require('fs');  // 引入文件模块
const chalk = require('chalk')
const app = express();
const cors = require('cors');

// app.set('port', process.env.PORT || 1944);
app.set('port', 2714);
app.use(api);

// 引入处理post数据的模块
/**
 * *********** body-parser ***********
 * HTTP请求体解析中间件 使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体
 */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// 访问静态资源, 访问所有dist目录下的静态资源文件.
app.use(express.static(path.resolve(__dirname, '../dist')));

// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function (req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    res.send(html);
});

// 监听80端口
http.createServer(app).listen(app.get('port'), '0.0.0.0', function () {
    console.log(chalk.yellowBright('Express server listening on port ' + app.get('port')));
});