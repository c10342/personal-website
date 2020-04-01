import React, {useMemo,memo} from 'react'

import {colorList} from "../../config";

import PropTypes from 'prop-types';

import './tags.scss';


const Tags = (props) => {
    const {tagsList} = props;

    const tags = useMemo(() => tagsList.map((item, index) => {
        const colorSize = colorList.length;
        const idx = Math.floor(Math.random() * colorSize);
        const color = colorList[idx];
        return <span key={index} style={{'borderColor': color, 'color': color}}>{item}</span>;
    }), [tagsList]);

    return (
        <div className={'tags-list'}>
            {tags}
        </div>
    )
};

Tags.propTypes = {
    tagsList: PropTypes.array.isRequired
};


export default memo(Tags);