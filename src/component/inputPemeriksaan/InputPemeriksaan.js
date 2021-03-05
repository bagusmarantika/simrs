import React, { useEffect, useState } from 'react'
import { Button, CircleButton, HeadingGroup, InputText, InputTextSelect } from '../basic/basic';

const InputPemeriksaan = () => {
    const [state, setState] = useState({
        data: [
            {id: 1}
        ]
    })

    const handleAddObat = () => {
       const datas = [...state.data];
       let val = state.data[state.data.length-1].id;
       datas.push({id: val+1});
       setState({data: datas});
    }
    const dataPasien = [
        {value: 'Fulan'},
        {value: 'Fulanah'},
        {value: 'Fulanah bintu Fulan'},
        {value: 'Fulan bin Fulan'},
    ];
    useEffect(() => {
        
    }, []);
    return (
        <div className='container'>
            <HeadingGroup title={'Pemeriksaan Pasien'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <form action={''}>
                <div className='row'>
                    <div className='div25'>
                        <InputText placeholder={'330xxxxxxxxx'} text={'ID Pasien'} icon={'user'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputTextSelect text={'Nama Pasien'} data={dataPasien} icon={'users'} />
                    </div>
                    <div className='div30'>
                        <InputText placeholder={'Ex: Tanggal Pemeriksaan'} text={'Tanggal Pemeriksaan'} icon={'calendar-alt'} type={'date'} />
                    </div>
                </div>
                <div className='row'>
                    <div className='div50'>
                        <InputText placeholder={'Diagnosa Dokter'} text={'Diagnosa Dokter'} icon={'stethoscope'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Tekanan Darah'} text={'Tekanan Darah'} icon={'notes-medical'} type={'text'} />
                    </div>
                    <div className='div25'>
                        <InputText placeholder={'Suhu Badan'} text={'Suhu Badan Pasien'} icon={'thermometer-three-quarters'} type={'text'} />

                    </div>
                </div>
                <HeadingGroup title={'Resep Dokter'} size={'size-24'}/>
                {state.data.map((d, index) => {
                    return (
                    <div className='row' key={index}>
                        <div className='div25'>
                            <InputText placeholder={'Nama Obat'} text={`Nama Obat ${d.id}`} icon={'capsules'} type={'text'} />
                        </div>
                        <div className='div25'>
                            <InputText placeholder={'Jumlah Obat'} text={`Jumlah Obat ${d.id}`} icon={'prescription-bottle-alt'} type={'number'} />
                        </div>
                    </div>
                    )
                })}
                    <CircleButton onClick={handleAddObat} icon={'plus'} />
                <Button text={'Submit'} />
                <Button text={'Reset'} types={'reset'}/>
                </form>
            </div>
        </div>
    )
}

export default InputPemeriksaan
