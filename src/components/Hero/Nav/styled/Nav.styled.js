import styled from 'styled-components'

export const StyledNav = styled.div`
  padding: 0 66px 0 56px;
  background: #191919;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #303030;

  .nav-links {
    display: flex;
    
    .nav-link {
      padding: 28px 0;
      margin-left: 43px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 300;
      font-size: 16px;
      line-height: 144.4%;
      color: #fff;
      border-bottom: 2px solid #191919;
      transition: all 0.2s ease-in-out;

      &:hover {
        color:#c9ac8c;
        border-bottom: 2px solid #c9ac8c;
      }
    }   
  }

  .nav-profile {
    display: flex;
    align-items: center;
  }

  .profile-picture {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  .nav-button {
    background: none;
    border: none;

    i {
      transition: all 0.2s ease-in-out;
    }
  }

  .bxs-chevron-down {
    margin-left: 5px;
    font-size: 18px;
    color: #fff;
  }

  .menu {
    color: #fff;
  }

  @media (max-width: 900px) {
      padding: 18px 20px;

    .nav-links {
      display: none;
    }

    .nav-profile {
      display: none;
    }

    .navbar {
      display: none;
    }
  }
`