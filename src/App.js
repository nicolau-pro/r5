import React, { Component } from 'react';
import './styles/App.css';

// Modules:
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import Sprite from './components/Sprite';

// JSON:
import Pojects from './JSON/content/Projects';
import Awards from './JSON/content/Awards';

class App extends Component {
  componentDidMount() {
    console.log('Loaded');
  }

  render() {
    let spritesFlatFallback = 'https://www.r5.ro/2020/Sprites.jpg';
    let spritesTransparent = 'https://www.r5.ro/2020/SpritesTransparent.png';

    return (
      <>
        <Header sprites={spritesFlatFallback} />
        <main className='container'>
          <section className='container projects' id='projects'>
            <div className='row section-head'>
              <h2>
                <Sprite
                  sprites={{
                    src: spritesTransparent,
                    x: 4,
                    y: 4,
                  }}
                  pos={{ x: 3, y: 3 }}
                  alt={'★'}
                  width='1'
                  height='1'></Sprite>
                <span>Projects</span>
                <Sprite
                  sprites={{
                    src: spritesTransparent,
                    x: 4,
                    y: 4,
                  }}
                  pos={{ x: 3, y: 3 }}
                  alt={'★'}
                  width='1'
                  height='1'></Sprite>
              </h2>
            </div>

            {Pojects.list.map((item, index) => (
              <>
                <div className={'row' + (index > 0 ? ' project-head' : '')}>
                  <div className='col'>
                    <h3>
                      {item.title}
                      <span className='year'>{item.year}</span>
                    </h3>
                    <h4>{item.subtitle}</h4>
                    <hr />
                  </div>
                </div>
                <div className='row'>
                  <div className='col'></div>
                  {item.splash ? (
                    <div className='col double'>
                      {/* <Image
                          amp={true}
                          src_fallback={item.splash.image}
                          alt={item.splash.alt}
                          width={item.splash.width}
                          height={item.splash.height}></Image> */}
                      <a className='img' href={item.splash.link} target='_blank' rel='noopener noreferrer'>
                        <Sprite
                          sprites={{
                            src: spritesFlatFallback,
                            x: item.splash.spriteScale.x,
                            y: item.splash.spriteScale.y,
                          }}
                          pos={item.splash.sprite}
                          alt={item.splash.alt}
                          width='1'
                          height='1'></Sprite>
                      </a>
                    </div>
                  ) : (
                    <></>
                  )}
                  <div className={'col' + (item.splash ? ' triple' : ' x5')}>
                    {item.details.map((p, detailsIndex) => (
                      <p key={detailsIndex}>{p}</p>
                    ))}
                    {item.ctas ? (
                      <>
                        {item.ctas.map((a, ctasIndex) => (
                          <a key={ctasIndex} className='cta bordered' href={a.link} target='_blank' rel='noopener noreferrer'>
                            <span class='material-icons' aria-hidden='true'>
                              {a.icon}
                            </span>
                            {a.text}
                          </a>
                        ))}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className='col'></div>
                </div>

                {item.items ? (
                  <div className='row'>
                    <div className='col'></div>
                    <div className='col x5 project-items'>
                      {item.items.map((img, itemIndex) => (
                        <a className='img' key={itemIndex} href={img.link} target='_blank' rel='noopener noreferrer' aria-label={img.alt}>
                          <Sprite
                            sprites={{
                              src: spritesFlatFallback,
                              x: img.spriteScale.x,
                              y: img.spriteScale.y,
                            }}
                            pos={img.sprite}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}></Sprite>
                        </a>
                      ))}
                    </div>
                    <div className='col'></div>
                  </div>
                ) : (
                  <></>
                )}
              </>
            ))}
          </section>

          <section className='container awards' id='awards'>
            <div className='row section-head'>
              <h2>
                <Sprite
                  sprites={{
                    src: spritesTransparent,
                    x: 4,
                    y: 4,
                  }}
                  pos={{ x: 1, y: 3 }}
                  alt={'🙟'}
                  width='1'
                  height='1'></Sprite>
                <span>Awards</span>
                <Sprite
                  sprites={{
                    src: spritesTransparent,
                    x: 4,
                    y: 4,
                  }}
                  pos={{ x: 1, y: 3 }}
                  alt={'🙝'}
                  width='1'
                  height='1'></Sprite>
              </h2>
            </div>
            {Awards.list.map((item, index) => (
              <div className={'row awards-content ' + item.class}>
                <div className='col awards-logo'>
                  <a href={item.logo.link} target='_blank' rel='noopener noreferrer' aria-label='item.event'>
                    {/* <Image amp={true} src_fallback={item.logo.thumb} alt={index} width='1' height='1'></Image> */}
                    <Sprite
                      sprites={{
                        src: spritesTransparent,
                        x: item.logo.spriteScale.x,
                        y: item.logo.spriteScale.y,
                      }}
                      pos={item.logo.sprite}
                      alt={item.event + ' ' + item.year + ', ' + item.result}
                      width='1'
                      height='1'></Sprite>
                  </a>
                </div>
                <div className='col triple awards-text'>
                  <h3>
                    {item.event}
                    <span className='year'>{item.year}</span>
                  </h3>
                  <h4>{item.award}</h4>
                  <h5>
                    {item.client} - {item.campaign}
                  </h5>
                  <hr />
                  <p className='result'>{item.result}</p>
                </div>
                <div className='col awards-video'>
                  <a href={item.video.link} target='_blank' rel='noopener noreferrer' aria-label='item.event'>
                    {/* <Image amp={true} src_fallback={item.video.thumb} alt={item.award + ' for ' + item.client + ' ' + item.campaign} width='1' height='1'></Image> */}
                    <Sprite
                      sprites={{
                        src: spritesFlatFallback,
                        x: item.video.spriteScale.x,
                        y: item.video.spriteScale.y,
                      }}
                      pos={item.video.sprite}
                      alt={item.award + ' for ' + item.client + ' ' + item.campaign}
                      width='1'
                      height='1'></Sprite>
                  </a>
                </div>
              </div>
            ))}
          </section>
        </main>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </>
    );
  }
}

export default App;
