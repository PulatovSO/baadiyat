import styled from 'styled-components'

export const StyledMenu = styled.div`
  display: none;

  .menu-btn {
    background: none;
    border: none;
  }

  .menu {
    color: #fff;
    font-size: 32px;
  }

  .menu-toggle {
    padding: 20px;
    position: absolute;
    top: 75px;
    right: -30px;
    display: flex;
    flex-direction: column;
    width: 250px;
    background: #303030;
    border-radius: 10px;
    border: 2px solid #303030;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    z-index: -100;

    .menu-link {
      padding-bottom: 10px;
      margin-bottom: 20px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 300;
      font-size: 16px;
      line-height: 144.4%;
      color: #fff;

      &:hover {
        color:#c9ac8c;
        border-bottom: 2px solid #c9ac8c;
      }
    }
  }

  @media (max-width: 900px) {
    display: block;
  }
`