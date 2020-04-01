
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import Works from '../pages/Works';
import About from "../pages/About";
import Other from "../pages/Other";
import Message from "../pages/Message";




export const colorList = ['#7647d4', '#f37101', '#3686CF', 'pink', '#617ae4', '#ff8401', '#FFC66D', '#9876AA'];


export const defaultNav = [
    {
        key: 'home',
        name: '首页',
        component: Home
    },
    {
        key: 'blog',
        name: '博客',
        component: Blog
    },
    {
        key: 'works',
        name: '个人作品',
        component: Works
    },
    {
        key: 'about',
        name: '关于我',
        component: About
    },
    {
        key: 'other',
        name: '其他',
        component: Other
    },
    {
        key: 'message',
        name: '留言板',
        component: Message
    }
];

export const routers = [
    {
        key: 'home',
        path:'/home',
        component: Home
    },
    {
        key: 'blog',
        path:'/blog',
        component: Blog
    },
    {
        key: 'works',
        path:'/works',
        component: Works
    },
    {
        key: 'about',
        path:'/about',
        component: About
    },
    {
        key: 'other',
        path:'/other',
        component: Other
    },
    {
        key: 'message',
        path:'/message',
        component: Message
    },
];






