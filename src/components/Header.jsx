import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import "../css/header.css"
import { faBars,faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const [sidebar, setSideBar] = useState(false);
  return (
    <div className='navbar'>
      <div className='section1'>
      <h3>dribble</h3>
<div className={`innersection ${sidebar?"active":""} `} >
        <a href="">Inspiration</a>
        <a href="">Find Work</a>
        <a href="">Learn Design</a>
        <a href="">Go Pro</a>
        <a href="">Hire Designers</a>
</div>
        <div className='mobile' onClick={()=>setSideBar(prev => prev =!prev)}>
        <FontAwesomeIcon icon={sidebar?faX:faBars} className="FontAwesomeIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
