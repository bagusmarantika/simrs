import React from 'react'
import Header from '../component/header/Header'
import ToogleDataDokter from '../component/toogleMenu/ToogleDataDokter'

const DokterPage = () => {
    return (
        <div>
            <Header user={'Dokter'}/>
            <ToogleDataDokter />
        </div>
    )
}

export default DokterPage
