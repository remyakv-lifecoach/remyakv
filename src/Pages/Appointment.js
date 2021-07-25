import React from 'react'
import HeaderText from '../Components/HeaderText'

export default function Appointment() {
    return (
        <main>

       <HeaderText title="Appointment" />
        <section class="contact-section">
            <div class="container">
                <div class="row">
                    <iframe title="appointment-form"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd3JOz2hXl4OYIDKHBxD54WmHmxPstx3JxQ-lnHscGmiJgkEg/viewform?embedded=true"
                        width="940" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </section>

    </main>
    )
}
