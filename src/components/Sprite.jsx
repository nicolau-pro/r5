import React, { Component } from 'react';

export class Sprite extends Component {
  render() {
    let transparent = 'https://www.r5.ro/2020/Square.png';
    let alt = this.props.alt;
    let width = '110';
    let height = '110';
    let sprites = this.props.sprites;
    let pos = this.props.pos;

    let style = {
      backgroundImage: 'url(' + sprites.src + ')',
      backgroundPosition:
        pos.x * (100 / (sprites.x - 1)) +
        '% ' +
        pos.y * (100 / (sprites.y - 1)) +
        '%',
      backgroundSize: sprites.x * 100 + '% ' + sprites.y * 100 + '%',
      backgroundRepeat: 'no-repeat',
    };

    return (
      <amp-img
        style={style}
        alt={alt}
        src={transparent}
        width={width}
        height={height}
        layout="responsive"
        srcset={transparent}>
        <noscript>
          <img
            style={style}
            loading="lazy"
            decoding="async"
            alt={alt}
            width={width}
            height={height}
            src={transparent}
          />
        </noscript>
      </amp-img>
    );
  }
}

export default Sprite;
