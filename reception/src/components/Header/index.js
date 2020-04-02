
import React from 'react';

import './header.scss';

import PropTypes from 'prop-types'


class Header extends React.Component{
    static defaultProps = {
        navList:[]
    };
    static propTypes = {
        navList:PropTypes.array,
        navClick:PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            active:''
        };
        this.onHashChange = this.onHashChange.bind(this)
    }

    componentDidMount() {
        this.onHashChange();
        window.addEventListener('hashchange',this.onHashChange)
    }

    render() {
        return (
            <div className='header'>
                <div>
                    <i className="icon iconfont icon-pen"/>
                    <span className='name'>TjSanshao</span>
                </div>
                <div>
                    {this.renderItemList()}
                </div>
            </div>
        )
    }
    renderItemList(){
        const {navList} = this.props;
        const {active} = this.state;
        return (
            <ul className='item-list'>
                {
                    navList.map(item=><li onClick={()=>this.navClick(item.key)} className={active===item.key?"active":""} key={item.key}>{item.name}</li>)
                }
            </ul>
        )
    }
    navClick(key){
        if(this.props.navClick && this.state.active!==key){
            this.props.navClick(key);
        }
    }
    onHashChange(){
        const hashName = window.location.hash;
        const active = hashName.substring(2,hashName.length);
        active && this.setState({
            active
        })
    }
    componentWillUnmount() {
        window.removeEventListener('hashchange',this.onHashChange)
    }
}

export default Header;