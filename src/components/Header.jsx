import React, { Component } from 'react';
import Sprite from './Sprite';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col portrait'>
              <a className='img' href={'https://r5.ro'}>
                <Sprite
                  sprites={{
                    src: this.props.sprites,
                    x: 2,
                    y: 4,
                  }}
                  pos={{ x: 1, y: 1 }}
                  alt={'Radu Nicolau'}
                  width='1'
                  height='1'></Sprite>
              </a>
            </div>
            <div className='col text'>
              <h1>Radu Nicolau</h1>
              <h2>Welcome to my personal portfolio.</h2>
              <nav>
                <ul>
                  <li>
                    <a className='cta' href='#projects' aria-label='my major projects'>
                      <span className='material-icons' aria-hidden='true'>
                        grade
                      </span>
                      Major projects
                    </a>
                  </li>
                  <li>
                    <a className='cta' href='#awards' aria-label='my award winning campaigns'>
                      <span className='material-icons' aria-hidden='true'>
                        emoji_events
                      </span>
                      Award winning campaigns
                    </a>
                  </li>
                  <li>
                    <a
                      className='cta'
                      href='https://www.linkedin.com/in/radu-nicolau/'
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='my LinkedIn page, including my latest CV'>
                      <span className='material-icons' aria-hidden='true'>
                        contact_page
                      </span>
                      LinkedIn and CV
                    </a>
                  </li>
                  <li>
                    <a className='cta' href='tel:+447576969006' aria-label='call me on 07576 969 006'>
                      <span className='material-icons' aria-hidden='true'>
                        call
                      </span>
                      +44 7576 969 006
                    </a>
                  </li>
                  <li>
                    <a className='cta' href='mailto:radu.alex.nicolau@gmail.com' aria-label='email me at radu.alex.nicolau@gmail.com'>
                      <span className='material-icons' aria-hidden='true'>
                        email
                      </span>
                      radu.alex.nicolau@gmail.com
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
