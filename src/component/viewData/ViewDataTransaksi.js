import React from 'react'
import { HeadingGroup } from '../basic/basic'

const ViewDataTransaksi = () => {
    const dataTransaksi = [
        {id: 'id-001', id_pasien: '3302270909980001', alamat: 'Jl Karang Kobar', nama_pasien: 'bagus', tgl: '21 Februari 2021', obat: [
            {nama: 'Obat A', jumlah: 2, harga: 15000},
            {nama: 'Obat B', jumlah: 1, harga: 30000},
            {nama: 'Obat C', jumlah: 1, harga: 20000}
        ]},
        {id: 'id-002', id_pasien: '3302270909980002', alamat: 'Jl Karang Nanas', nama_pasien: 'marant', tgl: '21 Februari 2021', obat: [
            {nama: 'Obat A', jumlah: 1, harga: 15000},
            {nama: 'Obat B', jumlah: 1, harga: 30000},
            {nama: 'Obat C', jumlah: 1, harga: 20000}
        ]},
        {id: 'id-003', id_pasien: '3302270909980003', alamat: 'Jl Karang Rejo', nama_pasien: 'fulan', tgl: '22 Februari 2021', obat: [
            {nama: 'Obat A', jumlah: 1, harga: 15000},
            {nama: 'Obat B', jumlah: 1, harga: 30000}
        ]},
    ];

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
                            {dataTransaksi.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.id_pasien}</td>
                                        <td>{data.nama_pasien}</td>
                                        <td>{data.alamat}</td>
                                        <td>{data.obat.length}</td>
                                        <td>Rp {data.obat.reduce((val, element) => {
                                            return val + (element.harga*element.jumlah)
                                        }, 0)}</td>
                                        <td><a href="">Edit</a> | <a href="">Delete</a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewDataTransaksi
