import React from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import {defaultNav,routers} from './config';
import Header from './components/Header';
import Footer from './components/Footer'
import NotFound from './pages/NotFound';
import Anchor from "./components/Anchor";
import {realPx} from "./assets/js/htmlFontSize";
import './app.scss';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state  ={
            navList:defaultNav,
            showAnchor:false
        };
        this.navClick = this.navClick.bind(this);
        this.onScroll = this.onScroll.bind(this);
        this.$height = realPx(80);
        this.timer = null;
    }
    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        const {navList,showAnchor} = this.state;
        return (
            <>
                <Header navClick={this.navClick} navList={navList} />
                <div className={'app-container'}>
                        <Switch>
                            {
                                routers.map(item=><Route exact {...item}/>)
                            }
                            <Route component={NotFound}/>
                        </Switch>
                </div>
                <Footer/>
                {
                    showAnchor?<Anchor/>:null
                }
            </>
        )
    }
    onScroll(){
        if(!this.timer){
            this.timer = setTimeout(()=>{
                const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(scrollTop>this.$height){
                    this.setState({
                        showAnchor:true
                    })
                }else{
                    this.setState({
                        showAnchor:false
                    })
                }
                clearTimeout(this.timer);
                this.timer = null;
            },500);
        }
    }
    navClick(key){
        this.props.history.push(`/${key}`);
    }

    componentWillUnmount() {
        if(this.timer){
            clearTimeout(this.timer);
        }
        window.removeEventListener('scroll',this.onScroll);
    }
}

export default withRouter(App);
