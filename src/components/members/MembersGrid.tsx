import './MembersGrid.css';

import React, { FC } from 'react';

import FontAwesome from 'react-fontawesome';
import Geoseong from '@assets/images/geoseong.jpg';
import Gordon from '@assets/images/dongkyun.jpg';
import Huy from '@assets/images/huy.jpg';
import Hyochan from '@assets/images/hyochan.jpg';
import Jeff from '@assets/images/jeff.png';
import Jongtaek from '@assets/images/jongtaek.png';
import Mars from '@assets/images/mars.jpg';
import MemberData from './membersInfo.json';
import Minseok from '@assets/images/minseok.png';
import Yongpil from '@assets/images/yongpil.jpg';
import Youngsoo from '@assets/images/youngsoo.png';

const images = {
  hyochan: Hyochan,
  mars: Mars,
  geoseong: Geoseong,
  yongpil: Yongpil,
  gordon: Gordon,
  jongtaek: Jongtaek,
  youngsoo: Youngsoo,
  huy: Huy,
  minseok: Minseok,
  jeff: Jeff,
};

interface Member {
  name: string;
  position: string;
  sns: {
    [name: string]: string;
  };
}

const MemberBox: FC<Member> = ({ name, position, sns }) => (
  <div className="box">
    <img className="pic" src={images[name]} />
    <p className="name">{name}</p>
    <p className="position">{position}</p>
    {/* <p className='introduction'></p> */}
    <div className="underline" />
    <div className="sns">
      {Object.entries(sns).map(([key, value]) => (
        <a key={key} href={value}>
          <i aria-hidden="true">
            <FontAwesome className={`fa-${key}`} name={key} />
          </i>
        </a>
      ))}
    </div>
  </div>
);

export default function MembersGrid() {
  return (
    <div className="content">
      {MemberData.map((member: Member) => (
        <MemberBox key={member.name} {...member} />
      ))}
    </div>
  );
}
