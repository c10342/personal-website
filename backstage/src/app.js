
const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const path = require('path');

const app = express();

require('./models/comment');

const commentRouter = require('./api/comment');

const homeRouter = require('./api/home');

const blogRouter = require('./api/blog');

const workRouter = require('./api/work');

const aboutRouter = require('./api/about');

const otherRouter = require('./api/other');

app.use(cors());

// 处理post请求数据
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/api/comment',commentRouter);

app.use('/api/home',homeRouter);

app.use('/api/blog',blogRouter);

app.use('/api/work',workRouter);

app.use('/api/about',aboutRouter);

app.use('/api/other',otherRouter);

// 处理全局错误
app.use(function (err, req, res, next) {
    res.json({
        statusCode: 0,
        message: err
    })
});

app.use('/',express.static(path.join(__dirname,'./build')));

app.use('/image',express.static(path.join(__dirname,'./data/image')));

const port = process.env.PORT || 5000;

const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
    console.log(`服务器地址 : ${host}:${port}`)
});