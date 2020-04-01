import React from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import 'swiper/css/swiper.css';
import './banner.scss';

class Banner extends React.Component {
    static propTypes = {
        bannerList: PropTypes.array
    };
    static defaultProps = {
        bannerList: []
    };

    constructor(props) {
        super(props);
        this.onImageLoad = this.onImageLoad.bind(this);
        this.imageCount = 0;
    }

    render() {
        const {bannerList} = this.props;
        return (
            <div className={'banner'}>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.renderSwiperSlides(bannerList)}
                    </div>
                    <div className="swiper-pagination"/>
                    <div className="swiper-button-prev"/>
                    <div className="swiper-button-next"/>
                </div>
            </div>
        )
    }

    renderSwiperSlides(images) {
        return images.map((item, index) => {
            return (
                <div className="swiper-slide" key={index}>
                    <img alt={'图片'} className={'image'} src={item.imageSrc} onLoad={this.onImageLoad}/>
                </div>
            )
        })
    }

    onImageLoad() {
        this.imageCount++;

        if (this.imageCount === this.props.bannerList.length) {
            this.initSwiper();
        }
    }

    initSwiper() {
        this.mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: true,
            delay: 7000,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }

    componentWillUnmount() {
        this.mySwiper && this.mySwiper.destroy();
    }
}

export default Banner;