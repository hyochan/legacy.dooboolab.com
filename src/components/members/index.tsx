import './Members.css';

import MembersGrid from './MembersGrid';
import React from 'react';

export default function Members({ getString }) {
  return (
    <section id="member" className="member">
      <p className="title">{getString('DOOBOOLAB_MEMBER')}</p>
      <MembersGrid />
      <button className="btn">WHO's NEXT?</button>
    </section>
  );
}
