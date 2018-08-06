import React, { Component } from 'react'
import classNames from 'classnames/bind'
import styles from './Button.css'
let cx = classNames.bind(styles);



class Button extends Component {
  static defaultProps = {
    size: 'normal',
    type: 'primary'
  }

  render() {
    const { children, className, transparent, outline, type, block, size, clamp, ...props } = this.props
    const classComponent = cx({
      Button,
      ButtonSmall: (size === 'small'),
      ButtonMedium: (size === 'medium'),
      ButtonLarge: (size === 'large'),
      ButtonSecondary: (type === 'secondary'),
      ButtonDanger:  (type === 'danger'),
      ButtonInverted:  (type === 'inverted'),
      ButtonClamp: clamp,
      ButtonBlock: block,      
      ButtonTransparent: transparent,
      ButtonOutline: outline
    })
    
    return (
      <button className={classComponent} {...props}>
        {children}
      </button>
    )
  }
}

export default Button