import React, { useEffect } from 'react'
import { database } from '../../config/firebase'
import { Button, HeadingGroup } from '../basic/basic'

const ViewData = ({onClick}) => {
    const datas = [];

    const loadData = (data) => {
        const getData = database.ref('pasien/');
        getData.on('value', function(snapshot) {
            data.push(snapshot.val())
        })
    }

    useEffect(() =>{
        loadData(datas)
        console.log(datas)
    }, [])

    return (
        <div className='container'>
            <HeadingGroup title={'Data Pasien'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <div className='view-data'>
                    <table>
                        <thead>
                            <th>ID Pasien</th>
                            <th>Nama Pasien</th>
                            <th>Alamat Pasien</th>
                            <th>Umur Pasien</th>
                            <th>Jenis Kelamin</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td>3302272405960002</td>
                                <td>Bagus M</td>
                                <td>Jl Gunung Cermai</td>
                                <td>24 Tahun</td>
                                <td>Laki-laki</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>3302272405960002</td>
                                <td>Bagus M</td>
                                <td>Jl Gunung Cermai</td>
                                <td>24 Tahun</td>
                                <td>Laki-laki</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewData
