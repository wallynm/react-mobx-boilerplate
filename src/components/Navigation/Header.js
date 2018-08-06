import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import classNames from 'classnames'
import styles from './Header.css'

import { ButtonIcon } from 'components/Button'


@inject('AppStore')
@observer
class Header extends Component {
  sidebarHandler = () => {
    const { AppStore } = this.props
    AppStore.toggleSidebar()
  }

  render() {
    const { className } = this.props
    const classComponent = classNames(styles.Header, className)
    
    return (
      <div className={classComponent}>
        <ButtonIcon transparent type='secondary' icon='menu' className={'menu--button'} onClick={this.sidebarHandler}/>
      </div>
    )
  }
}

export default Header