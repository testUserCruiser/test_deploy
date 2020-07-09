import React from 'react'
import { connect } from 'react-redux'

function SectionBottom(props) {
    return (
        <div>
            <section style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a"} : null } className="Techno__Stack">
                <div className="intro">
                    <p style={ props.isDarknessStore ? {color: "white"} : null }>Technology Stack</p>
                    <p style={ props.isDarknessStore ? {color: "white"} : null } className="intro-p1">MY WEBSITE ARCHITECTURE</p>
                </div>
                <div className="web__architecture-software">
                    <div>
                        <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Front-End</h3>
                        <sub style={ props.isDarknessStore ? {color: "white"} : null }>HTML/CSS + JavaScript</sub>
                        <ul>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Single page Web apps written in create-react-app</li>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Elements in table injected using Django template tags having</li>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Multi-page, server rendered apps written in Next js + React</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Thin Backend Servers (non CPU-bound)</h3>
                        <sub style={ props.isDarknessStore ? {color: "white"} : null }>Python + Django</sub>
                        <ul>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Django app for each service.</li>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Single thread event-driven architecture, good for simple services that are mostly waiting on I/O.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Database</h3>
                        <sub style={ props.isDarknessStore ? {color: "white"} : null }>Sqlite</sub>
                        <ul>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Storage for JWT Identity, Hangfire, and Application Servers.</li>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Low level/embedded IoT programming</li>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Single instance backed by persistent volume (would like to deploy a cluster someday).</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={ props.isDarknessStore ? {color: "white"} : null }>Deployment</h3>
                        <sub style={ props.isDarknessStore ? {color: "white"} : null }>Pythonanywhere</sub>
                        <ul>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>In-browser interactive consoles with code running on hosted servers, shareable between multiple users.</li>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>WSGI-based web hosting</li>
                            <li style={ props.isDarknessStore ? {color: "white"} : null }>Many popular Python modules pre-installed</li>
                        </ul>
                    </div>
                </div>

                <div className="software-services">
                    <h2 style={ props.isDarknessStore ? {color: "white"} : null }>Services</h2>
                    <table className="service_table">
                        <thead>
                            <tr style={ props.isDarknessStore ? {color: "white"} : null }>
                                <th scope="col">Name</th>
                                <th scope="col">Endpoint</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr style={ props.isDarknessStore ? {color: "white"} : null }>
                            <td>jwtidentity</td>
                            <td>Akshaykalucha.io/api/auth</td>
                            <td>JWT Authentication Server used to secure all other services (hangfire, mailer)</td>
                        </tr>
                        <tr style={ props.isDarknessStore ? {color: "white"} : null }>
                            <td>mysql</td>
                            <td>private. only accessible within cluster</td>
                            <td>Database for jwtidentity, hangfire, hangfire_github, hangfire_youtube</td>
                        </tr>
                        <tr style={ props.isDarknessStore ? {color: "white"} : null }>
                            <td>Django+Node</td>
                            <td>Akshaykalucha.io/api/hangfire</td>
                            <td>Background processing server</td>
                        </tr>
                        <tr style={ props.isDarknessStore ? {color: "white"} : null }>
                            <td>front</td>
                            <td>Akshaykalucha.io/</td>
                            <td>What you see</td>
                        </tr>
                        <tr style={ props.isDarknessStore ? {color: "white"} : null }>
                            <td className="lastchild">mailer</td>
                            <td className="lastchild">Akshaykalucha.io/api/mailer</td>
                            <td className="lastchild">	Mailing service secured by JWT</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        isDarknessStore: state.isDark
    }
}

export default connect(mapStateToProps)(SectionBottom)