var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var app = express()

app.use(cookieParser('123'))
// 挂载参数处理中间件（post）
app.use(bodyParser.urlencoded({ extended: false }))
// 处理json格式的参数
app.use(bodyParser.json())


app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);
  if (req.method === 'OPTIONS') {
    res.send(200);
  }
  else {
    next();
  }
});

app.get('/test', function (req, res) {
    console.log(req.cookies)
    res.send({a: 123})
})

app.listen(8000, function () {
    console.log('server running...')
})