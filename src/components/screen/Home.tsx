import './Home.css';

import { Link, Redirect, Route } from 'react-router-dom';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Carousel from 'nuka-carousel';
import CooniBtn from '@shared/CooniBtn';
import FontAwesome from 'react-fontawesome';

export class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    const { getString } = this.props.store.locale;
    return (
      <div className='container'>
        <section id='hero' className='hero'>
          <header className='header'>
            <h2
              style={
                this.props.store.isDesktop
                  ? { marginLeft: '35px' }
                  : { marginLeft: 0 }
              }
            >
              <img
                className='logo'
                src={require('@assets/icons/logo.png')}
                srcSet={`
                  ${require('@assets/icons/logo@2x.png')} 2x,
                  ${require('@assets/icons/logo@3x.png')} 3x
                `}
              />
            </h2>
            <nav
              style={
                this.props.store.isDesktop
                  ? { marginRight: '35px' }
                  : { marginRight: 0 }
              }
            >
              <li>
                <a href='#company'>{getString('INTRO')}</a>
              </li>
              <li>
                <a href='#product'>{getString('PRODUCT')}</a>
              </li>
              <li>
                <a href='#member'>{getString('MEMBER')}</a>
              </li>
              <li>
                <a href='#contact'>{getString('CONTACT')}</a>
              </li>
            </nav>
          </header>
          <h1>
            {getString('FLEXIBLE_INNOVATION')}
            <br />
            {getString('START_WITH_DOOBOOLAB')}
          </h1>
          <div className='body'>
            <h3 style={{ lineHeight: 0.8 }}>{getString('HEADER_TXT')}</h3>
            <a className='btn-contact' href='mailto:dooboolab@gmail.com'>
              <div className='txt'>{getString('CONTACT')}</div>
              <div className='right'>
                <img
                  className='icn-arrowforward'
                  src={require('@assets/icons/icn-arrowforward.png')}
                  srcSet={`
                    ${require('@assets/icons/icn-arrowforward@2x.png')} 2x,
                    ${require('@assets/icons/icn-arrowforward@3x.png')} 3x
                  `}
                />
              </div>
            </a>
            <img
              className='img-wrapper'
              alt='Null'
              src={require('@assets/icons/img-iphone.png')}
              srcSet={`
                ${require('@assets/icons/img-iphone.png')} 2x,
                ${require('@assets/icons/img-iphone.png')} 3x
              `}
            />
          </div>
        </section>

        <section id='company' className='company'>
          <div className='intro'>
            <div className='left'>
              <p className='title'>{getString('ABOUT_DOOBOOLAB')}</p>
              <p className='header'>{getString('ABOUT_DOOBOOLAB_HEADER')}</p>
              <p className='body'>{getString('ABOUT_DOOBOOLAB_BODY')}</p>
            </div>
            <div className='right'>
              <img
                className='img-iphonehand'
                alt='Null'
                src={require('@assets/icons/img-iphonehand.png')}
                srcSet={`
                  ${require('@assets/icons/img-iphonehand.png')} 2x,
                  ${require('@assets/icons/img-iphonehand.png')} 3x,
                `}
              />
            </div>
          </div>
          <div className='philosophy'>
            <p className='title'>{getString('PHILOSOPHY_DOOBOOLAB')}</p>
            <p className='header'>{getString('PHILOSOPHY_DOOBOOLAB_HEADER')}</p>
            <div className='body'>
              <div className='card'>
                <img
                  className='icn'
                  src={require('@assets/icons/icn-ux.png')}
                  srcSet={`
                    ${require('@assets/icons/icn-ux.png')} 2x,
                    ${require('@assets/icons/icn-ux.png')} 3x,
                  `}
                />
                <p className='title'>{getString('PLANNING_AND_DESIGN')}</p>
                <p className='content'>
                  {getString('PLANNING_AND_DESIGN_BODY')}
                </p>
              </div>
              <div
                className='card'
                style={
                  this.props.store.isDesktop ? { marginLeft: '40px' } : null
                }
              >
                <img
                  className='icn'
                  src={require('@assets/icons/icn-dev.png')}
                  srcSet={`
                    ${require('@assets/icons/icn-dev.png')} 2x,
                    ${require('@assets/icons/icn-dev.png')} 3x,
                  `}
                />
                <p className='title'>{getString('DEVELOPMENT')}</p>
                <p className='content'>{getString('DEVELOPMENT_BODY')}</p>
              </div>
              <div
                className='card'
                style={
                  this.props.store.isDesktop ? { marginLeft: '40px' } : null
                }
              >
                <img
                  className='icn'
                  src={require('@assets/icons/icn-frontend.png')}
                  srcSet={`
                    ${require('@assets/icons/icn-frontend.png')} 2x,
                    ${require('@assets/icons/icn-frontend.png')} 3x,
                  `}
                />
                <p className='title'>{getString('DESIGN')}</p>
                <p className='content'>{getString('DESIGN_BODY')}</p>
              </div>
            </div>
          </div>
        </section>

        <section id='product' className='product'>
          <Carousel wrapAround={true} width='97vw'>
            <div className='content'>
              <p className='title'>{getString('DOOBOOLAB_WORK')} 01</p>
              <p className='info'>BooKoo</p>
              <div className='btns'>
                <a href='https://play.google.com/store/apps/details?id=com.dooboolab.bookoo'>
                  Android
                </a>
                <a href='https://itunes.apple.com/us/app/bookoo/id1276062364?l=ko&ls=1&mt=8'>
                  IOS
                </a>
              </div>
              <p className='description'>
                <img
                  className='img-iphone'
                  src={require('@assets/images/BooKooRelease.png')}
                />
              </p>
            </div>
            <div className='content'>
              <p className='title'>{getString('DOOBOOLAB_WORK')} 02</p>
              <p className='info'>COONI</p>
              <div className='btns'>
                <a href='https://play.google.com/store/apps/details?id=com.cooni.app'>
                  Android
                </a>
                <a href='https://itunes.apple.com/us/app/cooni/id1315512929?ls=1&mt=8'>
                  IOS
                </a>
              </div>
              <p className='description'>
                <img
                  className='img-iphone'
                  src={require('@assets/images/CooniRelease.png')}
                />
              </p>
            </div>
            <div className='content'>
              <p className='title'>{getString('DOOBOOLAB_WORK')} 03</p>
              <p className='info'>foodieon</p>
              <div className='btns'>
                <a href='https://play.google.com/store/apps/details?id=com.foodieon.app'>
                  Android
                </a>
                <a href='https://itunes.apple.com/kr/app/foodieon-%ED%91%B8%EB%94%94%EC%98%A8/id1424869463?mt=8'>
                  IOS
                </a>
              </div>
              <p className='description'>
                <img
                  className='img-iphone'
                  src={require('@assets/images/FoodieonRelease.png')}
                />
              </p>
            </div>
          </Carousel>
        </section>

        <section id='member' className='member'>
          <p className='title'>{getString('DOOBOOLAB_MEMBER')}</p>
          {this.renderMembers()}
          <button className='btn'>WHO's NEXT?</button>
        </section>

        <section id='contact' className='contact'>
          <p className='title'>{getString('CONTACT')}</p>
          <p className='header'>
            Who’s next?
            <br />
            {getString('FREE_TALK')}
          </p>
          <p className='description'>{getString('FREE_TALK_DESCRIPTION')}</p>
          <a className='btn-contact' href='mailto:dooboolab@gmail.com'>
            <div className='txt'>{getString('CONTACT')}</div>
            <div className='right'>
              <img
                className='icn'
                src={require('@assets/icons/icn-arrowforward.png')}
                srcSet={`
                  ${require('@assets/icons/icn-arrowforward.png')} 2x,
                  ${require('@assets/icons/icn-arrowforward.png')} 3x,
                `}
              />
            </div>
          </a>
        </section>

        <footer className='footer'>
          <p>©2017 Dooboolab, All Rights Reserved</p>
        </footer>
      </div>
    );
  }

  private renderMembers() {
    return (
      <div className='content'>
        {/* Hyo Chan Jang */}
        <div className='box'>
          <img className='pic' src={require('@assets/images/hyochan.jpg')} />
          <p className='name'>hyochan</p>
          <p className='position'>developer</p>
          {/* <p className='introduction'></p> */}
          <div className='underline' />
          <div className='sns'>
            <a href='https://www.linkedin.com/in/hyochan-jang-8723a5108/'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-linkedin' name='linkedin' />
              </i>
            </a>
            <a href='https://twitter.com/dooboolab'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-twitter' name='twitter' />
              </i>
            </a>
            <a href='https://github.com/dooboolab'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-github' name='github' />
              </i>
            </a>
          </div>
        </div>
        {/* Mars */}
        <div className='box'>
          <img className='pic' src={require('@assets/images/mars.jpg')} />
          <p className='name'>mars</p>
          <p className='position'>developer</p>
          {/* <p className='introduction'></p> */}
          <div className='underline' />
          <div className='sns'>
            <a href='https://www.linkedin.com/in/mars-kim-6633b4187/'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-linkedin' name='linkedin' />
              </i>
            </a>
            <a href='https://github.com/marsinearth'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-github' name='github' />
              </i>
            </a>
          </div>
        </div>
        {/* Geoseong */}
        <div className='box'>
          <img className='pic' src={require('@assets/images/geoseong.jpg')} />
          <p className='name'>geoseong</p>
          <p className='position'>developer</p>
          {/* <p className='introduction'></p> */}
          <div className='underline' />
          <div className='sns'>
            <a href='https://www.linkedin.com/in/tae-seong-park-0699b348'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-linkedin' name='linkedin' />
              </i>
            </a>
            <a href='https://github.com/geoseong'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-github' name='github' />
              </i>
            </a>
          </div>
        </div>
        {/* Yong Pil */}
        <div className='box'>
          <img className='pic' src={require('@assets/images/yongpil.jpg')} />
          <p className='name'>yongpil</p>
          <p className='position'>developer</p>
          {/* <p className='introduction'></p> */}
          <div className='underline' />
          <div className='sns'>
            <a href='https://www.linkedin.com/in/yongpil-moon-57877b147/'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-linkedin' name='linkedin' />
              </i>
            </a>
            <a href='https://github.com/YongPilMoon'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-github' name='github' />
              </i>
            </a>
          </div>
        </div>
        {/* Dong Kyun */}
        <div className='box'>
          <img className='pic' src={require('@assets/images/dongkyun.jpg')} />
          <p className='name'>gordon</p>
          <p className='position'>developer</p>
          {/* <p className='introduction'></p> */}
          <div className='underline' />
          <div className='sns'>
            <a href='https://www.linkedin.com/in/dong-kyun-ko-5a2819171/'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-linkedin' name='linkedin' />
              </i>
            </a>
            <a href='https://github.com/godon019'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-github' name='github' />
              </i>
            </a>
          </div>
        </div>
        {/* Jong Taek */}
        <div className='box'>
          <img className='pic' src={require('@assets/images/jongtaek.png')} />
          <p className='name'>jongtaek</p>
          <p className='position'>developer</p>
          {/* <p className='introduction'></p> */}
          <div className='underline' />
          <div className='sns'>
            <a href='https://www.linkedin.com/in/jongtaek-choi-259796117/'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-linkedin' name='linkedin' />
              </i>
            </a>
            <a href='https://github.com/jongtaekChoi'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-github' name='github' />
              </i>
            </a>
          </div>
        </div>
        {/* youngsoo */}
        <div className='box'>
          <img className='pic' src={require('@assets/images/youngsoo.png')} />
          <p className='name'>youngsoo</p>
          <p className='position'>developer</p>
          {/* <p className='introduction'></p> */}
          <div className='underline' />
          <div className='sns'>
            <a href='https://www.linkedin.com/in/youngsu-han/'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-linkedin' name='linkedin' />
              </i>
            </a>
            <a href='https://twitter.com/pEy69B9Aest8VRT'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-twitter' name='twitter' />
              </i>
            </a>
            <a href='https://github.com/heyman333'>
              <i aria-hidden='true'>
                <FontAwesome className='fa-github' name='github' />
              </i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const defaultHome = inject('store')(observer(Home));
export default defaultHome;
