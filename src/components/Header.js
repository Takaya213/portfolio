import React from 'react'
import { Link } from 'react-router-dom'
import useScrollPosition from '../hooks/useScrollPosition'

import Logo from '../assets/images/nicole.svg';
import FwdArrow from '../assets/images/arrow-forward.svg';

export const Header = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const scrollPosition = useScrollPosition()
  return (
    <header className={classNames( scrollPosition > 0 ? 'slim' : '' )}r>
      <div>
        <Link to='/'><img src={Logo} alt='Nicole.' /></Link>
        <nav>
            <ul>
                <li><Link activeClass="active" to='/'>About</Link></li>
                <li><Link activeClass="active" to='work'>Work</Link></li>
                <li><Link activeClass="active" to='experienc'>Experience</Link></li>
                <li><Link activeClass="active" to='skills'>Skills</Link></li>
                <li><Link activeClass="active" to='education'>Education</Link></li>
                <li><Link activeClass="active" to='journal'>Journal</Link></li>
            </ul>
        </nav>
        <Link to='/' className='button button-arrow'>
          <span>Let's talk</span>
          <img src={FwdArrow} alt='Forward facing arrow'/>
        </Link>
      </div>
    </header>
  )
}

export default Header