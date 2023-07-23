import styled from 'styled-components';

export const StyledQuestionItem = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #FFFFFF;
  gap: 15px 0;

  .questionContainer__titleContainer {
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

  .titleContainer__userName {
  }

  .titleContainer__userName:hover {
    text-decoration: underline;
  }

  .titleContainer__categoryName {
    text-transform: lowercase;
    color: #999999;
  }

  .titleContainer__dateAdd {
  }

  .titleContainer__btnReport {
    margin-left: auto;
    padding: 0;
    height: 30px;
    border: none;
    background: none;
  }

  .titleContainer__btnReport img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .questionContainer__textContainer {
  }

  .textContainer__text {
  }

  .questionContainer__btnAnswer {
    margin-left: auto;
    padding: 7px 20px 5px;
    background: transparent;
    border: 2px solid #1D6178;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
  }

  .questionContainer__btnAnswer:hover {
    background-color: #1D6178;
    color: #FFFFFF;
  }
`;