

const express = require('express');

const catchError = require('../utils/catchError');

const Comment = require('../models/comment');

const {Success,ParameterException} = require('../utils/exception');

const router = express.Router();

router.post('/publishMsg',catchError(async function(req,res){
    const {nickName,content} = req.body;
    if(!content){
        throw new ParameterException('留言内容不能为空');
    }
    await Comment.create({
        nickName,
        content
    });
    throw new Success('留言成功');
}));


router.get('/getMsgList',catchError(async function(req,res){
    const {currentPage=1,pageSize=10} = req.query;
    const list = await Comment.getCommentList({currentPage:parseInt(currentPage),pageSize:parseInt(pageSize)});
    res.json({
        statusCode:200,
        message:'查询成功',
        data:list
    })
}));


module.exports = router;