'use client'

import { isAdult } from '../../utilities/user';

const NavigationMenu = ({ user = {}, profile = {} })=> {
    const { name, email, phoneNumber } = user ?? {};
    
    return (
      <nav className='navigation-menu'>
        <a href="/">Home</a>
        <a href="/auth/login">Login</a>
        <a href="/auth/signup">Signup</a>
      </nav>
    );
}

export default NavigationMenu;
