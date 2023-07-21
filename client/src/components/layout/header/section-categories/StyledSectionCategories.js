import styled from 'styled-components';

export const StyledSectionCategories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  position: relative;
  

  .sectionCategories__container {
    width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .container__categories {
    padding: 27px 0;
    max-height: 86px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 37px 37px;
    transition: max-height .6s cubic-bezier(.18, .98, .32, .98);
  }

  .container__categories_show {
    max-height: 1000px;
    transition: max-height .6s ease-in;
  }

  .categories__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .categories__item img {
    width: 32px;
    height: 32px;
  }

  .item__text {
    padding-top: 6px;
    margin-left: 5px;
    border: none;
    background: transparent;
  }

  .item__text:hover {
    text-decoration: underline;
  }

  .item__text_active {
    text-decoration: underline;
  }

  .sectionCategories__categoryText:hover {
    text-decoration: underline;
  }

  .btnDropMenu {
    width: 0;
    height: 0;
    display: flex;
    justify-content: center;
    border-left: 37px solid transparent;
    border-right: 37px solid transparent;
    border-top: 37px solid ${props => props.theme.header.triangleColor};
    position: absolute;
    bottom: -36px;
    left: calc(50% - 37px);
    cursor: pointer;
  }
`;