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
      float: left;
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
    .list-author{
        position: relative;
        margin-top: 10px;
        .icon-img{
            float: left;
            display: block;
            width: 28px;
            height: 28px;
            border-radius:14px ;
        }
        .list-h{
            position: absolute;
            top: -7px;
            left: 32px;
            font-size: 14px;
            margin-top: 10px;
            margin-bottom: 15px;
            float: left;
            font-weight: 100;
        }
        .icon-aixin1{
            position: absolute;
            top: 0rem;
            right: 0.2rem;
            font-size: 20px;
        }
        .icon-aixin2{
            position: absolute;
            top: 0rem;
            right: 0.2rem;
            font-size: 20px;
        }
    }
}
.load{
    margin: auto;
}
`