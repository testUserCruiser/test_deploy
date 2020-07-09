import React, { useEffect } from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile';
import SideDrawer from '../Base/SideDrawer';
import { connect } from 'react-redux'
import * as actionTypes from '../Store/actions';
import Backdrop from '../Base/Backdrop';





function Nav(props) {


    const drawerToggleClickHandler = () => {
        props.setDrawer(!props.DrawerOpenStore)
    }

    const backDropClickHandler = () => {
        props.setDrawer(false)

    }

    function resize() {
        let currentHideNav = (window.innerWidth <= 768);
        if (currentHideNav) {
            props.setIsMobile(true)
        }
        else{
            props.setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", resize.bind(this));
        resize();
    })

    let backDrop;

    if(props.DrawerOpenStore){
        backDrop = <Backdrop click ={backDropClickHandler} />
    }


        if(props.isMobileStore===false){
            return(
                <div>
                    <NavDesktop />
                    {backDrop}
                </div>
            )
        }else{
            return(
                <div>
                <NavMobile drawerHandler={props.DrawerOpenStore} click={drawerToggleClickHandler} />
                {backDrop}
                <SideDrawer unshowsideDrawer={backDropClickHandler} showSidedrawer={props.DrawerOpenStore}  />
                </div>
            )
        }
    }

    const mapStateToProps = state => {
        return {
            isMobileStore: state.isMobile,
            DrawerOpenStore: state.sideDrawerOpen,
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            setIsMobile: (value) => dispatch({type: actionTypes.SET_MOBILE, param: value}),
            setDrawer: (value) => dispatch({type: actionTypes.SHOW_DRAWER, param: value})
        }}
    
    export default connect(mapStateToProps, mapDispatchToProps)(Nav)