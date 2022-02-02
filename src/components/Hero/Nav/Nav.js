import React from 'react';
import { StyledNav } from './styled/Nav.styled';
import { StyledNavbar } from './styled/Navbar.styled';
import { StyledMenu } from './styled/Menu.styled';
import { Link, NavLink } from 'react-router-dom'
import profile from '../../../assets/images/profile.png';
import logo from '../../../assets/images/logo.svg';
import { useState } from 'react/cjs/react.development';

const Nav = () => {
  const [profileToggle, setProfileToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <StyledNav className='nav'>
      <div className="logo-wrap">
        <a href='/'>
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      <nav className='nav-links'>
        <NavLink to="/" className='nav-link'>Bosh sahifa</NavLink>
        <NavLink to="/nasr" className='nav-link'>Nasr</NavLink>
        <NavLink to="/nazm" className='nav-link'>Nazm</NavLink>
        <NavLink to="/maqolalar" className='nav-link'>Maqolalar</NavLink>
        <NavLink to="/form" className='nav-link'>Forum</NavLink>
      </nav>
      <div className='nav-profile'
        onClick={() => setProfileToggle(!profileToggle)}>
        <img className='profile-picture' src={profile} alt="profile picture" />
        <button
          className="nav-button">
            <i 
              className={!profileToggle ? "bx bxs-chevron-down" : "bx bxs-chevron-down navbar-active"}>
            </i>
        </button>
      </div>
      <StyledNavbar className={profileToggle ? 'navbar profile-active' : 'navbar'}>
        <NavLink to="/" className='navbar-link'>Mening sahifam</NavLink>
        <NavLink to="/" className='navbar-link'>Istaklar ro'yxati</NavLink>
        <NavLink to="/" className='navbar-link'>Xaridlar</NavLink>
        <NavLink to="/" className='navbar-link'>Sozlamalar</NavLink>
        <NavLink to="/" className='navbar-link'>Chiqish <i class='bx bx-exit'></i> </NavLink>
      </StyledNavbar>
      <StyledMenu className="menu-wrap">
        <button
          className='menu-btn'
          onClick={() => setMenuToggle(!menuToggle)}>
          <i className='menu bx bx-menu'></i>
        </button>
        <div className={menuToggle ? 'menu-toggle menu-active' : 'menu-toggle'}>
          <Link to="/" className="menu-link">Bosh sahifa</Link>
          <Link to="/" className="menu-link">Nasr</Link>
          <Link to="/" className="menu-link">Nazm</Link>
          <Link to="/" className="menu-link">Maqolalar</Link>
          <Link to="/" className="menu-link">Forum</Link>
        </div>
      </StyledMenu>
    </StyledNav>
  )
}

export default Nav;