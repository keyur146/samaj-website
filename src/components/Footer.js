import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, 
FaLocationArrow, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div class="container-fluid text-light mt-4 py-5 foot">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-white text-uppercase border-bottom border-5 bb mb-4">Contact Us</h4>
                            <p class="mb-2">રજી. નં. ઈ-૩૨૧૧ - તારીખ: ૧૫-૦૨-૧૯૭૮</p>
                            <p class="mb-2">(ITT Reg. No. : DIT (E) 1244137/06-07)</p>
                            <p class="mb-2 text-white">< FaLocationArrow />  કાર્યાલય: F/110, સુપથ કોમ્પલેક્ષ,
                                જૂના વાડજ બસ સ્ટેન્ડ પાસે, આશ્રમ રોડ, અમદાવાદ – ૩૮૦૦૧૩</p>
                            <p class="mb-2 text-white"><FaEnvelope/>  info@example.com</p>
                            <p class="mb-0 text-white"><FaPhone/>  +91 9427056845</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-white text-uppercase border-bottom border-5 bb mb-4">Quick Links</h4>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-white mb-2" href="#">Home</a>
                                <a class="text-white mb-2" href="#">About Us</a>
                                <a class="text-white mb-2" href="#">Committee</a>
                                <a class="text-white mb-2" href="#">Gallery</a>
                                <a class="text-white" href="#">Contact</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-white text-uppercase border-bottom border-5 bb mb-4">About</h4>
                            <div class="d-flex flex-column justify-content-start">
                                <p>Total Families - xxxx</p>
                                <p>Total Family Member - xxxxx</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="d-inline-block text-white text-uppercase border-bottom border-5 bb mb-4">Get In Touch</h4>
                            <br />
                           <div className='d-flex flex-column justify-content-start'>
                           <span className='text-white social-links'>
                                <a href='#'><FaFacebook />&nbsp;&nbsp;</a>
                                <a href='#'><FaInstagram />&nbsp;&nbsp;</a>
                                <a href='$'><FaTwitter /></a>
                            </span>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer