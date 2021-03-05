import React from 'react'
import Header from '../component/header/Header'
import ToogleData from '../component/toogleMenu/ToogleData'

const AdminPage = () => {
    return (
        <div>
            <Header user={'Admin'}/>
            <ToogleData />
        </div>
    )
}

export default AdminPage
