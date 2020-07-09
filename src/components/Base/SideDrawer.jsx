import React from 'react'
import './sideDrawer.css'
import Darkness from './darkness.svg'
import { connect } from 'react-redux'
import * as actionTypes from '../Store/actions';
import Brightness from './brightness.svg';
import { NavLink } from 'react-router-dom'



 const SideDrawer = props => {

    let drawerClasses = 'side-drawer'
    if(props.showSidedrawer){

        drawerClasses = 'side-drawer open'
    }

    const handleDarkMode = () => {
        console.log("making dark")
        props.setIsDark(!props.isDarknessStore)
    }

    return (
        <div onClick={props.unshowsideDrawer}>
            <nav style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null } className={drawerClasses}>
                <ul>
                    <li><NavLink style={ props.isDarknessStore ? {color: "white"} : null } exact to="/" activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>Home</NavLink></li>
                    <li><NavLink style={ props.isDarknessStore ? {color: "white"} : null } to="/about" activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>About</NavLink></li>
                    <li><NavLink style={ props.isDarknessStore ? {color: "white"} : null } to="/blog" activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>Blog</NavLink></li>
                    <li><NavLink style={ props.isDarknessStore ? {color: "white"} : null } to="/software" activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>Software</NavLink></li>
                    <li><NavLink style={ props.isDarknessStore ? {color: "white"} : null } to="/contact" activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}}>Contact</NavLink></li>
                    <img className="side-drawer__Darkness" onClick={handleDarkMode} src={props.isDarknessStore ? Brightness : Darkness} alt=""/>                       
                </ul>
            </nav>
        </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)