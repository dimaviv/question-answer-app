import styled from 'styled-components';

export const StyledQuestionItem = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #FFFFFF;
  gap: 15px 0;
  color: #333333;
  font-size: 17px;

  .questionItem__userInfoContainer {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 0 15px;
  }

  .userInfoContainer__avatarBox {
    width: 35px;
    height: 35px;
    display: flex;
    border-radius: 100px;
    overflow: hidden;
  }

  .defaultAvatar {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 19px;
  }

  .userInfoContainer__userName {
  }

  .userInfoContainer__categoryName {
    text-transform: lowercase;
    color: #999999;
  }

  .userInfoContainer__userName:hover {
    text-decoration: underline;
  }

  .userInfoContainer__dateAdd {
  }

  .questionItem__textContainer {

  }

  .textContainer__text {
  }

  .questionItem__btnRedirect {
    margin-left: auto;
    padding: 7px 20px 5px;
    background: transparent;
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 100px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
  }

  .questionItem__btnRedirect:hover {
    background-color: ${props => props.theme.primaryColor};
    color: #FFFFFF;
  }
`;