import React from 'react'
import { Button, HeadingGroup, InputField } from '../basic/basic'
import '../style.css'

const Login = () => {
    return (
        <div className='login-section'>
            <HeadingGroup title={"SIM RSUD Banyumas"} size={"size-48"}/>
            <form>
                <InputField placeholder={'Username'} type={'text'} icon={'user'} />
                <InputField placeholder={'Password'} type={'password'} icon={'lock'} />
                <Button text={'Login'} type={''} link={''} />
                <Button text={'Register'} type={'edge'} link={'/register'} types={''}/>
            </form>
        </div>
    )
}

export default Login
