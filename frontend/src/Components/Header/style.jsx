import styled from 'styled-components';

const SHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 7px 7px -4px rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
  .logoCont {
    width: 200px;
  }
  .logo {
    width: 100%;
  }
  .searchbar {
    width: 400px;
    height: 30px;
    padding: 10px;
    background-color: #eeebeb;
    border: 0.5px solid #0c193a;
    border-radius: 20px;
  }
  .logCont {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    height: 70px;
    color: #0c193a;
  }
  .supplyBtn {
    width: 120px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    color: #0c193a;
    font-weight: bold;
    cursor: pointer;
    background-color: #1b9e9f;
  }
  a {
    text-decoration: none;
    color: #0c193a;
  }
  .greetCont {
    height: 100%;
    width: 140px;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    color: grey;
  }
`;

export default SHeader;
