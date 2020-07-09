import React from 'react'
import DrawerButton from './DrawerButton'
import classes from './navmobile.module.css'
import Mylogo from './mylogo.svg';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function NavMobile(props) {
        return (
            <div>
            <header style={ props.isDarknessStore ? {backgroundColor: "#212121", borderBottom: "1px solid #2b2a2a"} : null } className={classes.toolbar}>
                <nav className={classes.toolbar__navigation}>
                    <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } className={classes.Nav__Logo__A} src={Mylogo} alt=""/>
                    <div className={classes.toolbar__logo}><Link style={ props.isDarknessStore ? {color: "white"} : null } to="/">Akcosh</Link></div>
                    <div className={classes.spacer}></div>
                </nav>
            </header>
            <DrawerButton drawer={props.drawerHandler} clickbutton={props.click} />
            </div>

        )
    }

const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }
}
export default connect(mapStateToProps)(NavMobile)