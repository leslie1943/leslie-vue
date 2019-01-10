function test_require(args){
    console.info(args);
}

module.exports = {
    test_require,
}

/***
 * 【require】 commonjs 输出的是一个值的拷贝  VS 而es6输出的是值的引用 【import】
 * 【require】commonjs 是运行时加载 VS es6是编译时输出接口 【import】
 */