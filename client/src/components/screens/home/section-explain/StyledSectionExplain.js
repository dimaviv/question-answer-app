import styled from 'styled-components';

export const StyledSectionExplain = styled.div`
  padding-top: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .sectionExplain__decorTriangle {
    width: 0;
    height: 0;
    display: flex;
    justify-content: center;
    border-left: 37px solid transparent;
    border-right: 37px solid transparent;
    border-top: 37px solid ${props => props.theme.accentColor};
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translate(-50%);
  }

  .sectionExplain__decorTriangle img {
    margin-top: -30px;
    width: 18px;
    height: 16px;
  }

  .sectionExplain__container {
    padding: 37px 0 74px 0;
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container__explainFrame {
    width: 650px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .explainFrame__text {
    text-transform: uppercase;
    font-size: 34px;
    font-weight: 900;
  }

  .container__explainFrame span {
    font-weight: 300;
  }

  .container__showExplainFrame {
    margin-top: 74px;
  }

  .showExplainFrame__text {
    font-size: 17px;
    font-weight: 300;
    color: ${props => props.theme.infoTextColor};
    text-decoration: underline;
  }

  .showExplainFrame__text:hover {
    color: ${props => props.theme.infoTextHoverColor};
  }
`;