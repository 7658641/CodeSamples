import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo_1.jpg'

export default function Header(){
    return( 
        <div className='header-container' > 
            <div className='header-wrap'>
                <div className='header-left-wrap'>
                <Link style={{display: 'flex', alignItems: 'center'}} to='/'>
                    <img src={logo} 
                    alt="logo, 로고"
                    style={{ width: '50px', height: '50px'}} 
                    />
                </Link>
                <ul>
                    <li>
                        <Link className='header-nav-item' to='/movie'>
                        영화
                        </Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/tv'>
                        TV 프로그램
                        </Link>
                    </li>
                    <li>
                        <Link className='header-nav-item' to='/person'>
                        인물
                        </Link>
                    </li>

    
                </ul>
                </div>
            </div>
        </div>
    );
}
