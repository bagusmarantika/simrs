import React from 'react'
import { HeadingGroup } from '../basic/basic'

const ViewDataObat = () => {
    return (
        <div className='container'>
            <HeadingGroup title={'Data Obat'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <div className='view-data'>
                    <table>
                        <thead>
                            <th>ID Obat</th>
                            <th>Nama Obat</th>
                            <th>Expired</th>
                            <th>Stock</th>
                            <th>Harga</th>
                            <th>Kategori</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Obt-001</td>
                                <td>AA</td>
                                <td>22 Mei 2022</td>
                                <td>200</td>
                                <td>Rp 10.000</td>
                                <td>Tablet</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>Obt-002</td>
                                <td>BB</td>
                                <td>1 Januari 2022</td>
                                <td>20</td>
                                <td>Rp 35.000</td>
                                <td>Sirup</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewDataObat
