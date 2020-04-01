

import React from 'react'

import PropTypes from 'prop-types';

import noDataImage from '../../assets/image/no-data.png';

import './no-data.scss';

const NoData = (props)=>{
    const {tipMsg} = props;
  return (
      <div className={'no-data'}>
          <img alt={'图片'} src={noDataImage}/>
          <p className={'no-data-tip'}>{tipMsg}</p>
      </div>
  )
};

NoData.propTypes = {
    tipMsg:PropTypes.string
};

NoData.defaultProps = {
    tipMsg:'暂无数据'
};


export default NoData;