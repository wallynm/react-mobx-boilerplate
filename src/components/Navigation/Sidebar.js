import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import classNames from 'classnames/bind'

import { ButtonIcon } from 'components/Button';

import styles from './Sidebar.css';
let classBind = classNames.bind(styles)

@inject('AppStore', 'UserStore')
@observer
class Sidebar extends Component {
  render() {
    const { sidebarOpen } = this.props.AppStore;
    const { userName, storeName, storeLogo, storeLink } = this.props.UserStore;
    const classComponent = classBind({
      Sidebar,
      SidebarClosed: !sidebarOpen
    })
    

    return (
      <div className={classComponent}>
        <div className={styles.Header}>
          <div className={styles.UserName}>{userName}</div>
          
          <ButtonIcon clamp outline block icon='external' pos='right'>{storeLink}</ButtonIcon>
        </div>
        <div className="sidebar--content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Sidebar;