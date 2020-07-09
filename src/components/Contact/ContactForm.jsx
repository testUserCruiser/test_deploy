import React, { Component } from 'react'
import './contactform.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import 'regex'
import { connect } from 'react-redux'
import {Helmet} from "react-helmet";



const validEmailRegex = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);


class ContactForm extends Component {

    state={
        name: "",
        email: "",
        message: "",
        submitClicked: false,
        success: false,
        errorMessage: {
            nameError: "",
            emailError: "",
            messageError: "",
            validEmail: null
        },
        firstFocus: false,
        setNewStyleName: {
            borderColor: null
        },
        setNewStyleMessage: {
            borderColor: null
        },
        setNewStyle: {
            borderColor: null
        }
    }
    

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.name==="name"){
            let name = e.target.value
            this.setState({
                setNewStyleName: {
                    borderColor: null
                },
            })
            if(name.length===0){
                this.setState({
                errorMessage: {
                    ...this.state.errorMessage,
                    nameError: "Name is required",
                }
                })
            }
            if(name.length>1){
                this.setState({
                errorMessage: {
                    ...this.state.errorMessage,
                    nameError: "",
                }
                })
            }
        }
        if(e.target.name==="message"){
            let message = e.target.value
            this.setState({
                setNewStyleMessage: {
                    borderColor: null
                },
            })
            if(this.state.firstFocus){
                if(message.length>1){
                    this.setState({
                        errorMessage: {
                            ...this.state.errorMessage,
                            messageError: ""
                        }
                    })
                }
            }
        }
        if(e.target.name==="email"){
            let email = e.target.value
            this.setState({
                email: email
            })
            console.log(email)
            if(email.length>=2){
                if(this.state.firstFocus){
                    if(validEmailRegex.test(email)===false){
                        this.setState({
                            ...this.state,
                            email: email,
                            errorMessage: {
                                ...this.state.errorMessage,
                                validEmail: "Please enter a valid email!",
                                emailError: ""
                            },
                            setNewStyle: {
                                borderColor: "rgb(229, 57, 53)"
                            }
                        })
                    }
                    if(email.length<=2){
                        this.setState({
                            ...this.state,
                            email: email,
                            errorMessage: {
                                ...this.state.errorMessage,
                                emailError: "Email is required",
                                validEmail: null
                            }
                        })
                    }
                }
                if(validEmailRegex.test(email)===true){
                    this.setState({
                        ...this.state,
                        email: email,
                        errorMessage: {
                            ...this.state.errorMessage,
                            validEmail: null
                        },
                        setNewStyle: {
                            borderColor: null
                        }
                    })
                }
            }
        }
    }

    formSubmit(e){
        e.preventDefault();
        if(this.state.name.length >= 1 && this.state.message.length >=1 && validEmailRegex.test(this.state.email)===false){
            alert('invalid email')
            return
        }
        if(this.state.name.length >= 1 && this.state.email.length === 0 && this.state.message.length === 0){
                this.setState({
                    errorMessage:{
                        ...this.state.errorMessage,
                        nameError: "",
                        emailError: "Email is required",
                        messageError: "Message is required"
                    },
                    setNewStyle: {
                        ...this.state.setNewStyle,
                        borderColor: "rgb(229, 57, 53)"
                    },
                    setNewStyleMessage: {
                        ...this.state.setNewStyleMessage,
                        borderColor: "rgb(229, 57, 53)"
                    }

                })
        }else if(this.state.name.length >= 1 && this.state.email.length >= 1 && this.state.message.length <= 1){
            console.log("yes 2")
            this.setState({
                errorMessage:{
                    ...this.state.errorMessage,
                    nameError: "",
                    emailError: "",
                    messageError: "Message is required"
                },
                setNewStyleName: {
                    ...this.state.setNewStyleName,
                    borderColor: null
                },
                setNewStyle: {
                    ...this.state.setNewStyle,
                    borderColor: null
                },
                setNewStyleMessage: {
                    ...this.state.setNewStyleMessage,
                    borderColor: "rgb(229, 57, 53)"
                }

            })
            return
        }else if(this.state.name.length === 0 && this.state.email.length === 0 && this.state.message.length >= 1){
            console.log("yes")
            this.setState({
                errorMessage:{
                    ...this.state.errorMessage,
                    nameError: "Name is required",
                    emailError: "Email is required",
                    messageError: ""
                },
                setNewStyleName: {
                    ...this.state.setNewStyleName,
                    borderColor: "rgb(229, 57, 53)"
                },
                setNewStyle: {
                    ...this.state.setNewStyle,
                    borderColor: "rgb(229, 57, 53)"
                }
            })
            return
        }
        else if(this.state.name.length <= 1 || this.state.email.length <= 1 || this.state.message.length <= 1){
            console.log('please fill the fields')
            this.setState({
                ...this.state,
                firstFocus: true,
                errorMessage: {
                    ...this.state.errorMessage,
                    nameError: "Name is required",
                    emailError: "Email is required",
                    messageError: "Message is required"
                },
                setNewStyle: {
                    ...this.state.setNewStyle,
                    borderColor: "rgb(229, 57, 53)"
                },
                setNewStyleName: {
                    ...this.state.setNewStyleName,
                    borderColor: "rgb(229, 57, 53)"
                },
                setNewStyleMessage: {
                    ...this.state.setNewStyleMessage,
                    borderColor: "rgb(229, 57, 53)"
                }
            })
        }else{
            this.setState({
                ...this.state,
                submitClicked: true
            })
            console.log('form submit in action')
            setTimeout(() => {
                this.setState({
                    success: true,
                    submitClicked: false,
                })
            }, 4000)
        }
    }

    goBack(e){
        console.log('going back')
        this.setState({
            name: "",
            email: "",
            message: "",
            submitClicked: false,
            success: false,
            errorMessage: {
                nameError: "",
                emailError: "",
                messageError: "",
                validEmail: null
            },
            firstFocus: false,
            setNewStyleName: {
                borderColor: null
            },
            setNewStyleMessage: {
                borderColor: null
            },
            setNewStyle: {
                borderColor: null
            }
        })
    }
    onFocusName() {
        document.getElementById("myInput");
    }

    onBlurName(e) {
        console.log(e.target.value.length)
        if(e.target.value<=1){
            this.setState({
                firstFocus: true,
                errorMessage: {
                    ...this.state.errorMessage,
                    nameError: "Name is required"
                },
                setNewStyleName: {
                    ...this.state.setNewStyleName,
                    borderColor: "rgb(229, 57, 53)"
                } 
            })
        }
        else if(e.target.value.length>1){
            this.setState({
                firstFocus: true,
                errorMessage: {
                    ...this.state.errorMessage,
                    nameError: ""
                },
                setNewStyleName: {
                    ...this.state.setNewStyleName,
                    borderColor: null
                }  
            })
        }
    }
    onFocusEmail() {
        document.getElementById("myInput");
    }

    onBlurEmail(e) {
        if(validEmailRegex.test(e.target.value)===true){
            this.setState({
                errorMessage: {
                    ...this.state.errorMessage,
                    emailError: ""
                },
            })
            return
        }
        if(this.state.errorMessage.validEmail !== null){
            this.setState({
                errorMessage: {
                    ...this.state.errorMessage,
                    emailError: ""
                },
                setNewStyle: {
                    borderColor: "rgb(229, 57, 53)"
                }
            })
        }
        else{
            this.setState({
                firstFocus: true,
                errorMessage: {
                    ...this.state.errorMessage,
                    emailError: "Email is required"
                },
                setNewStyle: {
                    borderColor: "rgb(229, 57, 53)"
                }
            })
        }
    }

    onFocusMessage() {
        document.getElementById("myInput");
    }

    onBlurMessage(e) {
        if(e.target.value.length>=1){
            this.setState({
                errorMessage: {
                    ...this.state.errorMessage,
                    emailError: ""
                },
            })
            return
        }
        this.setState({
            firstFocus: true,
            errorMessage: {
                ...this.state.errorMessage,
                messageError: "Message is required"
            },
            setNewStyleMessage: {
                ...this.state.setNewStyleMessage,
                borderColor: "rgb(229, 57, 53)"
            } 
        })
    }


    render() {

        let progress
        if(this.state.submitClicked){
            progress = <CircularProgress />
        }

        if(this.state.success===true){
            return(
                <div>
                    <div style={ this.props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="goBack">
                        <h1 style={ this.props.isDarknessStore ? {color: "white"} : null } className="confirmation__heading">Sent email successfully</h1>
                        <button className="back__button" onClick={e => this.goBack(e)}>Back</button>
                    </div>
                </div>
            )
        }
        else{
            return (
                <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Akshay Kalucha-Contact</title>
                </Helmet>
                    <div style={ this.props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="contactForm__main">
                        <div className="contactForm">
                            <h4 style={ this.props.isDarknessStore ? {color: "white"} : null } className="form-heading">
                                Feel free to email me via
                                <a className="my__email" href="akshay23l@hotmail.com" target="_top">akshay23l@hotmail.com"</a>
                            </h4>
                            <p style={ this.props.isDarknessStore ? {color: "white"} : null } className="form__para">Or fill in the contact form down below</p>
                            <form onSubmit={ e => this.formSubmit(e)} method="POST"  className="form-main">
                                <div className="fullname">
                                    <label style={ this.props.isDarknessStore ? {color: "white"} : null } htmlFor="name" aria-label="please insert your name">
                                        Full name: <br/>
                                        <input style={this.state.setNewStyleName.borderColor ? this.state.setNewStyleName : null} onChange={e => this.handleChange(e)}  onFocus={this.onFocusName} onBlur={e => this.onBlurName(e)} value={this.state.name} className="fillnameLabel" type="text" name="name" id="name" />
                                    </label>
                                    <div className="error__message__fullname">
                                        {this.state.errorMessage.nameError.length>1 ? this.state.errorMessage.nameError : null}
                                    </div>
                                </div>
                                <div className="emai">
                                    <label style={ this.props.isDarknessStore ? {color: "white"} : null } htmlFor="email" aria-label="please insert your email">
                                        Your email: <br/>
                                        <input style={this.state.setNewStyle.borderColor ? this.state.setNewStyle : null} onChange={e => this.handleChange(e)}  onFocus={this.onFocusEmail} onBlur={e => this.onBlurEmail(e)} value={this.state.email} className="emailLabel" type="text" name="email" id="email" />
                                    </label>
                                    <div className="error__message__email">
                                        {this.state.errorMessage.emailError.length>1 ? this.state.errorMessage.emailError : null}
                                        {this.state.errorMessage.validEmail ? this.state.errorMessage.validEmail : null}
                                    </div>
                                </div>
                                <div className="message">
                                    <label style={ this.props.isDarknessStore ? {color: "white"} : null } htmlFor="name" aria-label="please insert your message">
                                        Message: <br/>
                                        <textarea style={this.state.setNewStyleMessage.borderColor ? this.state.setNewStyleMessage : null} onChange={e => this.handleChange(e)} onFocus={this.onFocusMessage} onBlur={e => this.onBlurMessage(e)} value={this.state.message} className="messageLabel" type="text" name="message" id="message" />
                                    </label>
                                    <div className="error__message__message">
                                        {this.state.errorMessage.messageError.length>1 ? this.state.errorMessage.messageError : null}
                                    </div>
                                </div>
                                <div className="submit__button">
                                    <button type="submit" className="submitButton" name="submit" id="">Send</button>
                                </div>
                            </form>
                        </div>
                        <div className="progressIcon">
                            {progress}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        isDarknessStore: state.isDark
    }}


export default connect(mapStateToProps)(ContactForm)