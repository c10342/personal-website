

const express = require('express');

const catchError = require('../utils/catchError');

const data = require('../data');

const router = express.Router();


router.get('/getBlogData',catchError(async function(req,res){
    res.json({
        statusCode:200,
        message:'查询成功',
        data:{
            articleList:data.articleList
        }
    })
}));


module.exports = router;