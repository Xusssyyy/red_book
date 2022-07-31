import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
  display: flex;
  width: 100%;
  height: 62px;
  span {
    line-height: 62px;
  }
`

export const GoodsWrapper = styled.div`
  width: 100;
  margin-top: 62px;
  background: rgba(255, 255, 255, 0.1);
`

export const ListWrapper = styled.div`
  width: 100%;
  padding-bottom: 45px;
  .container{
    column-count: 2;
    column-gap: 10px;
    .list{
      width: 100%;
      break-inside: avoid;
      margin-bottom: 10px;
      /* background-color: #e4e4e4; */
      background-color: rgba(250,250,250,1);
      text-align: left;
      border-radius: 5px;
    }
    .list-img{
        display: block;
        width: 100%;
        border-radius: 5px;
    }
    .list-content{
        font-size: 15px;
        font-weight: 600;
        padding: 5px;
        color: black;
    }
    .list-price{
        font-size: 18px;
        font-weight: 700;
        color: red;
    }
}
`

export const Empty = styled.div`
  width: 100%;
  background: #fff;
  margin-top: 70px;
    img {
      width: 100%;
      margin: 0 auto;
    }
`

export const EnterLoading = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: auto;
`
