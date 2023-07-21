import styled from 'styled-components';

export const StyledSectionAsk = styled.div`
  padding: 47px 0 37px 0;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.accentColor};
  

  .sectionAsk__container {
    width: 1280px;
    display: flex;
    flex-direction: column;
  }

  .container__askQuestion {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .askQuestion__titleContainer {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .askQuestion__searchContainer {
    margin-top: 20px;
  }

  .titleContainer__text {

  }

  .searchContainer__searchForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .searchForm__container {
    height: 50px;
    width: 760px;
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 100px;
    overflow-x: hidden;
  }

  .container__inputQuestion {
    padding: 1px 80px 3px 20px;
    width: 100%;
    height: 100%;
    font-size: 17px;
    background-color: #FFFFFF;
    border: none;
    border-radius: 100px;
  }

  .container__btnSearch {
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primaryColor};
    border: none;
    position: absolute;
    right: 0;
  }

  .container__btnSearch:hover {
    background-color: ${props => props.theme.strongPrimaryColor};
  }

  .searchForm__bottomText {
    margin-top: 20px;
    font-size: 16px;
    font-weight: 300;
    color: #666666;
  }

  .container__explainTitle {
    margin-top: 74px;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .explainTitle__decorTextBox {
    z-index: 0;
  }

  .decorTextBox__text {
    padding: 0 28px;
    background-color: ${props => props.theme.accentColor};
    z-index: 1;
  }

  .explainTitle__decorTextBox::before {
    content: "";
    margin-top: -1px;
    border-top: 2px solid ${props => props.theme.backgroundColor};
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    z-index: -1;
  }
`;