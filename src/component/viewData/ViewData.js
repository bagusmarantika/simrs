import React from 'react'
import { Button, HeadingGroup } from '../basic/basic'

const ViewData = ({onClick}) => {
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
