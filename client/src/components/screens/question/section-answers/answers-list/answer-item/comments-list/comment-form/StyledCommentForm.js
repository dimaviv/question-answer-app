import styled from 'styled-components';

export const StyledCommentForm = styled.form`
  margin-top: 20px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0 15px;
    
    
    .sendForm__inputComment {
      padding: 4px 10px;
      width: 100%;
      border: 1px solid #999999;
      border-radius: 100px;
    }

    .sendForm__inputComment.error {
      border-color: #cf1d00;
    }

    .sendForm__inputComment::placeholder {
    }

    .sendForm__btnSend {
      padding: 7px 14px 5px;
      background: transparent;
      border: 2px solid ${props => props.theme.primaryColor};
      border-radius: 100px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
    }

    .sendForm__btnSend:hover {
      border-color: ${props => props.theme.primaryColor};
      background-color: ${props => props.theme.primaryColor};
      color: #FFFFFF;
    } 
  }
  
  .errorText {
    color: #cf1d00;
  }
`;