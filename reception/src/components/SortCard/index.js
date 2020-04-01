import React, {useCallback,memo} from 'react';

import PropTypes from 'prop-types';

import './sort-card.scss';

const SortCard = (props) => {
    const {imageSrc, onClick} = props;
    const onItemClick = useCallback(() => {
        if (onClick) {
            onClick();
        }
    }, [onClick]);
    return (
        <div className={'sort-card'} style={{'backgroundImage': `url("${imageSrc}")`}} onClick={onItemClick}/>
    );
};

SortCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    onClick: PropTypes.func
};


export default memo(SortCard);