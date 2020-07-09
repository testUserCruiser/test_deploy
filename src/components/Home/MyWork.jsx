import React, {} from 'react'
import './MyWork.css'
import { connect } from 'react-redux'


function MyWork(props) {
    return (
        <div className="myWork__Section"  style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null }>
            <div className="mywork">
                <h1 style={ props.isDarknessStore ? {color: "white"} : null } className="My__Work-h1">MY WORK</h1>
                <p style={ props.isDarknessStore ? {color: "white"} : null } className="My__Work-p">I was never the best at school or academics, I’m just a super curious guy. 
                   I exists to share these ideas and theories that interest me. I spend a lot
                   of time building software and coding, but there’s also a lot more to it. I’ve 
                   been working on algorithms to document the logic, reasoning, and problems encountered 
                   during the process of learning engineering. A combination of innovation and storytelling 
                   learning new things and gaining experience in field of computer science.</p>
            </div>
            <div className="mywork__workdone">
                <div className="work1">
                    <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Software Development</h3>
                    <ul style={ props.isDarknessStore ? {color: "white"} : null } className="work1-list">
                        <li>Java/C# Automation. CPU bound business logic</li>
                        <li>Low level/embedded IoT programming</li>
                        <li>Cloud computing, microservices, APIs, full stack web apps</li>                    
                    </ul>
                </div>
                <div className="work2">
                    <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Graphic Designing</h3>
                    <ul style={ props.isDarknessStore ? {color: "white"} : null } className="work2-list">
                        <li>Graphic, templates designs</li>
                        <li>Business model template, software drafts</li>
                        <li>documented and easy to access as a npm module</li>
                        <li>Colors, components, typography etc... all in one place,</li>
                    </ul>
                </div>
                <div className="work3">
                    <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Full Stack Development</h3>
                    <ul style={ props.isDarknessStore ? {color: "white"} : null } className="work3-list">
                        <li>Get your mvp up & running in less than a week built with the MERN or JAM stack</li>
                        <li>ask your early users for feedback before scaling it.</li>
                        <li>Cloud computing, microservices, APIs, full stack web apps</li>
                    </ul>
                </div>
                <div className="work4">
                    <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Open Source</h3>
                    <ul style={ props.isDarknessStore ? {color: "white"} : null } className="work4-list">
                        <li>love open source and micro startups</li>
                        <li>Contribute in Agile based, test driven, and unit testing development</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }}


export default connect(mapStateToProps)(MyWork)