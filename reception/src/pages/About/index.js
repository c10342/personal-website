

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
                            <span className={'first'}>TjSanshao</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>位置</span>
                            <span className={'msg'}>可打4路</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>职业</span>
                            <span className={'msg'}>枪炮师、ADC、医疗兵、狙击手、前端狗、后台狗...</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>所在地</span>
                            <span className={'msg'}>艾欧尼亚、阿拉德大陆、JavaScript、Java、Python</span>
                        </div>
                        <div className={'info-item'}>
                            <span className={'label'}>人生感悟</span>
                            <span className={'msg'}>我曾踏足山巅，也曾到过低谷，二者都让我受益良多</span>
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