import styled from 'styled-components';

export const StyledSectionCategoryAsk = styled.div`
  padding: 47px 0 37px 0;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.accentColor};

  .sectionCategoryAsk__container {
    width: 1280px;
    display: flex;
    flex-direction: column;
  }

  .container__askQuestionContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .askQuestionContainer__titleContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .titleContainer__decorTextBox {
    z-index: 0;
  }

  .decorTextBox__text {
    padding: 0 28px;
    background-color: ${props => props.theme.accentColor};
  }

  .titleContainer__decorTextBox::before {
    content: "";
    margin-top: -1px;
    border-top: 2px solid ${props => props.theme.backgroundColor};
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    z-index: -1;
  }

  .askQuestionContainer__searchContainer {
    margin-top: 20px;
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
    background: #FFFFFF;
    border: none;
    border-radius: 100px;

    &:hover, &:focus {
      background-color: #F5F5F5;
    }
  }

  .container_btnSearch {
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

  .container_btnSearch:hover {
    background-color: ${props => props.theme.strongPrimaryColor};
  }

`;