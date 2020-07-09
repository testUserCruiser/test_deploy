import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import './footercard.css'
import 'regex'
import { connect } from 'react-redux'
const useStyles = makeStyles((theme) => ({

    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));




function FooterCard(props) {

    let id = ["myInput" ,"outlined-basic"]
    const [Email, setEmail] = useState("Please enter a valid email!")
    
    let errorText = "Email is required!"
    const validEmailRegex = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

    const [showError, setError] = useState(false)
    const [firstFocus, setFirstFocus] = useState(false)

    const [newStyle, setNewStyle] = useState(null)

    function handleChange(e){
        let email = e.target.value
        setNewStyle({
            borderColor: "rgb(229, 57, 53)"
        })
        if(email.length<=1){
            if(firstFocus){
                setFocused(true)
                setError(false)
            }
        }if(email.length>1){
            if(firstFocus){
                if(validEmailRegex.test(email)===false){
                    setFocused(false)
                    setEmail("Please enter a valid email!")
                    setError(true)
                    setNewStyle({
                        borderColor: "rgb(229, 57, 53)"
                    })
                }
            }
            if(firstFocus){
                setFocused(false)
                setError(true)
            }
        }
        if(validEmailRegex.test(email)===true){
            setEmail(null)
            setNewStyle(null)
        }

    }
    const [focused, setFocused] = useState(false)

    function onFocus() {
        document.getElementById("myInput");
    }
    
    function onBlur(e) {
        setFirstFocus(true)
        let email = e.target.value
        if(email.length<=1){
            setFocused(true)
            setError(false)
        }
        else if(validEmailRegex.test(email)===false){
            setFocused(false)
            if(email.length>=1){
                setError(true)
            }
        }
        document.getElementById("myInput");
        if(e.target.value.length <= 0){
            if(showError===false){
                setFocused(true)
            }
        }
    }

    const classesName = useStyles();
    return (
        <div>
            <div style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="card_footer-main">
                <h3 style={ props.isDarknessStore ? {color: "white"} : null } className="footer-heading__card">Subscribe to Akcosh.com</h3>
                <p style={ props.isDarknessStore ? {color: "white"} : null } className="footer-subheading__card">And get the latest articles delivered right to your inbox!</p>
                   <p className="footer__card-error initiat__error">{focused ? errorText : null}</p>
                   <p className="footer__card-error">{showError ? Email : null}</p>
                <form className={classesName.root} noValidate autoComplete="off">
                    <div className="form__content">
                        <input style={newStyle} onChange={e => handleChange(e)} className="form__card-input" onFocus={onFocus.bind(this)} onBlur={e => onBlur(e)} id={id.join(' ')} placeholder="youremail@example.com" />
                        <button className="form__card-button">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }
}

export default connect(mapStateToProps)(FooterCard)
