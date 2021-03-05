import React from 'react'
import { Button, HeadingGroup, InputText, InputTextSelect } from '../basic/basic';

const InputTransaksi = () => {
    const dataPemeriksaan = [
        {value: 'id-001'},
        {value: 'id-002'},
        {value: 'id-003'},
    ];
    return (
        <div className='container'>
            <HeadingGroup title={'Transaksi'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <form action={''}>
                <div className='row'>
                    <div className='div25'>
                        <InputTextSelect text={'ID Pemeriksaan'} data={dataPemeriksaan} icon={'clinic-medical'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Nama Pasien'} text={'Nama Pasien'} icon={'user'} type={'text'} />
                    </div>
                    <div className='div30'>
                        <InputText placeholder={'24 Feb 2021'} text={'Tanggal Pemeriksaan'} icon={'calendar-alt'} type={'text'} />
                    </div>
                </div>

                <HeadingGroup title={'Biaya Obat dan Pemeriksaan'} size={'size-24'}/>
                <div className='row'>
                    <div className='div25'>
                        <InputText placeholder={'Nama Obat'} text={'Nama Obat'} icon={'capsules'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Jumlah Obat'} text={'Jumlah Obat'} icon={'prescription-bottle-alt'} type={'number'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Harga Obat'} text={'Harga Obat'} icon={'money-bill-alt'} type={'text'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div50'>
                        <InputText placeholder={'Rp 100.000'} text={'Total'} icon={'money-check-alt'} type={'text'} />
                    </div>
                </div>
                <Button text={'Submit'} />
                <Button text={'Reset'} types={'reset'}/>
                </form>
            </div>
        </div>
    )
}

export default InputTransaksi
