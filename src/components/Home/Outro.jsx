import React from 'react'
import './outro.css'
import skill1 from './icon2.svg'
import skill2 from './icon3.svg'
import skill3 from './icon6.svg'
import { connect } from 'react-redux'


function Outro(props) {
    return (
        <div>
            <section style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a"} : null } className="skewed__path-outro">
                <div className="main__heading-outro">
                    <h1 style={ props.isDarknessStore ? {color: "white"} : null }>Services</h1>
                </div>
                <div className="skewed__path-main">
                    <div className="main__items-outro">
                        <div className="item1-outro item__outro">
                            <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={skill1} alt=""/>
                            <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Design System</h3>
                            <p style={ props.isDarknessStore ? {color: "white"} : null }>Colors, components, typography etc... all in one place, documented and easy to access as a npm module. Good looking user interfaces with a good user experience for an affordable price.</p>
                        </div>
                        <div className="item2-outro item__outro">
                            <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={skill2} alt=""/>
                            <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Full Stack Development</h3>
                            <p style={ props.isDarknessStore ? {color: "white"} : null }>Get your mvp up & running in less than a week built with the MERN or JAM stack, ask your early users for feedback before scaling it.</p>
                        </div>
                        <div className="item3-outro item__outro">
                            <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={skill3} alt=""/>
                            <h3 style={ props.isDarknessStore ? {color: "white"} : null }>SEO & growth</h3>
                            <p style={ props.isDarknessStore ? {color: "white"} : null }>Your ranking on search engines will improve and growth hacking strategies will be tested and reported to keep you ahead of your competitors.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }
}


export default connect(mapStateToProps)(Outro)
