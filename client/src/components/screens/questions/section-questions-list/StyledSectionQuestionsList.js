import styled from 'styled-components';

export const StyledSectionQuestionsList = styled.div`
  padding-top: 37px;
  padding-bottom: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .sectionQuestionList__decorTriangle {
    width: 0;
    height: 0;
    display: flex;
    justify-content: center;
    border-left: 37px solid transparent;
    border-right: 37px solid transparent;
    border-top: 37px solid ${props => props.theme.accentColor};
    position: absolute;
    top: -1px;
    left: calc(50% - 37px);
  }

  .sectionQuestionList__askQuestionContainer {
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .askQuestionContainer__titleContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 7px 0;
  }

  .titleContainer__text {
    text-transform: uppercase;
  }

  .titleContainer__decorTextBox {
    z-index: 0;
  }

  .decorTextBox__text {
    padding: 0 28px;
    background-color: ${props => props.theme.backgroundColor};
    text-transform: uppercase;
    font-weight: 300;
    z-index: 1;
  }

  .titleContainer__decorTextBox::before {
    content: "";
    margin-top: -1px;
    border-top: 1px solid ${props => props.theme.textColor};
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    z-index: -1;
  }

  .askQuestionContainer__redirectBtn {
    margin-top: 10px;
    padding: 7px 28px 5px 28px;
    background-color: ${props => props.theme.primaryColor};
    border: none;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: bold;
    color: #FFFFFF;
  }

  .askQuestionContainer__redirectBtn:hover {
    background-color: ${props => props.theme.strongPrimaryColor};
  }

  .sectionQuestionList__container {
    margin-top: 37px;
    width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .container__questionListContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .questionListContainer__showMoreBtn {
    margin-top: 30px;
    padding: 7px 28px 5px;
    background: transparent;
    border: 2px solid #ECE9EC;
    border-radius: 100px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: #9D5C63;
  }

  .questionListContainer__showMoreBtn:hover {
    background: #ECE9EC;
    border: 2px solid #ECE9EC;
  }

`;