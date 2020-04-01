

import React,{memo} from 'react'

import PropTypes from 'prop-types';

import './line.scss'

const Line = (props)=>{
    const {icon,label} = props;
    return (
        <div className={'line-box'}>
            <span className={`icon iconfont ${icon}`} />
            <span className={'label'}>{label}</span>
            <span className={'line'}/>
        </div>
    )
};


Line.propTypes = {
  icon:PropTypes.string.isRequired,
  label:PropTypes.string.isRequired
};

export default memo(Line);