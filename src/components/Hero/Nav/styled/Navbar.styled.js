import styled from 'styled-components'

export const StyledNavbar = styled.div`
  padding: 20px;
  padding-bottom: 0;
  position: absolute;
  top: 85px;
  right: 30px;
  display: flex;
  flex-direction: column;
  width: 250px;
  background: #303030;
  border-radius: 10px;
  border: 2px solid #303030;
  transition: all 0.2s ease-in-out;
  opacity: 0;
  z-index: -100;

  .navbar-link {
    display: flex;
    align-items: center;
    position: relative;
    padding: 5px 10px;
    margin-bottom: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 144.4%;
    color: #fff;
    transition: all 0.4s ease-in-out;

    &:hover {
      color:#c9ac8c;

      &::after {
        width: 90%;
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 10px;
      bottom: 0;
      display: inline-block;
      width: 0px;
      height: 2px;
      background: #c9ac8c;
      transition: all 0.3s ease-in-out;
      z-index: -1;
    }

    .bx-exit {
      margin-left: 5px;
      font-size: 22px;
    }
  }

  @media (max-width: 900px) {
    right: 20px;
  }
`