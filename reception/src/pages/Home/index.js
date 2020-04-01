import React from 'react';

import './home.scss';

import Banner from '../../components/Banner';

import MainCard from "../../components/MainCard";

import ShouldUpdateComp from "../../utils/ShouldUpdateComp";
import Homes from "../../api/Homes";


class Home extends ShouldUpdateComp {
    constructor(props) {
        super(props);
        this.onItemClick = this.onItemClick.bind(this);
        this.state = {
            bannerList:[],
            mainCardList:[]
        }
    }

    componentDidMount() {
        this.getHomeData();
    }

    render() {
        const {mainCardList,bannerList} = this.state
        return (
            <div className={'home'}>
                <Banner bannerList={bannerList}/>
                {
                    mainCardList.map((item, index) => <MainCard {...item} key={index} reverse={index % 2 !== 0}
                                                                onItemClick={this.onItemClick}/>)
                }
            </div>
        )
    }

    onItemClick(key) {
        window.scrollTo(0,0);
        this.props.history.push(`${key}`)
    }

    async getHomeData(){
        try{
            const data = await Homes.getHomeData();
            if(data){
                this.setState({
                    ...data
                })
            }
        }catch (e) {

        }
    }
}

export default Home;