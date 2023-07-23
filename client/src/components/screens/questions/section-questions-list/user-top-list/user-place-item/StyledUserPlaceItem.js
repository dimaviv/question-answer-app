import styled from 'styled-components';

export const StyledUserPlaceItem = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;

  .userPlaceItem:nth-child(1) {
    background: #FEF2D7;
  }

  .userPlaceItem:nth-child(2) {
    background: #EBEBEB;
  }

  .userPlaceItem:nth-child(3) {
    background: #F7EBDE;
  }

  .userPlaceItem__userInformContainer {
    display: flex;
    align-items: center;
  }

  .userInformContainer__placeContainer {
    margin: 0 10px;
    height: 40px;
    display: flex;
    justify-content: center;
  }

  .userInformContainer__userInfoContainer {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  .userInfoContainer__avatarBox {
    width: 35px;
    height: 35px;
    display: flex;
    border-radius: 100px;
    overflow: hidden;
  }

  .userInfoContainer__nameBox {
    width: 200px;
    display: flex;
    overflow-x: hidden;
  }

  .nameBox__text {
    font-size: 17px;
  }

  .nameBox__text:hover {
    text-decoration: underline;
  }

  .userPlaceItem__userScoreContainer {
    margin: 0 10px;
    display: flex;
    align-items: center;
  }

  .userScoreContainer__text {
    font-size: 17px;
  }

  .defaultAvatar {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 19px;
  }
`;