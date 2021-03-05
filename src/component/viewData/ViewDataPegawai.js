import React from 'react'
import { HeadingGroup } from '../basic/basic'

const ViewDataPegawai = () => {
    return (
        <div className='container'>
            <HeadingGroup title={'Data Pegawai'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <div className='view-data'>
                    <table>
                        <thead>
                            <th>ID Pegawai</th>
                            <th>Nama Pegawai</th>
                            <th>Alamat Pegawai</th>
                            <th>Jabatan</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3302272405960002</td>
                                <td>Bagus M</td>
                                <td>Jl Gunung Cermai</td>
                                <td>Operator</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>3302272405960002</td>
                                <td>Bagus M</td>
                                <td>Jl Gunung Cermai</td>
                                <td>Dokter</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewDataPegawai
