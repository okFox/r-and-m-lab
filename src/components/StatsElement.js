import React, { Component } from 'react';
import styles from './Character.css';

export default class StatsElement extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <div className={styles.statItem}>
          <span>{title}</span>
          <p>{description}</p>
        </div>
      </>
    );
  }
}
