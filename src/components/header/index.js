import React from 'react';
import { 
  Wrapper, 
  TopWrapper, 
  Logo, 
  ButtonItem, 
  MiddleWrapper, 
  MiddleItem, 
  Serch,
  SerchItem,
  SerchIcon
} from './style';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { CSSTransition } from 'react-transition-group';

const Header = props => {
  return (
    <Wrapper>
        <TopWrapper>
          <Logo />
          <ButtonItem className='write'>
            <i className='iconfont'>&#xe641;</i>
            写文章
          </ButtonItem>  
          <ButtonItem>注册</ButtonItem>
          <MiddleWrapper>
            <MiddleItem className='left item-1'>
              <i className='iconfont'>&#xe60f;</i>
              首页
            </MiddleItem>
            <MiddleItem className='left'>
              <i className='iconfont'>&#xe791;</i>
              下载App
            </MiddleItem>
            <SerchItem>
              <CSSTransition
                in={props.focused}
                timeout={200}
                classNames='slide'
              >
                <Serch
                  onFocus={props.handleFocus}
                  onBlur={props.handleBlur} 
                />
              </CSSTransition>
              <SerchIcon 
                className={props.focused ? 'active': '' }
              >
                <i className='iconfont'>&#xe613;</i>
              </SerchIcon>
            </SerchItem>
            <MiddleItem className='right'>登录</MiddleItem>
            <MiddleItem className='right item-2'>Aa</MiddleItem>
          </MiddleWrapper>
        </TopWrapper>
        
      </Wrapper>
  )
}
const mapStateToProps = state => {
  return {
    focused: state.get('headerReducer').get('focused')
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleFocus () {
      dispatch(actionCreaters.searchFocus())
    },
    handleBlur () {
      dispatch(actionCreaters.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);