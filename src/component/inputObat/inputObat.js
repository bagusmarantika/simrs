import React from 'react'
import { Button, HeadingGroup, InputText, InputTextSelect } from '../basic/basic';

const InputObat = () => {
    const dataKategoriObat = [
        {value: 'Capsule'},
        {value: 'Injeksi'},
        {value: 'Kronis'},
        {value: 'Salep'},
        {value: 'Sirup'},
        {value: 'Tablet'}
    ]

    return (
        <div className='container'>
            <HeadingGroup title={'Input Obat'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <form action={''}>
                <div className='row'>
                    <div className='div30'>
                        <InputText placeholder={'Ex: OBT-001'} text={'ID Obat'} icon={'tags'} type={'text'} />
                    </div>
                    <div className='div30'>
                        <InputText placeholder={'Nama Obat'} text={'Nama Obat'} icon={'pills'} type={'text'} />
                    </div>
                    <div className='div30'>
                        <InputTextSelect text={'Kategori Obat'} data={dataKategoriObat} icon={'tablets'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div50'>
                        <InputText placeholder={'Ex: 24 Juli 2022'} text={'Expired Date'} icon={'calendar-alt'} type={'date'} />
                    </div>
                    <div className='div50'>
                        <InputText placeholder={'Keterangan Obat'} text={'Keterangan'} icon={'info-circle'} type={'text'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div25'>
                        <InputText placeholder={'Rp 20.000'} text={'Harga Obat'} icon={'tag'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Ex: 220'} text={'Jumlah/Stock'} icon={'cubes'} type={'text'} />
                    </div>
                </div>
                <Button text={'Submit'} />
                <Button text={'Reset'} types={'reset'}/>
                </form>
            </div>
        </div>
    )
}

export default InputObat
