import styled,{createGlobalStyle} from "styled-components"

// export const GlobalStyle = createGlobalStyle`
// html, body, div, span, applet, object, iframe,
//   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
//   a, abbr, acronym, address, big, cite, code,
//   del, dfn, em, img, ins, kbd, q, s, samp,
//   small, strike, strong, sub, sup, tt, var,
//   b, u, i, center,
//   dl, dt, dd, ol, ul, li,
//   fieldset, form, label, legend,
//   table, caption, tbody, tfoot, thead, tr, th, td,
//   article, aside, canvas, details, embed, 
//   figure, figcaption, footer, header, hgroup, 
//   menu, nav, output, ruby, section, summary,
//   time, mark, audio, video {
//     margin: 0;
//     padding: 0;
//     border: 0;
//     font-size: 100%;
//     font: inherit;
//     vertical-align: baseline;
//   }
//   article, aside, details, figcaption, figure, 
//   footer, header, hgroup, menu, nav, section {
//     display: block;
//   }
//   body {
//     line-height: 1;
//   }
//   html, body{
//     background: #f2f3f4;;
//   }
//   ol, ul {
//     list-style: none;
//   }
//   blockquote, q {
//     quotes: none;
//   }
//   blockquote:before, blockquote:after,
//   q:before, q:after {
//     content: '';
//     content: none;
//   }
//   table {
//     border-collapse: collapse;
//     border-spacing: 0;
//   }
//   a{
//     text-decoration: none;
//     color: #fff;
//   }
// `

export const Tab = styled.div`
  top: 0;
  position: sticky;
  z-index: 99999;
  background-color:white;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 2px;
  border-bottom: 1px solid #e4e4e4;
`
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  &:nth-child(3){
    border-bottom: 2px solid #ed2b43;
    font-size: 16px;
    color: #111;
    font-weight: 580;
  }
`

export const Loads = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

