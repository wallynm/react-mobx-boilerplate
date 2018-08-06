import React, { Component } from 'react';
import styles from './Logged.css';

import { Header, Sidebar } from 'components/Navigation';
import { ListItemLink } from 'components/List';

class Logged extends Component {
  render() {
    return (
      <div className={styles.ContainerBase}>
        <Sidebar>
          <ul>
            <ListItemLink to="/lobby" icon="list">asdad</ListItemLink>
            <ListItemLink to="/lobby/new" icon="add">Adicionar</ListItemLink>
          </ul>
        </Sidebar>
        
        <div className={styles.ContainerMain}>
          <Header />
          <div className={styles.ContainerCOntent}>
            {React.cloneElement({ ...this.props }.children, { ...this.props })}
          </div>
        </div>
      </div>
    )
  }
}

export default Logged;