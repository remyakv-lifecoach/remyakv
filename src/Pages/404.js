import React from 'react'
import HeaderText from '../Components/HeaderText'

export default function NotFound() {
    return (
        <div>
            <main>
                <HeaderText title="404 Page Not Found"/>
                <section className="about-area section-bg section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                <div className="about-img about-img1  ">
                                    <img src="assets/img/others/404.png" alt="" />
                                </div>
                            </div>
                            <div className="offset-xl-1 offset-lg-0 offset-sm-1 col-xxl-5 col-xl-5 col-lg-6 col-md-9 col-sm-11">
                                <div className="section-tittle mb-10">
                                    <h2>It's Empty Here </h2>
                                </div>

                                <div className="about-caption about-caption1">
                                    <div className="section-tittle m-0">
                                        <p className="mb-30">Looks Like the page can't be found. Maybe it was moved or renamed.</p>
                                        <a href="index" className="border-btn border-btn2 mt-20 text-center">Back to
                                            Homepage</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
