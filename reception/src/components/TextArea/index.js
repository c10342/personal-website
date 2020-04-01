import React, {useCallback,memo} from 'react'

import PropTypes from "prop-types";

import './text-area.scss'


const TextArea = (props) => {
    const {placeholder, maxLength, onChange,value} = props;
    const onInputChange = useCallback((e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);
    return (
        <textarea
            value={value}
            maxLength={maxLength}
            placeholder={placeholder} className={'text-area-component'}
            onChange={onInputChange}/>
    );
};

TextArea.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    maxLength: PropTypes.number,
    value:PropTypes.string
};

TextArea.defaultProps = {
    placeholder: '请输入',
    maxLength: -1,
    value:''
};


export default memo(TextArea);