import React, { useState } from 'react'
import { Button, HeadingGroup, InputField, InputSelect, InputText, InputTextSelect } from '../basic/basic'
import firebase from '../../config/firebase'
import { useHistory } from 'react-router'

const Registration = () => {
    let history = useHistory();

    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        category: ''
    })

    let handleGetValue = (event) => {
        setState({
            ...state,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = () => {
        firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
            .then((user) => {
                console.log('success: ',user)
                history.push("/");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
        });
    }
    const data = [
        {value: 'Operator'},
        {value: 'Dokter'},
        {value: 'Admin'},
    ]
    return (
        <div className='regis-section'>
            <HeadingGroup title={"Registration new User"} size={"size-48"}/>
            <form>
                <InputField id={'username'} onChange={handleGetValue} placeholder={'Username'} type={'text'} icon={'user'} />
                <InputField id={'email'} onChange={handleGetValue} placeholder={'Email'} type={'email'} icon={'envelope'} />
                <InputField id={'password'} onChange={handleGetValue} placeholder={'Password'} type={'password'} icon={'lock'} />
                <InputSelect id={'category'} onChange={handleGetValue} name={'user'} data={data} icon={'user-cog'} />
                
                <Button text={'Register'} onClick={handleSubmit} type={''} types={''}/>
                <Button text={'Login'} type={'edge'} link={'/'} types={''}/>
            </form>
        </div>
    )
}

export default Registration
