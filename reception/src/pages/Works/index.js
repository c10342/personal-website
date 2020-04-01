import React from 'react';

import WorkCard from "../../components/WorkCard";

import ShouldUpdateComp from "../../utils/ShouldUpdateComp";

import './works.scss';
import Work from "../../api/Work";

class Works extends ShouldUpdateComp{
    constructor(props) {
        super(props);
        this.state = {
            workList:[]
        }
    }

    componentDidMount() {
        this.getWorkData();
    }

    render() {
        const {workList} = this.state;
        return (
            <div className={'works'}>
                {workList.map((item,index)=><WorkCard {...item} key={index} onItemClick={this.onItemClick} />)}
            </div>
        );
    }

    onItemClick(src){
        window.open(src);
    }

    async getWorkData(){
        try{
            const data = await Work.getWorkData();
            this.setState({
                ...data
            })
        }catch (e) {

        }
    }
}

export default Works;