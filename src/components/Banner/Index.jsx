import React, { useState } from 'react'
import Header from './Header'

import './Banner.css';
import { navbarMenu } from '../../utils/NavabarList';
import { CrossIcon, HamburgerMenuIcon, SeeMoreLinkIcon } from '../../utils/SVGs';

export default function Banner() {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleDropdownOpen = () => {
        let dropdown = document.getElementsByClassName('dropdown-container')
        let dropdownMain = document.getElementsByClassName('dropdown-main-container')
        dropdownMain[0].style.borderLeft = '1px solid white'
        dropdownMain[0].style.borderRight = '1px solid white'
        dropdownMain[0].style.borderTop = '1px solid white'
        dropdown[0].style.padding = '5px 0'
        dropdown[0].style.height = 'auto'
        dropdown[0].style.borderLeft = '1px solid white'
        dropdown[0].style.borderRight = '1px solid white'
        dropdown[0].style.borderBottom = '1px solid white'
    }

    const handleDropdownClose = () => {
        let dropdown = document.getElementsByClassName('dropdown-container')
        let dropdownMain = document.getElementsByClassName('dropdown-main-container')
        dropdown[0].style.padding = '0 0'
        dropdown[0].style.height = '0'
        dropdown[0].style.border = '0'
        dropdownMain[0].style.borderLeft = '1px solid black'
        dropdownMain[0].style.borderRight = '1px solid black'
        dropdownMain[0].style.borderTop = '1px solid black'
    }

    return (
        <div>
            <Header />

            <div className='banner'>
                <div className='container py-1 banner-container d-flex justify-content-between align-items-center'>
                    <h5 className='heading'>ShopKart</h5>

                    <div className='d-none d-md-flex side-content gap-3'>
                        <p>WISHLIST (0)</p>
                        <p>BAG (0)</p>
                    </div>
                    {/* To show the hameburger menu icon and cross icon using menuOpen State */}
                    <div className='d-md-none d-flex'>
                        {
                            !menuOpen ?
                                <span onClick={() => {
                                    let navigation = document.getElementsByClassName('navigation-section');
                                    navigation[0].style.height = '100%';
                                    setMenuOpen(true)
                                }}>
                                    <HamburgerMenuIcon />
                                </span>
                                :
                                <span onClick={() => {
                                    let navigation = document.getElementsByClassName('navigation-section');
                                    navigation[0].style.height = '0';
                                    setMenuOpen(false)
                                }}>
                                    <CrossIcon />
                                </span>
                        }
                    </div>
                </div>

                <div className='container py-2 navigation-section d-flex flex-column flex-md-row gap-5 align-items-center'>
                    {
                        navbarMenu.map((item) => {
                            if (item.child) {
                                return (
                                    <div
                                        onMouseOver={handleDropdownOpen}
                                        onMouseLeave={handleDropdownClose}
                                        className='mx-4 position-relative dropdown-main-container'
                                        role='button'
                                        key={item.id}
                                    >
                                        <p className='text-uppercase me-md-4 dropdown-text' id={item.id}>{item.name}</p>
                                        <div className='position-absolute dropdown-container w-100'>
                                            {
                                                item.child.map((childItem) => {
                                                    return (
                                                        <p role='button' id={childItem?.id} key={childItem?.id} className='dropdown-item-list'>{childItem?.name}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            } else {
                                return <p role='button' className='mx-4 text-uppercase' id={item.id} key={item.id}>{item.name}</p>
                            }
                        })
                    }
                </div>

                <div className='banner-pic d-flex align-items-end'>
                    <div className='container d-flex flex-column gap-5'>
                        <div>
                            <h1 className='banner-heading'>Fresh</h1>
                            <h1 className='banner-heading-mid'>2022</h1>
                            <h1 className='banner-heading ms-md-5 ps-pd-5 ps-4'>Look</h1>
                        </div>

                        <div className='d-flex gap-2 align-items-center'>
                            <p role='button' className='see-more'>
                                See More
                            </p>
                            <SeeMoreLinkIcon />
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}
