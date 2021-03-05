import React from 'react'
import { Button, HeadingGroup, InputText, InputTextSelect } from '../basic/basic'

const InputUser = () => {
    const dataGender = [
        {value: 'Laki-laki'},
        {value: 'Perempuan'},
    ];
    const dataAgama = [
        {value: 'Islam'},
        {value: 'Kristen'},
        {value: 'Hindu'},
        {value: 'Budha'},
    ];

    const dataKategori = [
        {value: 'Operator'},
        {value: 'Perawat'},
        {value: 'Dokter'}
    ];

    const dataStatus = [
        {value: 'Active'},
        {value: 'Not Active'},
    ];
    return (
        <div className='container'>
            <HeadingGroup title={'Pendaftaran User'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <form action={''} >
                <div className='row'>
                    <div className='div25'>
                        <InputText placeholder={'330xxxxxxxxx'} text={'ID User'} icon={'user'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Nama User'} text={'Nama User'} icon={'user-circle'} type={'text'} />
                    </div>
                    <div className='div50'>
                        <InputText placeholder={'Ex: Purwokerto, 24 Juli 1992'} text={'Tempat & Tanggal Lahir'} icon={'calendar-alt'} type={'text'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div50'>
                        <InputText placeholder={'Ex: Jl Gunung Muria No 12 RT/RW 01/04'} text={'Alamat User'} icon={'map-marker-alt'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect text={'Jenis Kelamin'} data={dataGender} icon={'male'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect text={'Agama'} data={dataAgama} icon={'address-book'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div25'>
                        <InputText placeholder={'08xxxxxxxxxx'} text={'Telephone User'} icon={'phone-square-alt'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect text={'Kategori User'} data={dataKategori} icon={'id-badge'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect text={'Status User'} data={dataStatus} icon={'info'} />
                    </div>
                </div>
                <Button text={'Submit'} />
                <Button text={'Reset'} types={'reset'}/>
                </form>
            </div>
        </div>
    )
}

export default InputUser
