import React from 'react'
import { HeadingGroup } from '../basic/basic'

const ViewDataUser = () => {
    return (
        <div className='container'>
            <HeadingGroup title={'Data User'} size={'size-36'} />
            <hr/>
            <div className='container-inner'>
                <div className='view-data'>
                    <table>
                        <thead>
                            <th>ID User</th>
                            <th>Nama User</th>
                            <th>Alamat User</th>
                            <th>Kategori User</th>
                            <th>Status User</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>3302272405960002</td>
                                <td>Bagus M</td>
                                <td>Jl Gunung Cermai</td>
                                <td>Operator</td>
                                <td>Active</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                            <tr>
                                <td>3302272405960002</td>
                                <td>Bagus M</td>
                                <td>Jl Gunung Cermai</td>
                                <td>Dokter</td>
                                <td>Active</td>
                                <td><a href="">Edit</a> | <a href="">Delete</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewDataUser
