import React from 'react'

export default function HeaderText(props) {
    return (
        <div class="slider-area">
            <div class="slider-height2 slider-bg2 d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-9">
                            <div class="hero-caption hero-caption2">
                                <h2>{props.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
