

const sequelize = require('../utils/db');

const moment = require('moment');

const {Sequelize,Model} = require('sequelize');


class Comment extends Model{
    static async getCommentList({currentPage=1,pageSize=10}){
        const list = await Comment.findAndCountAll({
            attributes:['nickName','content','createdAt','id'],
            limit:pageSize*currentPage,
            order:[
                ['createdAt','DESC']
            ]
        });
        return list;
    }
}

Comment.init({
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true, // 主键
        autoIncrement: true // 自增型
    },
    nickName: {
        type:Sequelize.STRING,
        set(val) {
            let value = val?val:'匿名用户';
            this.setDataValue('nickName',value);
        }
    },
    content:Sequelize.STRING,
    createdAt: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    },
    updatedAt: {
        type: Sequelize.DATE,
        get() {
            return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
        }
    }
},{
    sequelize,
    tableName:'comment'
});

module.exports = Comment;