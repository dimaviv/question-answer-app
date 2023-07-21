import styled from 'styled-components';

export const StyledNavBar = styled.div`
  padding: 37px 0 10px 0;
  background-color: ${props => props.theme.primaryColor};
  display: flex;
  justify-content: center;
  color: #FFFFFF;

  .nav__container {
    width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .container__leftBarContainer {
    display: flex;
  }

  .leftBarContainer__logoBox {

  }

  .leftBarContainer__logoBox:hover a {
    color: #5FC1A4;
  }

  .container__rightBarContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .rightBarContainer__menu {
    display: flex;
  }

  .logoBox__text {
    font-weight: bold;
    font-size: 22px;
  }

  .menu__list {
    width: 100%;
    display: flex;
    gap: 5px;
  }

  .list__item {
    padding: 7px 20px 5px 20px;
    border-radius: 100px;
    cursor: pointer;
    border: 2px solid transparent;
  }

  .list__item:hover {
    background-color: ${props => props.theme.strongPrimaryColor};
  }

  .item__text {
    text-transform: uppercase;
    font-weight: 600;
  }

  .list__itemDecor {
    border: 2px solid #FFFFFF;
  }

`;