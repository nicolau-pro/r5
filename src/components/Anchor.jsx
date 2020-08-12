import React, { Component } from 'react';

export class Anchor extends Component {
  render() {
    return <div className='anchor' id={this.props.id}></div>;
  }
}

export default Anchor;
