import styled from 'styled-components';

export const StyledSectionSignup = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  gap: 24px 0;

  .sectionSignup__redirectContainer {
    display: flex;
    justify-content: flex-end;
  }

  .redirectContainer__text {
    color: ${props => props.theme.infoTextColor};
  }

  .redirectContainer__text:hover {
    text-decoration: underline;
  }

  .sectionSignup__titleContainer {
    display: flex;
    justify-content: center;
  }

  .sectionSignup__signupAppsContainer {
    display: flex;
    flex-direction: column;
    gap: 12px 0;
  }

  .signupAppsContainer__btn {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 10px;
    border: 2px solid transparent;
    border-radius: 100px;
  }

  .item__text {
    padding-top: 3px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .signupAppsContainer__googleAuthBtn {
    background-color: #FFFFFF;
    border-color: #333333;
    color: #333333;
  }

  .signupAppsContainer__googleAuthBtn:hover {
    background-color: #EBEBEB;
  }

  .signupAppsContainer__appleAuthBtn {
    background: #000000;
    border: 2px solid #000000;
    color: #FFFFFF;
  }

  .signupAppsContainer__appleAuthBtn:hover {
    background: #283037;
    border-color: #283037;
  }

  .signupAppsContainer__facebookAuthBtn {
    background: #1877F2;
    border: 2px solid #1877F2;
    color: #FFFFFF;
  }

  .signupAppsContainer__facebookAuthBtn:hover {
    background: #1964d5;
    border-color: #1964d5;
  }

  .sectionSignup__decorTextContainer {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .decorTextContainer__decorTextBox {
    z-index: 0;
  }

  .decorTextBox__text {
    padding: 0 28px;
    background-color: ${props => props.theme.backgroundColor};
    text-transform: lowercase;
    z-index: 1;
  }

  .decorTextContainer__decorTextBox::before {
    content: "";
    margin-top: -1px;
    border-top: 2px solid ${props => props.theme.accentColor};
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    z-index: -1;
  }

  .sectionSignup__loginUserContainer {
    display: flex;
  }

  .sectionSignup__askSignupContainer {
    display: flex;
    justify-content: center;
  }

  .askSignupContainer__text {
  }

  .askSignupContainer__text span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }

`;