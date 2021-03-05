import React from 'react'
import { HeadingGroup } from '../basic/basic'

const ViewDataPemeriksaan = () => {
    return (
        <div className='container'>
            <HeadingGroup title={'Data Pemeriksaan'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <div className='view-data'>
                    <table>
                        <thead>
                            <th>ID Pasien</th>
                            <th>Nama Pasien</th>
                            <th>Jenis Kelamin</th>
                            <th>Diagnosa</th>
                            <th>Jumlah Obat</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3302271010100001</td>
                                <td>Fulan</td>
                                <td>Laki-laki</td>
                                <td>Pasien menderita typhus</td>
                                <td>3</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>3302271010100001</td>
                                <td>Fulanah</td>
                                <td>Perempuan</td>
                                <td>Pasien menderita penyakit diare</td>
                                <td>2</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewDataPemeriksaan
