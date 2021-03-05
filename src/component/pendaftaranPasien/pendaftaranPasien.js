import React from 'react'
import '../style.css'
import { Button, HeadingGroup, InputText, InputTextSelect } from '../basic/basic'

const PendaftaranPasien = ({onClick}) => {
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

    const dataDarah = [
        {value: 'A'},
        {value: 'B'},
        {value: 'AB'},
        {value: 'O'},
    ];
    return (
        <div className='container'>
            <HeadingGroup title={'Pendaftaran Pasien'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <form action={''} >
                <div className='row'>
                    <div className='div25'>
                        <InputText placeholder={'330xxxxxxxxx'} text={'ID Pasien'} icon={'user'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Nama Pasien'} text={'Nama Pasien'} icon={'user-circle'} type={'text'} />
                    </div>
                    <div className='div50'>
                        <InputText placeholder={'Ex: Purwokerto, 24 Juli 1992'} text={'Tempat & Tanggal Lahir'} icon={'calendar-alt'} type={'text'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div50'>
                        <InputText placeholder={'Ex: Jl Gunung Muria No 12 RT/RW 01/04'} text={'Alamat Pasien'} icon={'map-marker-alt'} type={'text'} />
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
                        <InputText placeholder={'08xxxxxxxxxx'} text={'Telephone Pasien'} icon={'phone-square-alt'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Pekerjaan'} text={'Pekerjaan Pasien'} icon={'briefcase'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect text={'Gol. Darah'} data={dataDarah} icon={'id-badge'} />
                    </div>
                </div>
                <Button text={'Submit'} />
                <Button text={'Reset'} types={'reset'}/>
                </form>
            </div>
        </div>
    )
}

export default PendaftaranPasien
