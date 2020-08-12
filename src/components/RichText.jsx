import React, { Component } from 'react';

export class RichText extends Component {
  render() {
    return (
      <div
        className={this.props.classes ? this.props.classes.join(' ') : undefined}
        dangerouslySetInnerHTML={{ __html: this.props.text }}
      />
    );
  }
}

export default RichText;
