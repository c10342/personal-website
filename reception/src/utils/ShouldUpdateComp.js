import React from "react";

const defaultProps = ["history", "location", "match", "staticContext"];

class ShouldUpdateComp extends React.Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let result = false;
        if(nextState){
            result = Object.keys(nextState).some(key=> nextState[key] !== this.state[key]);
        }
        if(!result && nextProps){
            result = Object.keys(nextProps).some(key=>{
                if(defaultProps.includes(key)){
                    return false;
                }
                return nextProps[key] !== this.props[key];
            });
        }
        return result;
    }
}


export default ShouldUpdateComp;