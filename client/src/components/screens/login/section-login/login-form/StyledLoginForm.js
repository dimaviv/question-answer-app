import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px 0;

  .form__inputItem {
    padding: 0 40px 0 20px;
    height: 40px;
    width: 100%;
    border: none;
    border-radius: 100px;
    background-color: #FFFFFF;

    &:hover, &:focus {
      background-color: #F5F5F5;
    }
  }

  .inputPasswordBox {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .passwordSecurityBtn {
      border: none;
      display: flex;
      align-items: center;
      position: absolute;
      right: 12px;
    }
  }

  .form__inputItem::-webkit-input-placeholder {
    color: #999999;
  }

  .form__inputItem_error {
    outline: #cf1d00;
    border: 2px solid #cf1d00;
  }

  .form_signinBtn {
    margin-top: 12px;
    height: 40px;
    border: none;
    border-radius: 100px;
    background-color: ${props => props.theme.primaryColor};
    font-weight: bold;
    color: #FFFFFF;
    text-transform: uppercase;
  }

  .form_signinBtn:hover {
    background-color: ${props => props.theme.strongPrimaryColor};
  }

  .form__signinOptions {
    display: flex;
    justify-content: space-between;
  }
  
  .errorTextBox__text {
    color: #cf1d00;
  }

  .signinOptions__keepLogBox {
    display: flex;
    align-items: center;
  }

  .signinOptions__keepLogBox input[type='checkbox'] {
    margin-right: 5px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  .signinOptions__forgotPassText {
    font-weight: bold;
  }

  .signinOptions__forgotPassText:hover {
    text-decoration: underline;
  }
`;