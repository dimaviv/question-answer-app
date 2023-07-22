import styled from 'styled-components';

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .header-maquette {
    display: flex;
    flex-direction: column;

    .navbar {
      padding-top: 37px;
      padding-bottom: 10px;
      height: 79px;
      display: flex;
      justify-content: center;
      background-color: ${props => props.theme.primaryColor};

      .container {
        width: 1280px;
        display: flex;
        justify-content: space-between;

        .logo {
          width: 114px;
          height: 32px;
          background-color: ${props => props.theme.strongPrimaryColor};
        }

        .nav-list {
          display: flex;
          gap: 0 5px;

          & > div {
            width: 100px;
            height: 32px;
            background-color: ${props => props.theme.strongPrimaryColor};
          }

          & > div:last-child {
            width: 150px;
          }
        }
      }
    }

    .categories {
      display: flex;
      justify-content: center;
      .container {
        display: flex;
        flex-direction: column;
        width: 1280px;
      }
    }
  }


  .main-maquette {
    height: calc(100vh - 79px);
    background-color: ${props => props.theme.backgroundColor};

    .container {
      width: 1280px;
    }
  }

  .footer-maquette {
    height: 459px;
    background-color: ${props => props.theme.strongPrimaryColor};

    .container {
      width: 1280px;
    }
  }
`;