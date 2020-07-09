import React from 'react';
import './intro.css'
import skill1 from './icon1.svg'
import skill2 from './icon4.svg'
import skill3 from './icon5.svg'
import { connect } from 'react-redux'
import {Helmet} from "react-helmet";
import { NavLink } from 'react-router-dom'

function Intro(props)  {

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Akshay Kalucha</title>
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@lifeofakshy" />
                    <meta name="twitter:site" content="@lifeofakshy" />
                    <meta name="twitter:title" content="I'm Akshay Kalucha" />
                    <meta name="twitter:description" content="software & programming hobbyist..." />
                    <meta name="twitter:image" content="https://raw.githubusercontent.com/akshaykalucha3/Portfolio_website_React/master/public/mylogo.jpg" />
                </Helmet>
                <section className="main__intro__name" style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null }>
                    <h1 style={ props.isDarknessStore ? {color: "white", zIndex: 0} : null } className="branding__name">I'm Akshay Kalucha</h1>
                    <p>Self-learning software and programming hobbyist through research & development.
                        I love open source and building side projects. algorithms to document the logic, reasoning, and problems,
                        but there’s also a lot more to it.
                    </p><br/>
                    <div className="neon__buttons__color">
                        <a href="/" className="view__resume">View Resume</a>
                        <NavLink className="neon__button-contact" to="/contact">Get In Touch</NavLink>
                    </div>
                </section>
                <section  style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a"} : null } className="skwedpath">
                    <div className="main__section__skwed">
                        <h1 style={ props.isDarknessStore ? {color: "white"} : null } className="skwed__h1">Skills</h1>
                        <div className="skills__div">
                            <div className="skill1">
                                <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={skill1} alt=""/>
                            </div>
                            <div className="skill2">
                                <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={skill2} alt=""/>
                            </div>
                            <div className="skill3">
                                <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={skill3} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="skwed__imd__labels">
                        <h4 style={ props.isDarknessStore ? {color: "white"} : null } className="img__label__DSALGO">DS-Algo & ML</h4>
                        <h4 style={ props.isDarknessStore ? {color: "white"} : null } className="img__label__fullstack">Full stack development</h4>
                        <h4 style={ props.isDarknessStore ? {color: "white"} : null } className="img__label__backend">Back end development</h4>
                    </div>
                </section>
            </div>
        )
    }


const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }}


export default connect(mapStateToProps)(Intro)

