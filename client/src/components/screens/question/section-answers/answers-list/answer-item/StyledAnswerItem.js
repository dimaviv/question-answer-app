import styled from 'styled-components';

export const StyledAnswerItem = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #FFFFFF;
  color: #333333;
  gap: 15px 0;

  .answerItem__userInfoContainer {
    padding: 0 30px;
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

  .userInfoContainer__userName:hover {
    text-decoration: underline;
  }


  .userInfoContainer__categoryName {
    color: #999999;
  }

  .userInfoContainer__dateAdd {
  }

  .userInfoContainer__btnBox {
    margin-left: auto;
    display: flex;
    gap: 0 15px;
  }

  .btnBox__btnReport {
    padding: 0;
    height: 30px;
    border: none;
    background: none;
  }

  .btnBox__btnReport img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .btnBox__btnCommentOff {
    padding: 0;
    height: 30px;
    border: none;
    background: none;
  }

  .btnBox__btnCommentOff img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .answerItem__content {
    padding: 0 30px;
    display: flex;
    gap: 0 15px;
  }

  .answerItem__textContainer {
    width: 100%;
  }

  .textContainer__text {
  }

  .textContainer__gradeBox {
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px 0;
  }

  .gradeBox__btnGrade {
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    cursor: pointer;
  }

  .gradeBox__btnGrade.up {
    border-top: 0 solid transparent;
    border-bottom: 25px solid ${props => props.theme.primaryColor};
    
    &:hover {
      border-bottom-color: ${props => props.theme.strongPrimaryColor};
    }
  }
  
  .gradeBox__btnGrade.down {
    border-bottom: 0 solid transparent;
    border-top: 25px solid ${props => props.theme.primaryColor};

    &:hover {
      border-top-color: ${props => props.theme.strongPrimaryColor};
    }
  }

  .gradeTextContainer__text {
    font-size: 22px;
  }

  .gradeTextContainer__text_red {
    color: #cf1d00;
  }

  .gradeTextContainer__text_green {
    color: #008000;
  }

  .answerItem__commentContainer {
    padding: 0 40px 20px;
    display: flex;
  }

  .commentContainer__btnAnswer {
    margin: 20px 0 0 auto;
    padding: 7px 20px 5px;
    background: transparent;
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
  }

  .commentContainer__btnAnswer:hover {
    border: 2px solid ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.primaryColor};
    color: #FFFFFF;
  }
`;