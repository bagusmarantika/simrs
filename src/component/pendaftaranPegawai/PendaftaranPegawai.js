import React from 'react'
import { Button, HeadingGroup, InputText, InputTextSelect } from '../basic/basic';

const PendaftaranPegawai = () => {
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
    const dataJabatan = [
        {value: 'Perawat'},
        {value: 'Operator'},
        {value: 'Petugas'},
        {value: 'Kepala Bidang'},
        {value: 'Dokter'},
    ];
    return (
        <div className='container'>
            <HeadingGroup title={'Input Pegawai'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <form>
                <div className='row'>
                    <div className='div25'>
                        <InputText id={'id_pegawai'} onChange={''} placeholder={'330xxxxxxxxx'} text={'ID Pegawai'} icon={'user'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText id={'nama_pegawai'} onChange={''} placeholder={'Nama Pegawai'} text={'Nama Pegawai'} icon={'user-circle'} type={'text'} />
                    </div>
                    <div className='div50'>
                        <InputText id={'ttl_pegawai'} onChange={''} placeholder={'Ex: Purwokerto, 24 Juli 1992'} text={'Tempat & Tanggal Lahir'} icon={'calendar-alt'} type={'text'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div50'>
                        <InputText id={'alamat_pegawai'} onChange={''} placeholder={'Ex: Jl Gunung Muria No 12 RT/RW 01/04'} text={'Alamat Pegawai'} icon={'map-marker-alt'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect id={'jeniskelamin_pegawai'} onChange={''} text={'Jenis Kelamin'} data={dataGender} icon={'male'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect id={'agama_pegawai'} onChange={''} text={'Agama'} data={dataAgama} icon={'address-book'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div30'>
                        <InputText id={'telp_pegawai'} onChange={''} placeholder={'08xxxxxxxxxx'} text={'Telephone Pegawai'} icon={'phone-square-alt'} type={'text'} />
                    </div>
                    <div className='div30'>
                        <InputTextSelect id={'jabatan_pegawai'} onChange={''} text={'Jabatan'} data={dataJabatan} icon={'id-badge'} />
                    </div>
                </div>
                <Button text={'Submit'} types={''} onClick={''}/>
                <Button text={'Reset'} types={'reset'}/>
                </form>
            </div>
        </div>
    )
}

export default PendaftaranPegawai
