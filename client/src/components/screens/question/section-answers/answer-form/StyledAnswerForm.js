import styled from 'styled-components';

export const StyledAnswerForm = styled.form`
  margin-bottom: 74px;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  background-color: #FFFFFF;
  border-radius: 15px;
  color: #333333;
  z-index: 1000;

  textarea {
    padding: 7px 10px;
    max-width: 100%;
    min-width: 100%;
  }
  
  .submitBtn {
    margin-left: auto;
    padding: 7px 28px 5px;
    border-radius: 100px;
    border: 2px solid ${props => props.theme.primaryColor};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    
    &:hover {
      background-color: ${props => props.theme.primaryColor};
      color: #FFFFFF;
    }
  }
`;