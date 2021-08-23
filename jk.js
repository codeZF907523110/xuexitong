const express = require('express')
const app = express()
const path = require('path')
    // var request = require('request')
let bodyparser = require('body-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './public'), ))
app.all("*", function(req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})
app.get('/zf', function(req, res) {
    console.log(req);
    res.status(200).json({
        name: '戴勤傻吊',
        touxiang: 'touxiang.jpg',
        experience: 20,
        integral: 5000,
        zhanghao: 123456789,
        mima: 123456789
    })
})
app.post('/dl', function(req, res) {
    console.log('登录账号:' + req.body.dlzhanghao);
    console.log('登录密码:' + req.body.dlmima);
    // console.log('123');
    console.log('登陆成功');
})
app.post('/zc', function(req, res) {
    console.log('注册账号:' + req.body.zczhanghao);
    console.log('注册密码:' + req.body.zcmima);
    // console.log('123');
    console.log('注册成功');
})
app.listen(2020, function() {
    console.log('监听到2020端口');
})