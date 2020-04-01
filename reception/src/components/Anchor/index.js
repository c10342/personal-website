import React, {useCallback,memo} from 'react';

import './anchor.scss';

const Anchor = () => {
    const onClick = useCallback(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={'anchor'} onClick={onClick}>
            回到顶部
        </div>
    )
};


export default memo(Anchor);