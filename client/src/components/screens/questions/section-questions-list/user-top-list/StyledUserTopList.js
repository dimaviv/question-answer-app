import styled from 'styled-components';

export const StyledUserTopList = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: #FFFFFF;
  color: #333333;
  overflow-x: hidden;

  .userTopList__titleContainer {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.primaryColor};
    color: #FFFFFF;
  }

  .titleContainer__text {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 900;
  }

  .userTopList__container {
    display: flex;
    flex-direction: column;
  }

  .emptyList {
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }

  .emptyList__text {
    font-weight: 300;
    font-size: 17px;
  }
`;