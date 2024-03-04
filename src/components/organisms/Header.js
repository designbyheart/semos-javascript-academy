'use client';

import NavigationMenu from "../molecules/NavigationMenu"

import { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const { user = {}, profile= {} } = this.props ?? {};
    return <div className={'header-container'}>
        <NavigationMenu user={user} profile={profile} />
    </div>
  }
}

export default HeaderComponent;