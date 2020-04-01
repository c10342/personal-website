import React, {Component} from 'react'

import './toast.scss'

class Toast extends Component {
    constructor(props) {
        super(props);
        this.state= {
            notices:[]
        }
    }

    getNoticeKey() {
        const {notices} = this.state;
        return `notice-${new Date().getTime()}-${notices.length}`;
    }
    addNotice(notice) {
        let {notices} = this.state;
        notices = notices.slice();
        notice.key = this.getNoticeKey();

        notices.unshift(notice);
        this.setState({notices});
        if (notice.duration > 0) {
            setTimeout(() => {
                this.removeNotice(notice.key)
            }, notice.duration)
        }
        return () => {
            this.removeNotice(notice.key)
        }
    }

    removeNotice(key) {
        let {notices} = this.state;
        notices = notices.slice().filter((notice)=>{
            if(notice.key === key){
                if(notice.on) notice.onClose();
                return false;
            }
            return true;
        });
        this.setState({
            notices
        })
    }

    render() {
        let {notices} = this.state;

        return (
            <div className="toast-component">
                {
                    notices.map(item=><div className={`toast-component-${item.type} toast-component-item`} key={item.key}>{item.content}</div>)
                }
            </div>
        )
    }
}

export default Toast;