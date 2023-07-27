import styled from 'styled-components';

export const StyledSectionAskQuestion = styled.div`
  margin-top: 37px;
  width: 100%;
  display: flex;
  justify-content: center;

  .sectionAskQuestion__content {
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .askQuestionContainer {
    padding: 30px;
    width: 840px;
    display: flex;
    background: #FFFFFF;
    border-radius: 15px;
  }

  .askQuestionForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
  }

  .askQuestionForm .questionTextBox {
    display: flex;
    flex-direction: column;
  }

  .askQuestionForm .questionText {
    min-width: 100%;
    max-width: 100%;
  }

  .askQuestionForm .btnBox {
    display: flex;
    justify-content: space-between;
  }

  .askQuestionForm .leftSideBtnBox {
    display: flex;
    align-items: center;
  }

  .askQuestionForm .rightSideBtnBox {
    display: flex;
    align-items: center;
  }

  .askQuestionForm .btnSend {
    padding: 9px 28px 7px;
    background-color: #FFFFFF;
    border-radius: 100px;
    border: 2px solid ${props => props.theme.primaryColor};
    font-weight: bold;
    text-transform: uppercase;
    color: #333333;
  }

  .askQuestionForm .btnSend:hover {
    background-color: ${props => props.theme.strongPrimaryColor};
    color: #FFFFFF;
  }
`;