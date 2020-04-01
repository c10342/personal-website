import React, {useCallback,memo} from 'react';

import PropTypes from 'prop-types'

import Tags from "../Tags";

import './blog-card.scss';

const BlogCard = (props) => {
    const {title, content, tags, time, imageSrc, type, blogSrc, onClick} = props;
    const itemClick = useCallback(() => {
        if (onClick) {
            onClick(blogSrc);
        }
    }, [onClick,blogSrc]);
    const classname = `blog-card-item blog-card-item-${type}`;
    return (
        <div className={classname} onClick={itemClick}>
            <div className={'blog-left'}>
                <p className={'title'}>{title}</p>
                <p className={'content'}>
                    {content}
                </p>
                <Tags tagsList={tags}/>
                <div className={'time'}>{time}</div>
            </div>
            <div className={'blog-right'} style={{'backgroundImage': `url("${imageSrc}")`}}/>
        </div>
    );
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    time: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    blogSrc: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['list', 'grid']),
    onClick: PropTypes.func
};

BlogCard.defaultProps = {
    type: 'list'
};

export default memo(BlogCard);