import React from 'react'
import HeaderText from '../Components/HeaderText'
import ServicesSection from '../Components/ServicesSection'
export default function Services() {
    return (
        <main>
            <HeaderText title="Services"/>

            <section class="services-area section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="section-tittle text-center mb-80">
                                <h2>Customised One to One Coaching</h2>
                                <h3>4 sessions of 60 minutes each + 1 BONUS sessions FREE</h3>
                                <h4>OR</h4>
                                <h3>8 sessions of 60 minutes each + 2 BONUS sessions FREE </h3>
                                <a href="appointment" class="border-btn border-btn2 mt-20 text-center">Book Now</a>
                            </div>
                            <div class="small-tittle mb-50 d-flex flex-wrap justify-content-between align-items-center">
                                <h4>STILL NOT SURE?</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container ">
                    <div class="row">

                        < ServicesSection 
                            title="What is one on one coaching?"
                            image="assets/img/others/Work risk-free.png"
                            featureList={[
                                `Just as a doctor knows what questions to ask to diagnose you, I know what
                                questions to ask to determine where you're getting stuck.`,
                                `My sessions are a safe, non judgmental place for you to discuss your problems
                                and goals.`,
                                `Then, I will give you actionable tools and a clear plan to get yourself to
                                exactly where you want to be in life.`,
                            ]}
                            />
                            < ServicesSection 
                            title="What's the difference between therapy and coaching?"
                            image="assets/img/others/Meditation at Home.png"
                            featureList={[
                                `Therapy focuses on the past and healing old wounds, and may involve medication.
                                As a life coach, I focus on your present and future.`,
                                `And while there is no medication involved, there are countless practices and tools
                                I can give you to break negative patterns that have been holding you back,
                                and take your joy and productivity to soaring levels.`]}
                            />
                            < ServicesSection 
                            title="What can I expect to get out of one on one coaching?"
                            image="assets/img/others/Solving problems.png"
                            featureList={[
                                `We will work together to get you clarity on your life's true purpose,
                                the courage to go after it, and the consistency to achieve it.`,
                                `We’ll go into detail on your goals, and develop a step by step plan for you to
                                follow to make them happen. I’ll also hold you accountable every step of the way.`,
                                `You’ll also get tools for self-improvement that will help you in all
                                your personal relationships, making them peaceful and loving.`]}
                            />
                            < ServicesSection 
                            title="I'm still not sure if this is what I need..."
                            image="assets/img/others/Mentor.png"
                            featureList={[
                                `Book an appointment with me for a Strategy Call of 30 Mins.  
                                It's totally the perfect way for us to
                                see if one on one coaching is the path for you.`]}
                            />
                    </div>
                </div>
            </section>
        </main>
    )
}
