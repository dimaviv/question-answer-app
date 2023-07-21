import styled from 'styled-components';

export const StyledChangeModeBtn = styled.button`
    margin-left: auto;
    padding: 5px;
    position: relative;
    width: 54px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    border-radius: 100px;
    background-color: #272727;
    border: none;
    order: 9;
  
  &::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #FFFFFF;
    transition: left 0.2s ease-in;
  }

  &.active::before {
    left: 26px;
  }

  .mode-icon {
    max-width: 100%;
    max-height: 100%;
    position: relative;
    z-index: 9;
  }`