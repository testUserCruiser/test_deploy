import React, { useState, useEffect } from 'react';
import './blogarticle.css'
import { connect } from 'react-redux'
import { cardData } from './BlogArticleContent'
import { NavLink } from 'react-router-dom'

// function WordCount(str) { 
//     return str.split(" ").length;
// }


function BlogArticle(props) {

    const[reactTag, setReactTag] = useState(null)
    const[gatsbyTag, setGatsbyTag] = useState(null)
    const[devTag, setDevTag] = useState(null)
    const[travelTag, setTravelTag] = useState(null)
    const[bioTag, setBioTag] = useState(null)
    const[stackTag, setStackTag] = useState(null)
    const[techTag, setTechTag] = useState(null)

    const [cardContent, setCardContent] = useState(cardData)

    useEffect(()=> {
        /* eslint-disable */
        cardContent.map((content) => 
            content.tags.map((tag) => {
                if(tag==="react"){
                    setReactTag({
                        backgroundColor: '#61dafb'
                    })
                }else if(tag==="dev"){
                    setDevTag({
                        backgroundColor: '#263238'
                    })
                }else if(tag==="gatsby"){
                    setGatsbyTag({
                        backgroundColor: '#663399'
                    })
                }else if(tag==="travel"){
                    setTravelTag({
                        backgroundColor: '#ff9800'
                    })
                }else if(tag==="bio"){
                    setBioTag({
                        backgroundColor: '#f44336'
                    })
                }else if(tag==="tech"){
                    setTechTag({
                        backgroundColor: '#666cdc'
                    })
                }else if(tag==="stack"){
                    setStackTag({
                        backgroundColor: '#8bc34a'
                    })
                }
            })
        )
        for (let i = 0; i<cardContent.length; i++){
            let res = cardContent[i].title.slice(0, 17)
            let newTitle = res + '...'
            cardContent[i]["DesktopTitle"] = newTitle
        }
        setCardContent([...cardContent])
        // console.log(cardContent)
    }, [])

    useEffect(() => {
        /* eslint-disable */
        if(props.isMobileStore){
            // console.log("yes mobile blog")
            for (let i = 0; i<cardContent.length; i++){
                let res1 = cardContent[i].title.slice(0, 20)
                let newTitle = res1 + '...'
                cardContent[i]["MobileTitle"] = newTitle
                let res = cardContent[i].content.slice(0, 29)
                let newContent = res + '...'
                cardContent[i]["Mobilecontent"] = newContent
                // console.log(newContent)
            }
            setCardContent([...cardContent])
        }
        // console.log(cardContent)
    },[props.isMobileStore])


    return(
            <div style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null }>
                <div className="blogArticle__main">
                    <div className="main-component">
                        <div className="headings">
                            <h1 style={ props.isDarknessStore ? {color: "white"} : null }>Popular Articles</h1>
                        </div>
                        <div className="cards">
                        {cardContent.map((content) => 
                            <div style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a"} : null } key={Math.random()} className="card-content">
                                <NavLink style={{textDecoration: "none",}} to={`blog/${content.link}`}>
                                {/* <a style={{textDecoration: "none",}} href={`blog/${content.link}`}> */}
                                <div className="img-card">
                                    <div className="thumbnail">
                                        <img src={content.thumbnail} alt=""/>
                                    </div>
                                </div>
                                </NavLink>
                                <div className="mov__view">
                                    <div className="card__heading">
                                        <h1 style={ props.isDarknessStore ? {color: "white"} : null }>{props.isMobileStore ? content.MobileTitle : content.DesktopTitle}</h1>
                                    </div>
                                    <div className="card__intro">
                                        <p style={ props.isDarknessStore ? {color: "white"} : null }>{props.isMobileStore ? content.Mobilecontent : content.content}</p>
                                    </div>
                                    <div className="tags__view">
                                        <div className="tags">
                                            {content.tags.map((tag) => 
                                                <div key={Math.random()} style={
                                                    tag==="gatsby" ? gatsbyTag
                                                    : tag==="react" ? reactTag
                                                    : tag==="dev" ? devTag
                                                    : tag==="tech" ? techTag
                                                    : tag==="stack" ? stackTag
                                                    : tag==="travel" ? travelTag
                                                    : tag==="bio" ? bioTag
                                                    : null
                                                } className="tag"><a className="tagLink" href="/">{tag}</a></div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="dates__view">
                                            <i style={ props.isDarknessStore ? {color: "white"} : null }>{content.date}</i>
                                    </div>
                                </div>                                
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
    )

}

const mapStateToProps = state => {
    return {
        isMobileStore: state.isMobile,
        isDarknessStore: state.isDark
    }
}

export default connect(mapStateToProps)(BlogArticle)