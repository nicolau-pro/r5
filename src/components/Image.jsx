import React, { Component } from 'react';

export class Image extends Component {
  render() {
    let alt = this.props.alt;
    let width = this.props.width;
    let height = this.props.height;
    let imagePathRoot = this.props.imagePathRoot ? this.props.imagePathRoot : '';
    let src = {
      fallback: imagePathRoot + this.props.src_fallback,
      xs: this.props.src_xs ? imagePathRoot + this.props.src_xs : undefined,
      sm: this.props.src_sm ? imagePathRoot + this.props.src_sm : undefined,
      md: this.props.src_md ? imagePathRoot + this.props.src_md : undefined,
      lg: this.props.src_lg ? imagePathRoot + this.props.src_lg : undefined,
      xl: this.props.src_xl ? imagePathRoot + this.props.src_xl : undefined,
      hd: this.props.src_hd ? imagePathRoot + this.props.src_hd : undefined,
    };

    let srcset = src.fallback;

    if (src.hd || src.xl || src.lg || src.md || src.sm || src.xs) {
      srcset =
        (src.hd ? src.hd + ' 1920w,' : '') +
        (src.xl ? src.xl + ' 1200w,' : '') +
        (src.lg ? src.lg + ' 992w,' : '') +
        (src.md ? src.md + ' 768w,' : '') +
        (src.sm ? src.sm + ' 544w,' : '') +
        (src.xs ? src.xs + ' 320w' : '');
    }

    return (
      <>
        {this.props.amp ? (
          <amp-img alt={alt} src={src.fallback} width={width} height={height} layout='responsive' srcset={srcset}>
            <noscript>
              <img loading='lazy' decoding='async' alt={alt} width={width} height={height} src={src.fallback} />
            </noscript>
          </amp-img>
        ) : (
          <picture>
            {srcset !== src.fallback ? <source srcset={srcset} sizes='100vw' /> : <></>}
            <img loading='lazy' decoding='async' alt={alt} src={src.fallback} />
          </picture>
        )}
      </>
    );
  }
}

export default Image;
