import React, { useState } from 'react'
import { TextLink } from '../basic/basic';
import InputPemeriksaan from '../inputPemeriksaan/InputPemeriksaan';
import ViewData from '../viewData/ViewData';
import ViewDataPemeriksaan from '../viewData/ViewDataPemeriksaan';

const ToogleDataDokter = () => {
    const [menu1, setMenu1] = useState(true);
    const [menu2, setMenu2] = useState(false);
    const [subMenu1, setSubMenu1] = useState(true);
    const [subMenu2, setSubMenu2] = useState(false);
    const [mobile, setMobile] = useState(false);

    const handleClickMenu1 = () => {
        setMenu1(true);
        setMenu2(false);
    }

    const handleClickMenu2 = () => {
        setMenu1(false);
        setMenu2(true);
    }

    const handleSubMenu1 = () => {
        setSubMenu1(true);
        setSubMenu2(false);
    }

    const handleSubMenu2 = () => {
        setSubMenu1(false);
        setSubMenu2(true);
    }

    const handleMobileMenu = () => {
        setMobile(!mobile);
    }

    const isMenu1 = menu1? 'actived' :'';
    const isMenu2 = menu2? 'actived' :'';
    const showMobileMenu = mobile ? 'on-click' : '';

    const isOpen1 = menu1 ? 'opened' : '';
    const isOpen2 = menu2 ? 'opened' : '';

    const isOpenSub1 = subMenu1 ? 'showed' : 'closed';
    const isOpenSub2 = subMenu2 ? 'showed' : 'closed';

    return (
        <div className='toogle-menu'>
            <ul className='primary-menu'>
                <li onClick={handleClickMenu1} className={isMenu1}><a href="javascript:void(0)">Data Pasien</a></li>
                <li onClick={handleClickMenu2} className={isMenu2}><a href="javascript:void(0)">Pemeriksaan</a></li>
            </ul>
            <div className={['mobile-menu', showMobileMenu].join(' ')}>
                <div className='title-mobile-menu'>
                    <h4 onClick={handleMobileMenu}>Menu <span style={{fontSize: '10px'}}>&#9660;</span></h4>
                    <ul className='mobile-menu-list'>
                    <li onClick={handleClickMenu1} className={isMenu1}><a href="javascript:void(0)">Data Pasien</a></li>
                    <li onClick={handleClickMenu2} className={isMenu2}><a href="javascript:void(0)">Pemeriksaan</a></li>
                    </ul>
                </div>
            </div>

            <div className={['toogle-content', isOpen1].join(' ')}>
                <ViewData />
            </div>

            <div className={['toogle-content', isOpen2].join(' ')}>
                <div className={isOpenSub1}>
                    <TextLink text={'View Data'} onClick={handleSubMenu2} />
                    <InputPemeriksaan />
                </div>
                <div className={isOpenSub2}>
                    <TextLink text={'Tambah Data'} onClick={handleSubMenu1} />
                    <ViewDataPemeriksaan />
                </div>
            </div>

        </div>
    )
}

export default ToogleDataDokter
