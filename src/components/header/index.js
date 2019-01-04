import React, {Component} from 'react';
import { 
  Wrapper, 
  TopWrapper, 
  Logo, 
  ButtonItem, 
  MiddleWrapper, 
  MiddleItem, 
  Serch,
  SerchItem,
  SerchIcon,
  SearchInfo,
  SearchInfoTitle,
  SearchTitleItem,
  InfoList,
  InfoItem
} from './style';
import { connect } from 'react-redux';
import { actionCreaters } from './store';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
  getInfoList () {
    const { focused, list, mouseIn, page, totalPages, handleMouseEnter, handleMouseLeave, handleClickInfo } = this.props; 
    const listJS = list.toJS();
    const newList = [];
    if (listJS.length)  {
      for (let i = (page-1) * 10; i < page * 10; i++) {
        if (i < listJS.length) {
          newList.push(
            <InfoItem key={listJS[i]}>{listJS[i]}</InfoItem>
        )
      }
    }
  }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        <SearchInfoTitle>
          <SearchTitleItem className='left'>热门搜索</SearchTitleItem>
          <SearchTitleItem 
            className='right'
            onClick={(e)=> handleClickInfo(page, totalPages, e)}
          >
          <i className='iconfont'>&#xe66d;</i>
            换一批
          </SearchTitleItem>
        </SearchInfoTitle>
        <InfoList>
          {newList}
        </InfoList>
      </SearchInfo>
      )
    }
  }
  render () {
    const { focused, handleFocus, handleBlur, list } = this.props;
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
                  in={focused}
                  timeout={200}
                  classNames='slide'
                >
                  <Serch
                    onFocus={() => handleFocus(list)}
                    onBlur={handleBlur}
                  />
                </CSSTransition>
                <SerchIcon 
                  className={focused ? 'active': '' }
                >
                  <i className='iconfont'>&#xe613;</i>
                </SerchIcon>
               {this.getInfoList()}
              </SerchItem>
              <MiddleItem className='right'>登录</MiddleItem>
              <MiddleItem className='right item-2'>Aa</MiddleItem>
            </MiddleWrapper>
          </TopWrapper>
          
        </Wrapper>
    )
  }
}
const mapStateToProps = state => {
  return {
    focused: state.getIn(['headerReducer', 'focused']),
    mouseIn: state.getIn(['headerReducer', 'mouseIn']),
    page: state.getIn(['headerReducer', 'page']),
    totalPages: state.getIn(['headerReducer', 'totalPages']),
    list: state.getIn(['headerReducer', 'list'])
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleFocus (list) {
      (list.toJS().length === 0) && dispatch(actionCreaters.getInfoAction());
      // list属于immutable数组没有length属性
      // (list.size === 0) && dispatch(actionCreaters.getInfoAction());
      dispatch(actionCreaters.searchFocus());
    },
    handleBlur () {
      dispatch(actionCreaters.searchBlur());
    },
    handleMouseEnter () {
      dispatch(actionCreaters.mouseIn());
    },
    handleMouseLeave () {
      dispatch(actionCreaters.mouseOut());
    },
    handleClickInfo (page, totalPages, e) {
      e.preventDefault();
      e.stopPropagation(); 
      if (page < totalPages) {
        dispatch(actionCreaters.changePage(page+1))
      } else {
        dispatch(actionCreaters.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);