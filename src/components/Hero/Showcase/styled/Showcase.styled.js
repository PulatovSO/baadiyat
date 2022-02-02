import styled from 'styled-components'

export const StyledShowcase = styled.div`
  margin-top: 54px;
  position: relative;

  .showcase-carousel {
    overflow: hidden;
  }

  .carousel-image {
    width: 1261px;
  }

  .carousel-wrap {
    display: flex;
    transform: translateX(${({ slide }) => slide}%);
    transition: all 0.4s ease-in-out;
  }

  .showcase-header {
    position: absolute;
    top: 45px;
    left: 86px;
    font-family: Rotterburg;
    font-size: 61px;
    line-height: 67px;
    color: #C9AC8C;
  }

  .carousel-buttons {
    position: absolute;
    top: 245px;
    left: 86px;
    z-index: 10;
  }

  .carousel-btn {
    margin-right: 10px;
    width: 57px;
    height: 3px;
    border: none;
    border-radius: 10px;
  }

  .carousel {
    position: relative;
  }


  .search-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -53px;
    left: 50%;
    padding: 39px 0;
    width: 1114px;
    background: #191919;
    box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
    transform: translateX(-50%);
    border-radius: 15px;
  }

  .search-header {
    font-family: Rotterburg;
    font-size: 31px;
    font-weight: 300;
    line-height: 34px;
    color: #C9AC8C;
    letter-spacing: 3px;
  }

  .search-input {
    margin-top: 13px;
    padding: 15px 27px;
    width: 709px;
    font-size: 16px;
    line-height: 16px;
    background: #404040;
    color: #c9ac8c;
    border-radius: 15px;
    border: none;
    outline-width: 1px !important;
    outline-offset: -3px;
    outline-color: #202020;
  }

  .search-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 15px;
    padding: 15px 50px;
    padding-left: 66px;
    font-size: 16px;
    line-height: 16px;
    color: #3C2710;
    background: #C9AC8C;
    border-radius: 15px;
    border: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #c08546;
    }

    i {
      position: absolute;
      left: 40px;
      font-size: 22px;
    }
  }

`