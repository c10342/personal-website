
import React,{useCallback,memo} from "react";

import loadingImage from "../../assets/image/loading.gif";

import PropTypes from "prop-types";

import './loading.scss'


const Loading = (props)=>{
    const {loading,onClick} = props;
    const onItemClick = useCallback(()=>{
        if(onClick){
            onClick();
        }
    },[onClick]);
    return (
        <div className={'loading'} onClick={onItemClick}>
            <span className={'loading-tip'}>{loading?'加载中...':'加载更多'}</span>
            {
                loading?<img src={loadingImage} alt={'图片'} className={'loading-img'}/>:null
            }
        </div>
    )
};

Loading.propTypes = {
    loading: PropTypes.bool,
    onClick: PropTypes.func
};


export default memo(Loading);