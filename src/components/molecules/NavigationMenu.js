'use client'

import { isAdult } from '../../utilities/user';

const NavigationMenu = ({ user = {}, profile = {} })=> {
    const { name, email, phoneNumber } = user ?? {};
    
    return (
      <nav>
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        {user && (
          <p>
            {name} {email} {phoneNumber}
          </p>
        )}
        {isAdult(profile?.birthYear) && <p>Adult is here: </p>}
        {console.log('year', profile)}
        {profile?.birthYear && <p>{2024 - profile?.birthYear}</p>}
      </nav>
    );
}

export default NavigationMenu;
