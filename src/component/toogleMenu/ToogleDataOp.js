import React, { useState } from 'react'
import { TextLink } from '../basic/basic';
import InputObat from '../inputObat/inputObat';
import InputTransaksi from '../inputTransaksi/InputTransaksi';
import PendaftaranPasien from '../pendaftaranPasien/pendaftaranPasien';
import ViewData from '../viewData/ViewData';
import ViewDataObat from '../viewData/ViewDataObat';
import ViewDataTransaksi from '../viewData/ViewDataTransaksi';

const ToogleDataOp = () => {
    const [menu1, setMenu1] = useState(true);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);
    const [subMenu1, setSubMenu1] = useState(true);
    const [subMenu2, setSubMenu2] = useState(false);

    const handleClickMenu1 = () => {
        setMenu1(true);
        setMenu2(false);
        setMenu3(false);
    }

    const handleClickMenu2 = () => {
        setMenu1(false);
        setMenu2(true);
        setMenu3(false);
    }

    const handleClickMenu3 = () => {
        setMenu1(false);
        setMenu2(false);
        setMenu3(true);
    }

    const handleSubMenu1 = () => {
        setSubMenu1(true);
        setSubMenu2(false);
    }

    const handleSubMenu2 = () => {
        setSubMenu1(false);
        setSubMenu2(true);
    }

    const isMenu1 = menu1? 'actived' :'';
    const isMenu2 = menu2? 'actived' :'';
    const isMenu3 = menu3? 'actived' :'';

    const isOpen1 = menu1 ? 'opened' : '';
    const isOpen2 = menu2 ? 'opened' : '';
    const isOpen3 = menu3 ? 'opened' : '';

    const isOpenSub1 = subMenu1 ? 'showed' : 'closed';
    const isOpenSub2 = subMenu2 ? 'showed' : 'closed';

    return (
        <div className='toogle-menu'>
            <ul>
                <li onClick={handleClickMenu1} className={isMenu1}><a href="javascript:void(0)">Pendaftaran Pasien</a></li>
                <li onClick={handleClickMenu2} className={isMenu2}><a href="javascript:void(0)">Obat</a></li>
                <li onClick={handleClickMenu3} className={isMenu3}><a href="javascript:void(0)">Transaksi</a></li>
            </ul>

            <div className={['toogle-content', isOpen1].join(' ')}>
                <div className={isOpenSub1}>
                    <TextLink text={'View Data'} onClick={handleSubMenu2} />
                    <PendaftaranPasien />
                </div>
                <div className={isOpenSub2}>
                    <TextLink text={'Tambah Data'} onClick={handleSubMenu1} />
                    <ViewData />
                </div>
            </div>

            <div className={['toogle-content', isOpen2].join(' ')}>
                <div className={isOpenSub1}>
                    <TextLink text={'View Data'} onClick={handleSubMenu2} />
                    <InputObat />
                </div>
                <div className={isOpenSub2}>
                    <TextLink text={'Tambah Data'} onClick={handleSubMenu1} />
                    <ViewDataObat />
                </div>
            </div>

            <div className={['toogle-content', isOpen3].join(' ')}>
            <div className={isOpenSub1}>
                    <TextLink text={'View Data'} onClick={handleSubMenu2} />
                    <InputTransaksi />
                </div>
                <div className={isOpenSub2}>
                    <TextLink text={'Tambah Data'} onClick={handleSubMenu1} />
                    <ViewDataTransaksi />
                </div>
            </div>
        </div>
    )
}

export default ToogleDataOp
