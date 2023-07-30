import styled from 'styled-components';

export const StyledCommentsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .commentsList__content {
    display: flex;
    flex-direction: column;
  }

  .content__commentItem {
    padding: 15px 60px;
    display: flex;
    border-bottom: 1px solid #D9D3D8;
  }

  .commentItem__commentInfoContainer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  .commentInfoContainer__avatarBox {
    width: 40px;
    height: 40px;
  }

  .commentInfoContainer__avatarBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .commentInfoContainer__commentText {
    font-size: 16px;
    color: #584B53;
  }

  .commentInfoContainer__dateAdd {
    font-size: 16px;
    color: #D9D3D8;
  }

  .commentsList__sendForm {
    margin-top: 20px;
    padding-left: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 15px;
  }

  .sendForm__userAvatarBox {
    width: 50px;
    height: 50px;
  }

  .sendForm__userAvatarBox img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .sendForm__inputComment {
    padding: 7px 10px;
    width: 100%;
    border: 2px solid #D9D3D8;
    border-radius: 100px;
    color: #584B53;
  }

  .sendForm__inputComment::placeholder {
    font-size: 16px;
    color: #D9D3D8;
  }

  .sendForm__btnSend {
    padding: 7px 14px 5px;
    background: transparent;
    border: 2px solid #D9D3D8;
    border-radius: 100px;
    color: #D9D3D8;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
  }

  .sendForm__btnSend:hover {
    border-color: ${props => props.theme.primaryColor};
    background-color: ${props => props.theme.primaryColor};
    color: #FFFFFF;
  }

`;