import React from 'react'
import { Button, HeadingGroup, InputField, InputSelect, InputText, InputTextSelect } from '../basic/basic'

const Registration = () => {
    const data = [
        {value: 'Operator'},
        {value: 'Dokter'},
        {value: 'Admin'},
    ]
    return (
        <div className='regis-section'>
            <HeadingGroup title={"Registration new User"} size={"size-48"}/>
            <form>
                <InputField placeholder={'Username'} type={'text'} icon={'user'} />
                <InputField placeholder={'Email'} type={'email'} icon={'envelope'} />
                <InputField placeholder={'Password'} type={'password'} icon={'lock'} />
                <InputSelect name={'user'} data={data} icon={'user-cog'} />
                <Button text={'Register'} type={''} />
                <Button text={'Login'} type={'edge'} link={'/'} types={''}/>
            </form>
        </div>
    )
}

export default Registration
