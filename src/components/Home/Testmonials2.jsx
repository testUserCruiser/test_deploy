import React from 'react'
import './Testmonials2.css'
import { connect } from 'react-redux'

const Testmonials2 = (props) => {
    
    return (
        <div>
            <div style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="testimonials_card">
            <div className="card">
                <input className="input_card" type="radio" name="select" defaultChecked={true} id="slide_1" />
                <input className="input_card" type="radio" name="select" id="slide_2" />
                <input className="input_card" type="radio" name="select" id="slide_3" />
                <input className="input_card"  type="checkbox" id="slideImg"/>

                <div className="slider">
                    <label htmlFor="slide_1" className="slide slide_1"></label>
                    <label htmlFor="slide_2" className="slide slide_2"></label>
                    <label htmlFor="slide_3" className="slide slide_3"></label>
                </div>
                <div className="inner_part">
                    <label htmlFor="slideImg" className="img">
                        <img className="img_1" src="https://c4.wallpaperflare.com/wallpaper/978/131/617/kiz-kulesi-turkey-istanbul-maiden-s-tower-wallpaper-preview.jpg" alt=""/>
                    </label>
                    <div className="content content_1">
                        <div className="title">istanbul</div>
                        <div className="text">
                        Istanbul, a fascinating city built on two Continents, divided by the Bosphorus Strait. This is one of the greatest cities in the world.
                        </div>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="inner_part">
                    <label htmlFor="slideImg" className="img">
                        <img className="img_2" src="https://c4.wallpaperflare.com/wallpaper/649/96/56/ankara-cityscape-night-night-sky-wallpaper-preview.jpg" alt=""/>
                    </label>
                    <div className="content content_2">
                        <div className="title">Ankara</div>
                        <div className="text">
                        Ankara is Turkey's beating heart, second largest city, located in the Central Anatolia region and home to the Grand National Assembly of Turkey.
                        </div>
                        <button>Read More</button>
                    </div>
                </div>
                <div className="inner_part">
                    <label htmlFor="slideImg" className="img">
                        <img className="img_3" src="https://c4.wallpaperflare.com/wallpaper/620/34/558/turkey-izmir-mountains-wallpaper-preview.jpg" alt=""/>
                    </label>
                    <div className="content content_3">
                        <div className="title">izmir</div>
                        <div className="text">
                        Located on the shores of the Aegean Sea, west of the Anatolian Peninsula, İzmir is the third-largest city in Turkey.
                        </div>
                        <button>Read More</button>
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

export default connect(mapStateToProps)(Testmonials2)
