import styled from 'styled-components';

const SPurchaseList = styled.main`
  * {
    background-color: #f5f6f7;
  }
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
    .containerButton {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .cartButton {
      cursor: pointer;
      margin-bottom: 20px;
      margin-right: 20px;
      height: 5vh;
      width: 10vw;
    }
  }
  .details {
    display: flex;
    flex-direction: column;
  }
`;

export default SPurchaseList;
