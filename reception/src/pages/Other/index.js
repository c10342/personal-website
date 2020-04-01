import React from 'react';

import OtherTags from "../../components/OtherTags";

import OtherSort from "../../components/OtherSort";

import ShouldUpdateComp from "../../utils/ShouldUpdateComp";

import './other.scss';
import Others from "../../api/Others";

class Other extends ShouldUpdateComp {
    constructor(props) {
        super(props);
        this.state = {
            tagsList:[],
            sortCardList:[]
        }
    }

    componentDidMount() {
        this.getAboutData();
    }

    render() {
        const {tagsList,sortCardList} = this.state;
        return (
            <div className={'other-page'}>
                <OtherTags tagsList={tagsList} />
                <OtherSort sortCardList={sortCardList}/>
            </div>
        );
    }

    async getAboutData(){
        try {
           const data = await Others.getAboutData();
           if(data){
               this.setState({
                   ...data
               })
           }
        }catch (e) {

        }
    }
}

export default Other;