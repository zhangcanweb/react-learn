import styled from 'styled-components';
import logoSrc from '../../assets/images/logo.png';

export const Wrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  width: 100%;
`
export const TopWrapper = styled.div`
  max-width: 1440px;
  height: 56px;
  margin: 0 auto;
`

export const Logo = styled.a`
  cursor: pointer;
  float: left;
  background: url(${logoSrc})  no-repeat;
  background-size: cover;
  width: 100px;
  height: 56px;
`
export const ButtonItem = styled.a`
  cursor: pointer;
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
  text-align: center;
  &.write{
    margin: 8px 5px 0 15px;
    line-height: 40px;
    color: #fff;
    background-color: #ea6f5a;
    width: 100px;
    height: 40px;
  }
`
export const MiddleWrapper = styled.div`
  width: 960px;
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
`
export const MiddleItem = styled.a`
  cursor: pointer;
  &.left{
    float: left;
    font-size: 17px;
  }
  &.right{
    float: right;
    font-size: 15px;
    color: #969696;
  }
  &.item-1{
    color: #ea6f5a;
    margin-right: 50px;
  }
  &.item-2{
    margin-right: 30px;
  }
  .iconfont{
    font-size: 20px;
    padding: 0 4px 0 0;
    position: relative;
    top: 2px;
  }
`
export const Serch = styled.input` 
  border: none;
  outline: none;
  padding: 0 40px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  margin-left: 50px;
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-enter-done{
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
  &.slide-exit-done{
    width: 160px;
  }
`
export const SerchItem = styled.div`
  float:left;
  position: relative;
`
export const SerchIcon= styled.a`
  position:absolute;
  background-color: #eee;
  border-radius: 50%;
  color: #333;
  right: 7px;
  top: 14px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  &.active{
    background-color: #969696;
    color: #fff;
  }
`