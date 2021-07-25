import React from 'react'

export default function Header() {
    return (
        <div>
            <header>
                <div className="header-area header-transparent">
                    <div className="main-header">
                        <div className="header-bottom  header-sticky">
                            <div className="container">
                                <div className="row align-items-center">

                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <a href="index"><img src="assets/img/logo/remya.png" alt="logo" /></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10">
                                        <div className="menu-wrapper  d-flex align-items-center justify-content-end">

                                            <div className="main-menu d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><a href="index">Home</a></li>
                                                        <li><a href="about">About</a></li>
                                                        <li><a href="services">Services</a></li>
                                                        <li><a href="contact">Contact</a></li>
                                                        <li>
                                                            <div className="header-right-btn">
                                                                <a href="appointment" className="header-btn2">Make an
                                                                    Appointment</a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
