import React, { Component } from 'react';

export default class StatsElement extends Component {
  render() {
    const { title, description } = this.props;

    return (
      <>
        <li>
          <span>{title}</span>
          <p>{description}</p>
        </li>
      </>
    );
  }
}
