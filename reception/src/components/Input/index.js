import React, {useCallback,memo} from 'react'

import PropTypes from 'prop-types'

import './input.scss'

const Input = (props) => {
    const {placeholder, maxLength, onChange,value} = props;
    const onInputChange = useCallback((e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);
    return (
        <input
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            className={'input-component'}
            onChange={onInputChange}/>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    maxLength: PropTypes.number,
    value:PropTypes.string
};

Input.defaultProps = {
    placeholder: '请输入',
    maxLength: -1,
    value:''
};


export default memo(Input);