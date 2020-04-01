

import React from 'react';
import './about.scss';
import Abouts from "../../api/Abouts";

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            aboutImage:''
        }
    }

    componentDidMount() {
        this.getAboutData();
    }

    render() {
        const {aboutImage} = this.state;
        return (
            <div className={'about'}>
                <div className={'about-box'}>
                    <div className={'info'}>
                        <div className={'info-item info-item-alis'}>
                            <span className={'first'}>嗨</span>
                            <span className={'other'}>起</span>
                            <span className={'other'}>来</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>姓名</span>
                            <span className={'msg'}>林家富</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>出生年月</span>
                            <span className={'msg'}>1996-05</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>毕业学校</span>
                            <span className={'msg'}>广东海洋大学</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>职业</span>
                            <span className={'msg'}>前端工程师</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>所在地</span>
                            <span className={'msg'}>广东省广州市</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>爱好</span>
                            <span className={'msg'}>兵乓球、羽毛球</span>
                        </div>
                    </div>
                    <div className={'image'} style={{"backgroundImage":`url("${aboutImage}")`}} />
                </div>
            </div>
        )
    }

    async getAboutData(){
        try{
            const data = await Abouts.getAboutData();
            if(data){
                this.setState({
                    ...data
                })
            }
        }catch (e) {

        }
    }
}

export default About;