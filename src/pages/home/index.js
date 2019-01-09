import React, { Component } from 'react';
import {
  ContentWrapper,
  ContentLeft,
  ContentRight
} from './style';
import Carousel from '../../components/carousel';

class Home extends Component { 
  render () {
    return (
      <ContentWrapper>
        <ContentLeft>
          <Carousel />
        </ContentLeft>
        <ContentRight>
          right
        </ContentRight>
      </ContentWrapper>
    )
  }
}
export default Home;