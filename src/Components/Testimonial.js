import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


export default function Testimonial() {

    return (
        <div>
            <OwlCarousel
                loop={true}
                margin={10}
                nav={false}
                dots={false}
                autoplay={true}
                autoplayTimeout={2000}
                items={1}
                >
                <div className="item">
                    <div className="single-testimonial text-center">

                        <div className="testimonial-caption ">
                            <div className="testimonial-top-cap">
                                <p>“Remya is a wonderful human being she has
                                    transformed her life now she is ready to
                                    help people to grow she is a great coach
                                    who can create Magic in your life if You
                                    are planning to take a session with her she
                                    is the best choice she is a real inspiration
                                    to so many working woman Remya I wish
                                    you All success and touch so many lives
                                    through coaching and keep rocking .”</p>
                            </div>

                            <div className="testimonial-founder  ">
                                <div className="founder-img">
                                    <span>- PRIYA DHANDAPANI</span>
                                    <span>HEAD COACH</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="single-testimonial text-center">

                        <div className="testimonial-caption ">
                            <div className="testimonial-top-cap">
                                <p>“Remya's sessions are just amazing.
                                    She will approach your problems as if its her and help you to navigate
                                    through tough times.
                                    I STRONGLY recommend Remya as Life coach to EVERYONE interested in
                                    getting his life back on point!”</p>
                            </div>

                            <div className="testimonial-founder  ">
                                <div className="founder-img">
                                    <span>- Ashish Mishra</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item">

                    <div className="single-testimonial text-center">

                        <div className="testimonial-caption ">
                            <div className="testimonial-top-cap">
                                <p>“Remya is a person who will help you to heal yourself.
                                    She has a always positive attitude, Full of energy and focussed towards your
                                    problems.
                                    I highely recommend it to other peoples who are feeling low in life.
                                    Thank you Remya!!”</p>
                            </div>

                            <div className="testimonial-founder  ">
                                <div className="founder-img">
                                    <span>- Vipin K V</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
        </div>
    )
}
