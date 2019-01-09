import React, { Component } from 'react';
import Slider from "react-slick";
import { CarouselItem } from './style';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
// import { toJS } from 'immutable';
// import pic1 from '../../assets/images/img_1.jpg';
// import pic2 from '../../assets/images/img_2.jpg';
// import pic3 from '../../assets/images/img_3.jpg';
// import pic4 from '../../assets/images/img_4.jpg';
// import pic5 from '../../assets/images/img_5.jpg';

class Carousel extends Component {
  render() {
    const { list } = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
    };
    return (
      <div>
        <Slider {...settings}>
          {
            list.map((item) => {
              return (
                <CarouselItem key={item.get('id')}><img src={item.get('imgUrl')}  alt=''/></CarouselItem>
              )
            })
          }
        </Slider>
      </div>
    );
  }
  componentDidMount () {
    console.log(this.props.list)
    this.props.getList()
  }
}
const mapState = state => {
  return {
    list: state.getIn(['carouselReducer', 'list'])
  }
}
const mapDispatch = dispatch => {
  return {
    getList () {
      dispatch(actionCreaters.getListAction());
    }
  }
}
export default connect(mapState, mapDispatch)(Carousel);