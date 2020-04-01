import React, {memo, useCallback} from 'react';

import Tags from "../Tags";

import PropTypes from 'prop-types'


import './work-card.scss';

const WorkCard = (props) => {
    const {tags, title, abstract, functions, imageSrc, workSrc, onItemClick} = props;
    const onClick = useCallback(() => {
        if (onItemClick) {
            onItemClick(workSrc)
        }
    }, [onItemClick,workSrc]);
    return (
        <div className={'work-card'} onClick={onClick}>
            <div className={'work-card-image'} style={{'backgroundImage': `url("${imageSrc}")`}}/>
            <div className={'work-card-describe'}>
                <Tags tagsList={tags}/>
                <p className={'work-card-title'}>{title}</p>
                <p className={'work-card-abstract'}>{abstract}</p>
                <ul className={'work-card-function'}>
                    {functions.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
};

WorkCard.propTypes = {
    tags: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    functions: PropTypes.array.isRequired,
    workSrc: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    onItemClick: PropTypes.func
};


export default memo(WorkCard);