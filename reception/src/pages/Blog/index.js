import React from 'react';

import BlogCard from '../../components/BlogCard';

import ShouldUpdateComp from "../../utils/ShouldUpdateComp";

import './blog.scss';
import Blogs from "../../api/Blogs";


const BLOG_KEY = 'blog_type';

class Blog extends ShouldUpdateComp {
    constructor(props) {
        super(props);
        const type = window.localStorage.getItem(BLOG_KEY) || 'list';
        this.state = {
            type,
            articleList:[]
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.getBlogData();
    }

    render() {
        const {type,articleList} = this.state;
        return (
            <div className={'blog'}>
                <div className={'typesetting'}>
                    <span
                        className={`icon iconfont icon-list ${type === 'list' ? 'active' : ''}`}
                        onClick={() => this.changeType('list')}
                    />
                    <span
                        className={`icon iconfont icon-Grid ${type === 'grid' ? 'active' : ''}`}
                        onClick={() => this.changeType('grid')}
                    />
                </div>
                <div className={'blog-list'}>
                    {articleList.map((item, index) => <BlogCard key={index} {...item} type={type} onClick={this.onClick}/>)}
                </div>
            </div>
        );
    }
    changeType(type) {
        if (type !== this.state.type) {
            this.setState({
                type
            });
            window.localStorage.setItem(BLOG_KEY,type);
        }
    }

    onClick(blogSrc){
        window.open(blogSrc);
    }

    async getBlogData(){
        try{
            const data = await Blogs.getBlogData();
            if(data){
                this.setState({
                    ...data
                })
            }
        }catch (e) {

        }
    }
}


export default Blog;