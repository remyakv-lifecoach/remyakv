import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="footer-wrapper gray-bg">
                    <div className="footer-area footer-padding">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="single-footer-caption mb-20">

                                            <div className="footer-logo mb-35">
                                                <a href="index"><img src="assets/img/logo/remya.png" alt="logo" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Quick Links</h4>
                                            <ul>
                                                <li><a href="index">Home</a></li>
                                                <li><a href="about">About</a></li>
                                                <li><a href="services">Services</a></li>
                                                <li><a href="appointment">Book Appointment</a></li>
                                                <li><a href="contact">Contact</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Important Links</h4>
                                            <ul>
                                                <li><a href="terms-conditions">Terms and Condition</a></li>
                                                <li><a href="privacy-policy">Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle mb-10">
                                            <h4>Follow Us!</h4>
                                        </div>

                                        <div className="footer-social mt-30">
                                            <a href="https://www.instagram.com/remya_lifecoach/"><i
                                                className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="footer-border">
                                <div className="row">
                                    <div className="col-xl-12 ">
                                        <div className="footer-copy-right text-center">
                                            <p>Copyright &copy;
                                                <script>document.write(new Date().getFullYear());</script> <a
                                                    href="https://www.remyakv.com">remyakv.com</a> |

                                                Proudly Powered By 
                                                {<a href="https://thecolorfulslate.com" rel="noreferrer" target="_blank">
                                                &nbsp; <i className="fa fa-heart color-danger" aria-hidden="true">
                                                        </i> &nbsp; The Colorful Slate</a>}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
