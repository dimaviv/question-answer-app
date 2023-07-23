import styled from 'styled-components';

export const StyledQuestionsLoading = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  
  & > div {
    height: 142px;
    background-color: ${props => props.theme.accentColor};
  }
`;