import styled from 'styled-components';

export const StyledCategories = styled.div`
  padding: 27px 0;
  max-height: 86px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div {
    width: 100px;
    height: 32px;
    background-color: ${props => props.theme.accentColor};
  }
`;