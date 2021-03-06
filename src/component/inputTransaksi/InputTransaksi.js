import React, { useEffect, useState } from 'react'
import { Button, HeadingGroup, InputText, InputTextSelect } from '../basic/basic';

const InputTransaksi = () => {
    const dataPemeriksaan = [
        {value: 'id-001', nama_pasien: 'bagus', tgl: '21 Februari 2021', obat: [
            {nama: 'Obat A', jumlah: 2, harga: 15000},
            {nama: 'Obat B', jumlah: 1, harga: 30000},
            {nama: 'Obat C', jumlah: 1, harga: 20000}
        ]},
        {value: 'id-002', nama_pasien: 'marant', tgl: '21 Februari 2021', obat: [
            {nama: 'Obat A', jumlah: 1, harga: 15000},
            {nama: 'Obat B', jumlah: 1, harga: 30000},
            {nama: 'Obat C', jumlah: 1, harga: 20000}
        ]},
        {value: 'id-003', nama_pasien: 'fulan', tgl: '22 Februari 2021', obat: [
            {nama: 'Obat A', jumlah: 1, harga: 15000},
            {nama: 'Obat B', jumlah: 1, harga: 30000}
        ]},
    ];

    const [state, setState] = useState({
        id: '',
        nama: '',
        tgl: '',
        obat: []
    })

    const handleChangeData = (e) => {
        const getData = dataPemeriksaan.find(data => {
            return data.value === e.target.value
        })
        setState({
            id: getData.value,
            nama: getData.nama_pasien,
            tgl: getData.tgl,
            obat: getData.obat
        })
    }

   const hitungTotal = () => {
       let total = 0
        for (let i=0; i<state.obat.length; i++){
            total += state.obat[i].jumlah * state.obat[i].harga;
        }
        return total
   }

    useEffect(() =>{
        hitungTotal()
    }, [])
    
    return (
        <div className='container'>
            <HeadingGroup title={'Transaksi'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <form action={''}>
                <div className='row'>
                    <div className='div30'>
                        <InputTextSelect id={'id_pemeriksaan'} onChange={handleChangeData} text={'ID Pemeriksaan'} data={dataPemeriksaan} icon={'clinic-medical'} />
                    </div>
                    <div className='div30'>
                        <InputText placeholder={'Nama Pasien'} text={'Nama Pasien'} icon={'user'} type={'text'} value={state.nama} readOnly={'true'}/>
                    </div>
                    <div className='div30'>
                        <InputText placeholder={'24 Feb 2021'} text={'Tanggal Pemeriksaan'} icon={'calendar-alt'} type={'text'} value={state.tgl} readOnly={'true'}/>
                    </div>
                </div>

                <HeadingGroup title={'Biaya Obat dan Pemeriksaan'} size={'size-24'}/>
                {state.obat.length === 0 ? 
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
                : 
                    state.obat.map((data, index) => {
                        return (
                            <div className='row' key={index}>
                                <div className='div25'>
                                    <InputText placeholder={'Nama Obat'} text={`Nama Obat ${index+1}`} icon={'capsules'} type={'text'} value={data.nama} readOnly={'true'}/>
                                </div>
                                <div className='div25'>
                                    <InputText placeholder={'Jumlah Obat'} text={`Jumlah Obat ${index+1}`} icon={'prescription-bottle-alt'} type={'number'} value={data.jumlah} readOnly={'true'}/>
                                </div>
                                <div className='div25'>
                                    <InputText placeholder={'Harga Obat'} text={`Harga Obat ${index+1}`} icon={'money-bill-alt'} type={'text'} value={`Rp ${data.harga}`} readOnly={'true'}/>
                                </div>
                            </div>
                        )
                    })
                }
                <div className='row'>
                    <div className='div50'>
                        <InputText placeholder={'Rp 100.000'} text={'Total'} icon={'money-check-alt'} type={'text'} readOnly={'true'} value={`Rp ${hitungTotal()}`}/>
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
