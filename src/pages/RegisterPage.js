import React from 'react'
import Registration from '../component/regis/regis'

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <div className='background-wave-reverse'></div>
            <div className='container-register'>
                <div className='left-section'>
                    <Registration />
                </div>
                <div className='right-section'>
                    <img src={require('../img/undraw_chore_list_iof3.svg').default} alt="image cover" />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
