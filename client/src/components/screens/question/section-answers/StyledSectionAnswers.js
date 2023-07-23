import styled from 'styled-components';

export const StyledSectionAnswers = styled.div`
  margin-top: 37px;
  padding-bottom: 74px;
  display: flex;
  justify-content: center;
  font-size: 17px;

  .sectionAnswers__container {
    width: 700px;
    display: flex;
    flex-direction: column;
  }

  .container__answersTitleContainer {
    margin: 74px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .answersTitleContainer__decorTextBox {
    z-index: 0;
  }

  .decorTextBox__text {
    padding: 0 28px;
    background-color: ${props => props.theme.accentColor};
    text-transform: uppercase;
    font-weight: bold;
    z-index: 1;
  }

  .answersTitleContainer__decorTextBox::before {
    content: "";
    margin-top: -1px;
    border-top: 2px solid ${props => props.theme.textColor};
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    z-index: -1;
  }
`;