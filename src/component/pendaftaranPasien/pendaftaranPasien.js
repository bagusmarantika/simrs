import React, { useState } from 'react'
import '../style.css'
import { Button, HeadingGroup, InputText, InputTextSelect } from '../basic/basic'
import firebase, { database } from '../../config/firebase'
import { useHistory } from 'react-router'

const PendaftaranPasien = ({onClick}) => {
    let history = useHistory();
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

    const [state, setState] = useState({
        id_pasien: '',
        nama_pasien: '',
        ttl_pasien: '',
        alamat_pasien: '',
        jeniskelamin_pasien: '',
        agama_pasien: '',
        telp_pasien: '',
        pekerjaan_pasien: '',
        goldar_pasien: ''
    });

    const handleGetValue = (e) => {
        setState({
            ...state,
            [e.target.id] : e.target.value
        })
    }

    const handleSubmit = () => {
        // console.log('id', state.id_pasien);
        // console.log('goldar', state.goldar_pasien);
        database.ref('pasien/' + state.id_pasien).set({
            id: state.id_pasien,
            nama: state.nama_pasien,
            ttl: state.ttl_pasien,
            alamat: state.alamat_pasien,
            jeniskelamin: state.jeniskelamin_pasien,
            agama: state.agama_pasien,
            telp: state.telp_pasien,
            pekerjaan: state.pekerjaan_pasien,
            goldar: state.goldar_pasien
        });
        history.push("/admin");
    }
    return (
        <div className='container'>
            <HeadingGroup title={'Pendaftaran Pasien'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <form>
                <div className='row'>
                    <div className='div25'>
                        <InputText id={'id_pasien'} onChange={handleGetValue} placeholder={'330xxxxxxxxx'} text={'ID Pasien'} icon={'user'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText id={'nama_pasien'} onChange={handleGetValue} placeholder={'Nama Pasien'} text={'Nama Pasien'} icon={'user-circle'} type={'text'} />
                    </div>
                    <div className='div50'>
                        <InputText id={'ttl_pasien'} onChange={handleGetValue} placeholder={'Ex: Purwokerto, 24 Juli 1992'} text={'Tempat & Tanggal Lahir'} icon={'calendar-alt'} type={'text'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div50'>
                        <InputText id={'alamat_pasien'} onChange={handleGetValue} placeholder={'Ex: Jl Gunung Muria No 12 RT/RW 01/04'} text={'Alamat Pasien'} icon={'map-marker-alt'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect id={'jeniskelamin_pasien'} onChange={handleGetValue} text={'Jenis Kelamin'} data={dataGender} icon={'male'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect id={'agama_pasien'} onChange={handleGetValue} text={'Agama'} data={dataAgama} icon={'address-book'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div25'>
                        <InputText id={'telp_pasien'} onChange={handleGetValue} placeholder={'08xxxxxxxxxx'} text={'Telephone Pasien'} icon={'phone-square-alt'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText id={'pekerjaan_pasien'} onChange={handleGetValue} placeholder={'Pekerjaan'} text={'Pekerjaan Pasien'} icon={'briefcase'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect id={'goldar_pasien'} onChange={handleGetValue} text={'Gol. Darah'} data={dataDarah} icon={'id-badge'} />
                    </div>
                </div>
                <Button text={'Submit'} types={''} onClick={handleSubmit}/>
                <Button text={'Reset'} types={'reset'}/>
                </form>
            </div>
        </div>
    )
}

export default PendaftaranPasien
