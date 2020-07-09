import React, {  } from 'react'
import './featuredwork.css'
// import Aos from 'aos'
import 'aos/dist/aos.css'
import { connect } from 'react-redux'
import AIHASH from '../assets/AI-hashtags.png'
import SPAM from '../assets/SPAM.ppm'
import pathfinding from '../assets/Pathfinding.png'



// let AOS1
// let AOS2
// let AOS3
// let anchorAOS


function FeaturedWork(props) {

    // const [isMobile, setisMobile] = useState(false)
    // console.log(isMobile)


    // if(isMobile===true){
    //     AOS1 = "fade-up"
    //     AOS2 = "fade-left"
    //     AOS3 = "fade-right"
    //     anchorAOS = null

    // }else if(isMobile===false){
    //     AOS1 = "fade-up"
    //     AOS2 = "fade-up"
    //     AOS3 = "fade-up"
    //     anchorAOS = ".container_card"
    // }

    function scalezoom(e){
        console.log("touched")
    }


    // function resize() {
    //     let currentHideNav = (window.innerWidth <= 760);
    //     if (currentHideNav) {
    //         setisMobile(true);
    //     }
    //     else{
    //         setisMobile(false)
    //     }
    // }

    // useEffect(() => {
    //     Aos.init({});
    // }, [])

    // useEffect(() => {
    //     /* eslint-disable */
    //     window.addEventListener("resize", resize.bind(this));
    //     resize();
    // })
    return (
        <div>
            <div style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="container_card">
                <h1 style={ props.isDarknessStore ? {color: "white"} : null } className="featured_heading">Featured work</h1>
                <h3 style={ props.isDarknessStore ? {color: "white"} : null } className="featured_subheading">Side Projects</h3>
                    <div className="card_container">
                    <div className="featured__work">
                        <div style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a", boxShadow: "none"} : null } className="work__card">
                            <div className="card__main-heading">
                                <h1 style={ props.isDarknessStore ? {color: "white"} : null }>
                                    AI-Hashtags
                                </h1>
                                <div onTouchStart={e=>scalezoom(e)} className="card-image">
                                    <picture>
                                        <img src={AIHASH} alt=""/>
                                    </picture>
                                </div>
                                <div className="card__info-footer">
                                    <p style={ props.isDarknessStore ? {color: "white"} : null }>See trends & generate popular tweets using automatic tweet generator tool!</p>
                                </div>
                            </div>
                        </div>
                        <div style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a", boxShadow: "none"} : null } className="work__card">
                            <div className="card__main-heading">
                                <h1 style={ props.isDarknessStore ? {color: "white"} : null }>
                                    SVM Spam Detection
                                </h1>
                                <div className="card-image">
                                    <picture>
                                        <img src={SPAM} alt=""/>
                                    </picture>
                                </div>
                                <div className="card__info-footer">
                                    <p style={ props.isDarknessStore ? {color: "white"} : null }>Take detecting spam emails to another level by running a script on your PC and instantly get spam updates.</p>
                                </div>
                            </div>
                        </div>
                        <div style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a", boxShadow: "none"} : null } className="work__card">
                            <div className="card__main-heading">
                                <h1 style={ props.isDarknessStore ? {color: "white"} : null }>
                                    A* Path Finding visualization
                                </h1>
                                <div className="card-image">
                                    <picture>
                                        <img src={pathfinding} alt=""/>
                                    </picture>
                                </div>
                                <div className="card__info-footer">
                                    <p style={ props.isDarknessStore ? {color: "white"} : null }>This is my first attempt at A* pathfinding. I made this visualization to show the beauty of pathfinding. You can modify all..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }
}


export default connect(mapStateToProps)(FeaturedWork)