import React from 'react'
import './Footer.css'

export default function Footer() {

    const handleSendButton = (e) => {
        e.preventDefault();
        window.alert("Form Submitted")
    }

    return (
        <div className='footer-container'>
            <div className='footer-form '>

                <form onSubmit={handleSendButton} className='container py-4'>
                    <div className='d-flex flex-column flex-md-row '>
                        <div className='footer-left p-5'>
                            <p className='footer-heading'>Newslleter</p>
                            <p className='footer-content'>Get news about articles and updates in your inbox.</p>
                        </div>

                        <div className='footer-right p-5 d-flex flex-column gap-4'>
                            <input className='footer-input' type="text" placeholder='Name' required minLength={5} />
                            <input className='footer-input' type="email" placeholder='Email' required />
                            <input className='footer-input' type="text" placeholder='Message' required minLength={50} />
                        </div>
                    </div>

                    <div className='d-flex position-relative'>
                        <div className='big-text'>
                            <h1>GET</h1>
                            <h1>IN TOUCH</h1>
                        </div>

                        <div className='position-absolute send-button'>
                            <button type='submit'>Send</button>
                        </div>
                    </div>
                </form>


            </div>

            <div className='copyright-section text-center p-3'>
                <p>Copyright 2022 All Right Reserved By SG</p>
            </div>
        </div>
    )
}
