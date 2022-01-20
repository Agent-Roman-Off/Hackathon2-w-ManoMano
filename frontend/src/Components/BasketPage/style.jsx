import styled from 'styled-components';

const BasketPageStyle = styled.main`
  .main{
    font-family: Open Sans,mm-main,arial,sans-serif;
    font-size: 1.1 rem;
  }
  .boldFont {
    font-weight: 800;
  }
  .container {
    width: 80%;
    margin: 0 auto;
  }
  .parent {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }

  .div2 {
    grid-area: 1 / 4 / 6 / 5;
    height 2rem;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.10), 0 6px 6px rgba(0,0,0,0.13);
    padding: 1rem;
  }
  .div1 {
    grid-area: 1 / 1 / 2 / 4;

  }
  .div3 {
    grid-area: 2 / 1 / 6 / 4;

  }
  .flexColumn {
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    height: 100%
  }
  .bigCharacter {
    font-size: 2rem;
    font-weight: 800;
  }
  .myButton {
    background-color:#29b9ad;
    border:1px solid #29b9ad;
    display:inline-block;
    cursor:pointer;
    box-sizing: border-box;
    color: #0c193a;
    font-weight: 800;
    padding:1rem 2rem;
    font-size: 1.6 rem;
    text-decoration:none;
  }
  .myButton:hover {
    background:linear-gradient(to bottom, #29b9ad 5%, #29b9ad 100%);
    background-color:##29b9ad;
  }

`;

export default BasketPageStyle;
