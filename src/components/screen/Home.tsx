import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import CooniBtn from '@shared/CooniBtn';
import FontAwesome from 'react-fontawesome';
import './Home.css';

export class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    const { getString } = this.props.store.locale;
    return (
      <div className='container'>
        <section className='hero'>
          <header className='header'>
            <h2 style={ this.props.store.isDesktop ? { marginLeft: '35px' } : { marginLeft: 0 }}>
              <img
                className='logo'
                src={require('@assets/icons/logo.png')}
                srcSet={`
                ${require('@assets/icons/logo@2x.png')} 2x,
                ${require('@assets/icons/logo@3x.png')} 3x
                `}
              />
            </h2>
            <nav style={ this.props.store.isDesktop ? { marginRight: '35px' } : { marginRight: 0 }}>
              <li><a href='#company'>소개</a></li>
              <li><a href='#product'>제품</a></li>
              <li><a href='#member'>구성원</a></li>
              <li><a href='#contact'>연락하기</a></li>
            </nav>
          </header>
          <h1>유연한 혁신<br/>두부랩에서 시작합니다.</h1>
          <div className='body'>
            <h3>두부랩은 세상이 필요로 하는 IT서비스를 발굴하는데 그 목적이 있습니다.<br/>시장을 바꿀 잠재력을 가진 아이디어들을 지속적으로 찾아 상용화하는 것이 목표입니다.</h3>
            <a className='btn-contact' href='mailto:dooboolab@gmail.com'>
              <div className='txt'>연락하기</div>
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

        <section className='company'>
          <div className='intro'>
            <div className='left'>
              <p className='title'>두부랩 소개</p>
              <p className='header'>세상이 원하는<br/>서비스를 개발합니다.</p>
              <p className='body'>
                우리는 IT기술 개발 전문가들로 이뤄진 그룹입니다.일상 속 마주하는 불편함들을 사용자 관점에서 찾아내어 철학과 아이디어를 바탕으로 지속적으로 서비스를 개발합니다.
              </p>
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
            <p className='title'>두부랩의 철학</p>
            <p className='header'>두부랩은 이렇게 합니다.</p>
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
                <p className='title'>기획 및 설계</p>
                <p className='content'>정량적, 정성적 데이터에 기반한 사용자 경험 설계</p>
              </div>
              <div className='card' style={ this.props.store.isDesktop ? { marginLeft: '40px' } : null}>
                <img
                  className='icn'
                  src={require('@assets/icons/icn-dev.png')}
                  srcSet={`
                    ${require('@assets/icons/icn-dev.png')} 2x,
                    ${require('@assets/icons/icn-dev.png')} 3x,
                  `}
                />
                <p className='title'>개발</p>
                <p className='content'>꼬임방지, 탄탄한 기반중심 개발 및 확장성 고려.</p>
              </div>
              <div className='card' style={ this.props.store.isDesktop ? { marginLeft: '40px' } : null}>
                <img
                  className='icn'
                  src={require('@assets/icons/icn-frontend.png')}
                  srcSet={`
                    ${require('@assets/icons/icn-frontend.png')} 2x,
                    ${require('@assets/icons/icn-frontend.png')} 3x,
                  `}
                />
                <p className='title'>디자인</p>
                <p className='content'>심미적 안정감은 기본, 단순명료한 언어로 디자인</p>
              </div>
            </div>
          </div>
        </section>

        <section className='product'>
          <div className='content'>
            <p className='title'>두부랩의 작품 01</p>
            <p className='info'>BooKoo</p>
            <p className='description'>
              <img
                className='img-iphone'
                src={require('@assets/images/BooKooRelease.png')}
              />
            </p>
            <div className='btns'>
              <a href='https://play.google.com/store/apps/details?id=com.dooboolab.bookoo'>Android</a>
              <a href='https://itunes.apple.com/us/app/bookoo/id1276062364?l=ko&ls=1&mt=8'>IOS</a>
            </div>
          </div>
          <div className='content'>
            <p className='title'>두부랩의 작품 02</p>
            <p className='info'>COONI</p>
            <p className='description'>
              <img
                className='img-iphone'
                src={require('@assets/images/CooniRelease.png')}
              />
            </p>
            <div className='btns'>
              <a href='https://play.google.com/store/apps/details?id=com.cooni.app'>Android</a>
              <a href='https://itunes.apple.com/us/app/cooni/id1315512929?ls=1&mt=8'>IOS</a>
            </div>
          </div>
        </section>

        <section className='member'>
          <p className='title'>두부랩의 구성원</p>
          <div className='content'>
            <div className='box'>
              <img
                className='pic'
                src={require('@assets/images/hyochan.jpg')}
              />
              <p className='name'>Hyochan Jang</p>
              <p className='position'>Software Engineer</p>
              <p className='introduction'>Korea Univ.<br/>KT R&D Center<br/>MOIN<br/>QNV</p>
              <div className='underline'/>
              <div className='sns'>
                <a href='https://www.linkedin.com/in/%ED%9A%A8%EC%B0%AC-%EC%9E%A5-8723a5108/'>
                  <i aria-hidden='true'>
                  <FontAwesome
                    className='fa-linkedin'
                    name='linkedin'
                  />
                  </i>
                </a>
                {/* <i className='fa fa-facebook' aria-hidden='true'></i>
                <i className='fa fa-pinterest-p' aria-hidden='true'></i> */}
              </div>
            </div>
          </div>
          <button className='btn'>WHO's NEXT?</button>
        </section>

        <section className='contact'>
          <p className='title'>연락하기</p>
          <p className='header'>Who’s next?<br/>자유롭게 대화해요.</p>
          <p className='description'>새로운 구성원을 찾고 있습니다. 두부랩의 작업이 흥미롭고 관심이<br/>있으시다면 언제든 주저말고 자유롭게 이메일 주세요.</p>
          <a className='btn-contact' href='mailto:dooboolab@gmail.com'>
            <div className='txt'>연락하기</div>
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
}

const defaultHome = inject('store')(observer(Home));
export default defaultHome;
