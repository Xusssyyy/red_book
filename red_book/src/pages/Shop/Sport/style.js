import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  /* background: rgba(255, 255, 255, 0.1); */
  background-color: #ffffff;
  padding-bottom: 45px;
  .container{
    column-count: 2;
    column-gap: 10px;
    .list{
      width: 100%;
      break-inside: avoid;
      margin-bottom: 10px;
      background-color: #f5f5f5;
      /* background-color: #e4e4e4; */
      /* background-color: rgba(250,250,250,1); */
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
.load{
  margin: auto;
}
`