import React, { Component } from 'react';
import './navdesktop.css'
import Mylogo from './mylogo.svg';
import Darkness from './darkness.svg';
import Brightness from './brightness.svg';
import { connect } from 'react-redux'
import * as actionTypes from '../Store/actions';
import { NavLink } from 'react-router-dom'

class NavDesktop extends Component {
//759090

    componentDidMount(){
        // console.log(this.props.isDarknessStore, "this is darknes level")
    }

    handleDarkMode(e){
        e.preventDefault();
        console.log("making dark")
        this.props.setIsDark(!this.props.isDarknessStore)
    }

    render() {
        return (
            <div>
            <header className="toolbar" style={ this.props.isDarknessStore ? {backgroundColor: "#212121"} : null }>
                <nav className="toolbar__navigation">
                    <div className="toolbar__toggle-button">
                    </div>
                    <img className="Nav__Logo-A" style={ this.props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } src={Mylogo} alt=""/>
                    <div className="toolbar__logo"><NavLink to="/" style={ this.props.isDarknessStore ? {color: "white"} : null }>Akshay Kalucha</NavLink></div>
                    <div className="spacer"></div>
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li><NavLink style={ this.props.isDarknessStore ? {color: "white"} : null } exact to="/" activeStyle={ this.props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>Home</NavLink></li>
                            <li><NavLink style={ this.props.isDarknessStore ? {color: "white"} : null } to="/about" activeStyle={ this.props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>About</NavLink></li>
                            <li><NavLink style={ this.props.isDarknessStore ? {color: "white"} : null } to="/blog" activeStyle={ this.props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>Blog</NavLink></li>
                            <li><NavLink style={ this.props.isDarknessStore ? {color: "white"} : null } to="/software" activeStyle={ this.props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>Software</NavLink></li>
                            <li><NavLink style={ this.props.isDarknessStore ? {color: "white"} : null } to="/contact" activeStyle={ this.props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>Contact</NavLink></li>
                            <a href="/">
                            <img className="nav__Darkness" onClick={e => this.handleDarkMode(e)} src={this.props.isDarknessStore ? Brightness : Darkness} alt=""/>
                            </a>
                        </ul>
                    </div>
                </nav>
            </header>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }}

const mapDispatchToProps = dispatch => {
    return {
        setIsDark: (value) => dispatch({type: actionTypes.SET_DARK, param: value}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavDesktop)