import React from 'react'
import { HeadingGroup } from '../basic/basic'

const ViewDataTransaksi = () => {
    return (
        <div className='container'>
            <HeadingGroup title={'Data Transaksi'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <div className='view-data'>
                    <table>
                        <thead>
                            <th>ID Pasien</th>
                            <th>Nama Pasien</th>
                            <th>Alamat Pasien</th>
                            <th>Jumlah Obat</th>
                            <th>Harga Total</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3302272405960002</td>
                                <td>Fulan</td>
                                <td>Jl Gunung Cermai</td>
                                <td>3</td>
                                <td>Rp 52.000</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>3302272405960002</td>
                                <td>Fulanah</td>
                                <td>Jl Gunung Cermai</td>
                                <td>2</td>
                                <td>Rp 35.000</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewDataTransaksi
