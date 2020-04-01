import React from 'react';

import Line from "../../components/Line";

import Input from "../../components/Input";

import TextArea from "../../components/TextArea";

import MsgCard from "../../components/MsgCard";

import Loading from "../../components/Loading";

import Toast from "../../components/Toast";

import NoData from "../../components/NoData";

import ShouldUpdateComp from "../../utils/ShouldUpdateComp";

import Comment from "../../api/Comment";


import './message.scss';


class Message extends ShouldUpdateComp {
    constructor(props) {
        super(props);

        this.state = {
            nickName: '',
            content: '',
            size: 0,
            count: 0,
            msgList: [],
            loading: false,
            end: false
        };
        this.currentPage = 1;
        this.pageSize = 10;
        this.loadMore = this.loadMore.bind(this);
        this.publishComment = this.publishComment.bind(this);
    }

    componentDidMount() {
        this.getCommentList();
    }

    render() {
        const {size, msgList, end, loading,content,nickName} = this.state;
        return (
            <div className={'message-page'}>
                <Line icon={'icon-message'} label={'留言墙'}/>
                <div className={'mt-20'}>
                    <Input value={nickName} placeholder={'昵称（非必填）'} onChange={(value) => this.inputChange('nickName', value)}/>
                </div>
                <div className={'mt-20'}>
                    <TextArea
                        value={content}
                        maxLength={50}
                        placeholder={'我想说...'}
                        onChange={(value) => this.inputChange('content', value)}/>
                    <div className={'send-message'}>
                        <span className={'max-length-tip'}>最多可输入50个字符,{size}/50</span>
                        <span className={'icon iconfont icon-school'} title={'留言'} onClick={this.publishComment}/>
                    </div>
                </div>
                {
                    msgList.map((item, index) => <MsgCard {...item} key={item.id}/>)
                }
                {
                    msgList.length===0?<NoData tipMsg={'暂无留言'}/>:null
                }
                {
                    end ? null : <Loading loading={loading} onClick={this.loadMore}/>
                }
            </div>
        );
    }

    inputChange(key, value) {
        this.setState({[key]: value});
        if (key === 'comment') {
            this.setState({
                'size': value.length
            });
        }
    }

    loadMore() {
        if (!this.state.loading) {
            this.currentPage++;
            this.getCommentList();
        }
    }

    async getCommentList() {
        try {
            this.setState({
                loading: true
            });
            const list = await Comment.getCommentList(this.currentPage, this.pageSize);
            if (list) {
                let msgList = list.rows;
                this.setState({
                    count: list.count,
                    msgList: msgList,
                    end: msgList.length >= list.count,
                    loading: false
                });
            }
        } catch (e) {

        }
    }

    async publishComment() {
        const {content, nickName} = this.state;
        if (!content) {
            Toast.info({content:'评论内容不能为空!!',duration:3000});
            return;
        }
        const message = await Comment.publishComment(content, nickName);
        if (message) {
            await this.getCommentList();
            Toast.success({content:message,duration:3000});
            this.setState({
                content:'',
                nickName:''
            })
        } else {
            Toast.error({content:'留言失败',duration:3000})
        }
    }
}

export default Message;