import React from 'react'
import '../style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Header = ({user}) => {
    return (
        <header>
            <div className='header-left'>
                <h3>
                    <i className='icon-header'>
                        <FontAwesomeIcon icon={['fas', `hospital-symbol`]}  />
                    </i>
                    SIM RSUD Banyumas
                </h3>
            </div>
            <div className='header-right'>
                <a href='#'>
                    <h4> 
                        <i className='icon-header'>
                            <FontAwesomeIcon icon={['fas', `user`]}  />
                        </i>
                        {user} <span style={{fontSize: '10px'}}>&#9660;</span>
                    </h4>
                    <ul>
                        <li>Profile</li>
                        <li>Logout</li>
                    </ul>
                </a>
            </div>
        </header>
    )
}

export default Header
