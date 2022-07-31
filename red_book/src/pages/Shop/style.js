import styled from "styled-components";

export const Pop = styled.div`
  z-index: 9999;
`

export const PopWrapper = styled.div`
  background-color: #e4e4e4;
  .more{
    line-height: 20px;
    font-size: 20px;
    padding-top: 30px;
    padding-left: 15px;
  }
  .grid{
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(4, 75px);
    grid-gap: 15px;
    grid-template-rows: 60px 60px;
    .grid_icon{
        background-color: white;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
  }
`

export const Top = styled.div`
  top: 0;
  position: sticky;
  z-index: 999;
  background-color:white;
`

export const Banner = styled.div`
  background-color:white;
  height: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 2px; 
`

export const Tab = styled.div`
  background-color:white;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 2px;
  border-bottom: 1px solid #e4e4e4;
`

export const BannerItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Img = styled.div`
position:fixed;
bottom: 80px;
right: 30px;
z-index: 9999;
`

