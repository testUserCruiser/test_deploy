import React, { useState, useEffect } from 'react'
import ReactQuill from 'react-quill'
import './quill.bubble.css';
import './BlogContent.css'
import axios from 'axios';
import Loading from '../Home/Loading'
import {Helmet} from "react-helmet";
import { connect } from 'react-redux'
import * as actionTypes from '../Store/actions';



function BlogContent(props) {




function ConvLstToDate(arr){
    /*eslint-disable*/
    let dateStr = ''
    if(arr[1]===1){ return dateStr=`January ${arr[0]}, ${arr[2]}`}else if(arr[1]===2){ return dateStr=`Feb ${arr[0]}, ${arr[2]}`}
    else if(arr[1]===3){ return dateStr=`March ${arr[0]}, ${arr[2]}`}else if(arr[1]===4){ return dateStr=`April ${arr[0]}, ${arr[2]}`}
    else if(arr[1]===5){ return dateStr=`May ${arr[0]}, ${arr[2]}`}else if(arr[1]===6){ return dateStr=`June ${arr[0]}, ${arr[2]}`}
    else if(arr[1]===7){ return dateStr=`July ${arr[0]}, ${arr[2]}`}else if(arr[1]===8){ return dateStr=`August ${arr[0]}, ${arr[2]}`}
    else if(arr[1]===9){ return dateStr=`September ${arr[0]}, ${arr[2]}`}else if(arr[1]===10){ return dateStr=`October ${arr[0]}, ${arr[2]}`}
    else if(arr[1]===11){ return dateStr=`November ${arr[0]}, ${arr[2]}`}else if(arr[1]===12){ return dateStr=`December ${arr[0]}, ${arr[2]}`}
}


    const [BlogData, SetBlogData] = useState(null)
    const [helmet, setHelmet] = useState(null)
    const [metaImage, setMetaImage] = useState('')
    const [title, setTitle] = useState(null)

    let blogTitlt = ''
    useEffect(()=>{
        /*eslint-disable*/
        var blogTitleUrl = document.location.pathname.substring(document.location.pathname.lastIndexOf('/') + 1)
        // console.log(blogTitleUrl)
        blogTitlt = blogTitleUrl
        let titlearr = blogTitlt.split('-')
        blogTitlt = titlearr.join(' ')
        // console.log(blogTitlt)
        axios.get(`https://akshayreactportfoliobackend.herokuapp.com/api/v1/backend1/test1/${blogTitlt}/`)
        .then(res => {
            let genricDate = res.data.Data.Created.substring(0, res.data.Data.Created.indexOf('T')).split('-').reverse().join('/')
            let dateArr = res.data.Data.Created.substring(0, res.data.Data.Created.indexOf('T')).split('-').reverse()
            dateArr = dateArr.map(Number)
            genricDate = ConvLstToDate(dateArr)
            let resData = {
                "Date": genricDate,
                "deltaData": JSON.parse(res.data.Data.deltaData),
                "tags": res.data.Data.tags
            }
            SetBlogData(resData)
        })
        .catch(err=>console.log(err))
        }, [])

        if(BlogData != null){
            window.addEventListener('load', function(){
                let imgtag = document.getElementsByClassName("ql-editor")
                let imgLink = imgtag[0].querySelectorAll('p img')[0].currentSrc
                console.log(imgLink)
                setMetaImage(imgLink)
                setHelmet(true)
                setTitle(true)
                props.setPageTitle("Akshay Kalucha-Blog")
                console.log("title set action dispatcg=hed")
            })  
        }
  
    return (
        <div>
            {helmet ?
            <Helmet>
                <meta charSet="utf-8" />
                <title>{props.pageTitle}</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="twitter:img" content={metaImage} />
            </Helmet>
            : null
            }
            {
            BlogData ?
            <div className="textView">
                <div className="tags__views">
                    <div className="tagss">
                        {BlogData.tags.map((tag) => 
                            <div key={Math.random()} style={
                                tag==="gatsby" ? {backgroundColor: '#663399'}
                                : tag==="react" ? {backgroundColor: '#61dafb'}
                                : tag==="dev" ? {backgroundColor: '#263238'}
                                : tag==="travel" ? {backgroundColor: '#ff9800'}
                                : tag==="bio" ? {backgroundColor: '#f44336'}
                                : tag==="tech" ? {backgroundColor: '#666cdc'}
                                : tag==="stack" ? {backgroundColor: "#8bc34a"}
                                : null
                        } className="tagsBlog"><a className="tagLink" href="/">{tag}</a></div>
                        )}
                    </div>
                </div>
                <div className="dates_views">
                    <p><i>{BlogData.Date}</i></p>
                </div>
                <ReactQuill
                value={BlogData.deltaData}
                modules={{syntax:true}}
                readOnly={true}
                theme={"bubble"}
                />
            </div>
            : 
            <div className="loadingDIv">
                <Loading />
            </div> 
            }


        </div>
    )
}


const mapStateToProps = state => {
    return {
        pageTitle: state.title
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPageTitle: (value) => dispatch({type: actionTypes.SET_TITLE, param: value}),
    }}


export default connect(mapStateToProps, mapDispatchToProps)(BlogContent)