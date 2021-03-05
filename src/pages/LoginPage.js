import React from 'react'
import Login from '../component/login/login'

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='background-wave'></div>
            <div className='container-login'>
                <div className='left-section'>
                    <img src={require('../img/undraw_progressive_app_m9ms.svg').default} alt="image cover" />
                </div>
                <div className='right-section'>
                    <Login />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
