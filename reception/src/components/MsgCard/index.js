

import React,{memo} from 'react';

import PropTypes from 'prop-types';

import './msg-card.scss';


const MsgCard = (props) =>{
        const {content,createdAt,nickName} = props;
        return (
            <div className={'msg-card'}>
                <div className={'msg-card-content'}>{content}</div>
                <div className={'msg-card-item'}>
                    <p className={'msg-card-nickName'}>{nickName}</p>
                    <p className={'msg-card-time'}>{createdAt}</p>
                </div>
            </div>
        );
};

MsgCard.propTypes = {
    content:PropTypes.string.isRequired,
    createdAt:PropTypes.string.isRequired,
    nickName:PropTypes.string
};

MsgCard.defaultProps = {
    nickName:'匿名用户'
};


export default memo(MsgCard);