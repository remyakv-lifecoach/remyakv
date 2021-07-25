import React from 'react'
import { Link } from 'react-router-dom'
export default function ServicesSection(props) {
    return (
        <div class="col-lg-6 col-md-6 col-sm-10">
        <div class="single-services single-services2">
            <div class="services-img">
                <img src={props.image} alt="" />
            </div>
            <div class="services-caption">
                <h4><Link to="#">{props.title}</Link></h4>
                <ul class="unordered-list">
                    {props.featureList.map(
                        val =>{
                            return (
                                <li>{val}</li>
                            )
                        }
                    )}
                </ul>
            </div>
        </div>
    </div>
    )
}
