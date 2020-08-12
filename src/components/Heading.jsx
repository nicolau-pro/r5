import React, { Component } from 'react';

export class Heading extends Component {
  render() {
    // Inputs:
    let text = this.props.text;
    let size = parseInt(this.props.size);
    let hero = this.props.hero;
    let color = this.props.color;
    let pseudo = this.props.pseudo;
    let headingTmeline = this.props.headingTmeline;
    let pseudoSize = parseInt(this.props.pseudoSize); // Inputs

    let className;
    if (hero || color || pseudo || pseudoSize || headingTmeline) {
      className = hero ? 'hero' : '';
      className += color ? ' color-' + color : '';
      className += pseudoSize ? ' h' + pseudoSize : '';
      className += headingTmeline ? ' heading-timeline' : '';
    }

    if (pseudo) {
      return <p className={className + (pseudoSize ? '' : ' h' + size)}>{text}</p>;
    } else {
      switch (size) {
        case 1:
          return <h1 className={className}>{text}</h1>;
        case 2:
          return <h2 className={className}>{text}</h2>;
        case 3:
          return <h3 className={className}>{text}</h3>;
        case 4:
          return <h4 className={className}>{text}</h4>;
        case 5:
          return <h5 className={className}>{text}</h5>;
        case 6:
          return <h6 className={className}>{text}</h6>;
        default:
          return <p>{text}</p>;
      }
    }
  }
}

export default Heading;
