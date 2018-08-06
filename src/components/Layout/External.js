import React, { Component } from 'react';
 
class External extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default External;