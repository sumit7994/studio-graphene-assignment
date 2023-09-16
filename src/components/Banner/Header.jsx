import React from 'react'
import { FacebookIcon, FreeDeliveryIcon, InstagramIcon, LinkedInIcon, TwiiterIcon } from '../../utils/SVGs'

export default function Header() {
    return (
        <div className='d-flex w-100 header'>

            <div className='container py-3 d-flex justify-content-between'>

                <div className='d-flex'>
                    <div className='d-flex gap-2 align-items-center'>
                        <FreeDeliveryIcon />

                        <p>Free Delivery</p>
                    </div>

                    <div className='vertical-line' />

                    <p>Return Policy</p>
                </div>

                <div className='d-flex gap-3'>
                    <p role='button'>Login</p>
                    <div className='d-flex gap-3 align-items-center'>
                        <p className='d-none d-md-block ms-4'>Follow US</p>
                        <FacebookIcon />
                        <LinkedInIcon />
                        <TwiiterIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>

        </div>
    )
}
