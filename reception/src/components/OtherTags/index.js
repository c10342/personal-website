

import React,{memo} from 'react'

import Line from "../Line";

import Tags from "../Tags";

import PropTypes from 'prop-types';

import './other-tags.scss'

const OtherTags = (props)=>{
    const {tagsList} = props;
    return (
        <div className={'other-tags'}>
            <Line icon={'icon-cloud'} label={'标签'} />
            <Tags tagsList={tagsList}/>
        </div>
    )
};


OtherTags.propTypes = {
    tagsList:PropTypes.array
};


OtherTags.defaultProps = {
    tagsList:[]
};


export default memo(OtherTags);