import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './ListItem.css'

class ListItem extends Component {
  render() {
    const { children, className, icon } = this.props
    const classComponent = classNames(styles.ListItem, className)
    
    return (
      <li className={classComponent}>
        {icon && <i className={`icon icon-${icon}`}/>}
        <div className={styles.ListItemText}> {children} </div>
        Teste
        <i className='icon icon-right'/>
      </li>
    )
  }
}

export default ListItem