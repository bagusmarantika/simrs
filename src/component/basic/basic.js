import React from 'react';
import './basic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export const Button = ({text, link, type, types, onClick}) => {
    return(
        <div className='button' onClick={onClick}>
            <a href={link}>
                <input type={types} className={[['btn'], [type]].join(' ')} value={text} />
            </a>
        </div>
    )
}

export const TextLink = ({text, link, onClick}) => {
    return (
        <div className='text-link' >
            <a href={link} onClick={onClick}>
                {text}
            </a>
        </div>
    )
}

export const CircleButton = ({onClick, icon}) => {
    return (
        <div className='circle-button' onClick={onClick}>
            <i className='icons'>
                <FontAwesomeIcon icon={['fas', `${icon}`]}  />
            </i>
        </div>
    )
}

export const InputField = ({placeholder, icon, type}) => {
    return (
        <div className='field'>
            <i className='icons'>
                <FontAwesomeIcon icon={['fas', `${icon}`]}  />
            </i>
            <input type={type} className='fld' placeholder={placeholder}/>
        </div>
    )
}

export const InputText = ({placeholder, icon, type, text}) => {
    return (
        <div className='inputtext'>
            <label for={text}>{text}</label>
            <div className='input-text'>
                <i className='icon-text'>
                    <FontAwesomeIcon icon={['fas', `${icon}`]} />
                </i>
                <input name={text} type={type} className='input-inpt' placeholder={placeholder} />
            </div>
        </div>
    )
}

export const InputSelect = ({name, data, icon}) => {
    return(
        <div className='field pd-r-15'>
            <i className='icons'>
                <FontAwesomeIcon icon={['fas', `${icon}`]}  />
            </i>
            <select name={name}>
                <option value='Pilih User' disabled selected>Pilih User</option>
                {data.map((d, index) => (
                    <option value={d.value} key={index}>{d.value}</option>
                ))}
            </select>
        </div>
    )
}

export const InputTextSelect = ({text, data, icon}) => {
    return (
        <div className='inputtext'>
            <label for={text}>{text}</label>
            <div className='input-text'>
                <i className='icon-text'>
                    <FontAwesomeIcon icon={['fas', `${icon}`]} />
                </i>
                <select name={text}>
                    <option value={`Pilih ${text}`} selected disabled>{`Pilih ${text}`}</option>
                    {data.map((d, index) => (
                        <option value={d.value} key={index}>{d.value}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export const HeadingGroup = ({title, size}) => {
    return (
        <div className='heading-group'>
            <h2 className={size}>
                <span>{title}</span>
            </h2>
        </div>
    )
}

Button.defaultProps = {
    types: 'submit'
}