/**
 *  Schema,Model,Entity或者Documents的关系请牢记,
 *  Schema生成Model,Model创造Entity,Model和Entity都可对数据库操作造成影响,但Model比Entity更具操作性.
 * -------------------------------------------------------------------------------------------------
 *  【SQL术语/概念】	【MongoDB术语/概念】	【解释/说明】
        database	        database	        数据库
        table	            collection	        数据库表/集合
        row	                document	        数据记录行/文档
        column	            field	            数据字段/域
 * -------------------------------------------------------------------------------------------------
*/
const mongoose = require('mongoose');

// 连接数据库 如果不自己创建 默认test数据库会自动生成
// port默认为：27017,anqi为数据库名;
// {useMongoClient:true}
mongoose.connect('mongodb://127.0.0.1:27017/anqi', { useNewUrlParser: true });

// 为这次连接绑定事件
const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接错误'));
db.once('open', function () { console.log(new Date + 'http:localhost:80连接成功') });
db.on('disconnected', function () { console.log('MongoDB disconnected') });

/************** 定义模式Schema **************/
const Schema = mongoose.Schema;

// User 表
const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: String,
    password: String,
    createTime: Number,
    updateTime: Number,
    ip: String,
    address: String,
    area: String,
    region: String,
    region_id: String,
    city_id: String,
    isp: String,
});

/************** 编译模型Model **************/
/**
 * 编译模型: model(name,[schema],[collection],[skipInit])
 * 参数:    
 *      name: 标识model的字符串
 *      schema: 前面定义的Schema对象
 *      collection: 要连接的集合名称 (如果在Schema对象中没有指定一个集合)
 *      skipInit: 默认为false,如果为true,则跳过初始化过程,创建一个没有连接到数据库的一个简单的Model对象.
 */
const Models = {
    Users: mongoose.model('users', UserSchema, 'users', false),
    // InfoList: mongoose.model('users', InfoSchema,'users',false),  
}

module.exports = Models;