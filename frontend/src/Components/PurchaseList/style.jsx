import styled from 'styled-components';

const SPurchaseList = styled.main`
  .title {
    width: 50vw;
    margin: auto;
    /* text-align: center; */
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
      color: #353333;
    }
  }
  .article1 {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    width: 50vw;
    margin: auto;
    margin-top: 50px;
    img {
      height: 15vh;
    }
    .status {
      padding-top: 5px;
      padding-left: 15px;
      display: block;

      h3 {
        font-size: 18px;
        height: 5px;
      }
      p {
        font-size: 15px;
        color: #353333;
      }
    }
    .rowArticle {
      display: flex;
      padding-top: 10px;
      p {
        padding-top: 20px;
        padding-left: 10px;
      }
    }
  }
`;

export default SPurchaseList;