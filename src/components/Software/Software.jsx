import React from 'react'
import { TableBody, Tableheading } from './content'
import './software.css'
import SectionBottom from './SectionBottom'
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'

function Software(props) {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Akshay Kalucha-Software</title>
            </Helmet>
            <div style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="software__table-div">
                <div className="software__heading">
                <p style={ props.isDarknessStore ? {color: "white"} : null }>Software Repository</p>
                </div>
                <div className="softwareTable">
                    <table className="softwareTab">
                        <thead>
                            <tr style={ props.isDarknessStore ? {color: "white"} : null }>
                                {Tableheading.map(function(heading, index){
                                    return <th key={index} scope="col">{heading}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {TableBody.map((content, index) =>
                            <tr key={index}>
                                <td style={ props.isDarknessStore ? {color: "white", borderRight: "1px solid white"} : null }>{content.title}</td>
                                <td style={ props.isDarknessStore ? {color: "white", borderRight: "1px solid white"} : null }>{content.description}</td>
                                <td style={ props.isDarknessStore ? {color: "white", borderRight: "1px solid white"} : null }>{content.language}</td>
                                <td style={ props.isDarknessStore ? {color: "white", borderRight: "1px solid white"} : null }>{content.created_on}</td>
                                <td style={ props.isDarknessStore ? {color: "white", borderRight: "1px solid white"} : null }>{content.stars}</td>
                                <td style={ props.isDarknessStore ? {color: "white"} : null }>{content.updates}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <SectionBottom />
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isDarknessStore: state.isDark
    }
}

export default connect(mapStateToProps)(Software)
