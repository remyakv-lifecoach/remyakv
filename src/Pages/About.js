import React from 'react'
import HeaderText from '../Components/HeaderText'
import Testimonial from '../Components/Testimonial'

export default function About() {
    return (
        <>
            <main>
                <HeaderText title="About Remya" />
                <section className="about-area section-bg section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">

                                <div className="about-img about-img1  ">
                                    <img src="assets/img/remya/remya_1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="offset-xl-1 offset-lg-0 offset-sm-1 col-xxl-5 col-xl-5 col-lg-6 col-md-9 col-sm-11">
                                <div className="section-tittle mb-10">
                                    <span>Whats there in Name</span>
                                    <h2>A Life Coach, Software Engineer,Yoga Instructor </h2>
                                </div>

                                <div className="about-caption about-caption1">

                                    <div className="section-tittle m-0">

                                        <p className="mb-30">Hello, I am Remya , mom to a toddler girl, a yoga enthusiast , a
                                            software engineer and a
                                            Life coach. Hailing from a small village in Kerala, I never had any big dreams in
                                            life.
                                            All I remember was I wanted to become a teacher. When I finished my Engineering
                                            degree
                                            in IT, I went on to become a software engineer and went with the hustle and bustle
                                            of
                                            corporate world.</p>
                                        <p className="mb-30">
                                            Over the years I felt something missing in my life. I was not feeling happy in the
                                            work
                                            I do. I started doing self development courses to raise my confidence and self
                                            belief.
                                            Eventually I got training under a life coach which brought massive transformation
                                            within
                                            me. I found my purpose in life. I started loving myself. I am in love with the
                                            person I
                                            became. I started believing that I can bring the same kind of transformation in
                                            others .
                                        </p>
                                        <p className="mb-30">

                                            For me, helping people transform their lives to live meaningful life is the noble
                                            thing
                                            to do. So that’s how I choose to became a life coach.</p>
                                        <p>Lets Connect and talk more</p>
                                        <a href="contact" className="border-btn border-btn2 mt-20 text-center">Connect</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="testimonial-area">
                    <div className="container">
                        <div className="row d-flex justify-content-center t-color">
                            <div className="col-xl-8 col-lg-8">
                                <div className="h1-testimonial-active dot-style testimonial-padding">
                                <Testimonial/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
