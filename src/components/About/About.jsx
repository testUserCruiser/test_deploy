import React from 'react'
import * as actionTypes from '../Store/actions'
import { connect } from 'react-redux'
import './about.css'
import github from './github.svg'
import linkedin from './linkedin.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import {Helmet} from "react-helmet";


function About(props) {

        return (
            <div>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Akshay Kalucha-About</title>
                </Helmet>
                    <section style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="about__section">
                        <div className="about__container">
                            <h1 style={ props.isDarknessStore ? {color: "white"} : null }>About Me</h1>
                            <p style={ props.isDarknessStore ? {color: "white"} : null }>I’m Akshay Kalucha, also known as Akcosh, I’m a self-taught software developer, Graphic, UI/UX Designer
                               and full stack JavaScript developer. I'm really interested in Technologies & solving dev problems. 
                               You can know more about me by reading my articles. Currently I'm working onsite for Intellify Delhi as a 
                               Full stack software developer and i love to work on new technologies while exploring and learning the core 
                               concepts of development.</p>
                        </div>
                        <div className="inquiry__container">
                            <p style={ props.isDarknessStore ? {color: "white"} : null } className="inqueries__para">For any inquiries feel free to get in touch with me at:</p>
                            <div className="contact-info">
                                <i style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } className="fas fa-envelope envelope"></i><p className="email" style={ props.isDarknessStore ? {color: "white"} : null }>akshay23l@hotmail.com</p>
                                <i style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } className="fas fa-phone phone"></i><p className="phonenumber" style={ props.isDarknessStore ? {color: "white"} : null }>************</p>
                                <i style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } className="fas fa-map-marker-alt marker"></i><p className="location" style={ props.isDarknessStore ? {color: "white"} : null }>626 ***** ****, New Delhi</p>
                                <i style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } className="fas fa-map-marker-alt marker2"></i><p className="location2" style={ props.isDarknessStore ? {color: "white"} : null }>Somewhere in North Campus, Delhi University, Delhi</p>
                            </div>
                        </div>
                        <div className="web__inquiry">
                            <h2 style={ props.isDarknessStore ? {color: "white"} : null } className="somewhere">Or somewhere else on the web</h2>
                            <div className="web__inquiry__main">
                                <a style={ props.isDarknessStore ? {color: "white"} : null } href="/">
                                    <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={twitter} alt=""/>
                                    Twitter
                                </a>
                                <a style={ props.isDarknessStore ? {color: "white"} : null } href="/">
                                    <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={instagram} alt=""/>
                                    Instagram
                                </a>

                                <a style={ props.isDarknessStore ? {color: "white"} : null } href="/">
                                    <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } className="github__inquiry-img" src={github} alt=""/>
                                    GitHub
                                </a>

                                <a style={ props.isDarknessStore ? {color: "white"} : null } className="inquiry__linkedin" href="/">
                                    <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } className="linkedin__inquiry-img" src={linkedin} alt=""/>
                                    Linkedin
                                </a>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }













    
const mapStateToProps = state => {
    return {
        DrawerOpenStore: state.sideDrawerOpen,
        isDarknessStore: state.isDark
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDrawer: (value) => dispatch({type: actionTypes.SHOW_DRAWER, param: value})
    }}

export default connect(mapStateToProps, mapDispatchToProps)(About)
