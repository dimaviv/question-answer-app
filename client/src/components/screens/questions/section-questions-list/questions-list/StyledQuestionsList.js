import styled from 'styled-components';

export const StyledQuestionsList = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;

  .emptyList {
    padding: 20px 0;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }

  .emptyList__text {
    font-size: 17px;
    font-weight: 300;
  }
`;