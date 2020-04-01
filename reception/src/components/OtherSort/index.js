import React, {useCallback,memo} from 'react'

import PropTypes from 'prop-types';

import Line from "../Line";

import SortCard from "../SortCard";

import './other-sort.scss'

const OtherSort = (props) => {
    const {sortCardList} = props;
    const itemClick = useCallback((src) => {
        window.open(src);
    }, []);
    return (
        <div className={'other-sort'}>
            <Line icon={'icon-pen'} label={'分类'}/>
            <div className={'sort-card-list'}>
                {
                    sortCardList.map((item, index) => {
                        return (
                            <div key={index}>
                                <SortCard imageSrc={item.imageSrc} onClick={() => {
                                    itemClick(item.src)
                                }}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

OtherSort.propTypes = {
    sortCardList:PropTypes.array
};


OtherSort.defaultProps = {
    sortCardList:[]
};

export default memo(OtherSort);