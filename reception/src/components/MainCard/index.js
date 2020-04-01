import React, {useCallback,memo} from 'react'

import PropTypes from 'prop-types';

import './main-card.scss';


const MainCard = (props) => {
    const {title, describe, button, reverse, image, itemKey, onItemClick} = props;
    const onClick = useCallback(() => {
        if (onItemClick) {
            onItemClick(itemKey)
        }
    }, [onItemClick,itemKey]);
    return (
        <div className={'main-card'}>
            <div className={'card-box'} style={{'flexDirection': reverse ? 'row-reverse' : 'row'}}>
                <img className={'image'} src={image} alt={'图片'}/>
                <div className={'content'}>
                    <div className={'title'}>{title}</div>
                    <div className={'describe'}>
                        {describe}
                    </div>
                    <div className={'button'} onClick={onClick}>
                        {button}
                    </div>
                </div>
            </div>
        </div>
    );
};

MainCard.propTypes = {
    title: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    reverse: PropTypes.bool,
    image: PropTypes.string.isRequired,
    onItemClick: PropTypes.func,
    itemKey: PropTypes.string.isRequired
};

MainCard.defaultProps = {
    reverse: false
};

export default memo(MainCard);