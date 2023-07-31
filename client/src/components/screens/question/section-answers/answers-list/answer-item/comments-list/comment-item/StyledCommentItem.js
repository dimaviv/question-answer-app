import styled from 'styled-components';

export const StyledCommentItem = styled.div`
  display: flex;
  font-size: 14px;
  
  .commentItem__commentInfoContainer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  .commentInfoContainer__avatarBox {
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 100px;
    overflow: hidden;
  }

  .commentInfoContainer__defaultAvatar {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 17px;
  }

  .commentInfoContainer__commentText {
  }

  .commentInfoContainer__dateAdd {
  }
`;