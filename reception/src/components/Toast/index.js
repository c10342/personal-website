import React from 'react';
import ReactDOM from 'react-dom';
import Toast from './Toast';

function createNotification() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const notification = ReactDOM.render(<Toast/>, div);
    return {
        addNotice(notice) {
            return notification.addNotice(notice)
        },
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div)
        }
    }
}

let notification;
const notice = ({type, content, duration = 2000, onClose}) => {
    if (!notification) notification = createNotification();
    return notification.addNotice({type, content, duration, onClose})
};

export default {
    info({content, duration=0, onClose}) {
        return notice({type:'info', content, duration, onClose})
    },
    success({content = '操作成功', duration=0, onClose}) {
        return notice({type:'success', content, duration, onClose})
    },
    error({content, duration=0, onClose}) {
        return notice({type:'error', content, duration, onClose})
    },
}