import { createGlobalStyle } from 'styled-components';

export const FontIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
src: url('./iconfont.eot?t=1546442969294'); /* IE9*/
src: url('./iconfont.eot?t=1546442969294#iefix') format('embedded-opentype'), /* IE6-IE8 */
url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
url('./iconfont.ttf?t=1546442969294') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
url('./iconfont.svg?t=1546442969294#iconfont') format('svg'); /* iOS 4.1- */
}

  .iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  // .icon-icon--:before { content: "\e791"; }

  // .icon-faxianzhinanzhen:before { content: "\e60f"; }

  // .icon-qianbi:before { content: " "; }
`
 

