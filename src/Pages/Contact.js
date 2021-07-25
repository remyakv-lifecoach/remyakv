import React from 'react'
import HeaderText from '../Components/HeaderText'

export default function Contact() {
    return (
        <main>

            <HeaderText title="Contact"/>

            <section className="contact-section">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title" id="contactForm_heading">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-contact contact_form gform"
                                action="https://script.google.com/macros/s/AKfycbw9KW1brff56OCKW62LhzhmayG6JXx4TTBq9Mk5FexOXBO9XiPvtcEmlqZPNCoo-At8/exec"
                                method="post" name="contact-form-boring-baba"
                                id="contactForm" novalidate>

                                <div className="row">

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input required className="form-control valid" name="name" id="name" type="text"
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input required className="form-control valid" name="email" id="email" type="email"
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter email address'" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <input required className="form-control valid" name="phone-number" id="phone-number" type="tel"
                                                onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter Phone Number'" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea required className="form-control w-100" name="message" id="message" cols="30"
                                                rows="9" onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter Message'"
                                                placeholder=" Enter Message"></textarea>
                                        </div>
                                    </div>
                                    <input id="honeypot" type="text" name="honeypot" value="" style={{ display: "none" }} />
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm boxed-btn" id="submit-loading">Send</button>
                                </div>
                            </form>
                            <div className="form-successful-message" style={{ display: "none" }} id="success_message">
                                <h3>We have successfully received your message. We will get back to you.</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                <div className="media-body">
                                    <h3><a href="tel:+919535833288">+91 9535833288</a></h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3><a href="mailto:remya.lifecoach@gmail.com">remya.lifecoach@gmail.com</a>
                                    </h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
