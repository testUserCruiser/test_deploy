import React from 'react'
import FooterCard from './FooterCard'
import mylogo from './mylogo.svg'
import './footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <FooterCard />
            <section className="footer__main">
                <div className="branding__footer">
                    <ul className="brand__ul">
                        <li>
                        <img src={mylogo} alt=""/>
                            <NavLink to="/">
                            Akcosh
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="NavLinks__ul">
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/software">Software</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <ul className="social__media-ul">
                        <li className="social__media__heading">Follow me on</li>
                        <li>
                            <a href="/">
                            <i className="SM__links-snapchat fab fa-snapchat"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <i className="SM__links-twitter fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <i className="SM__links-github fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <i className="SM__links-linkedin fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                            <i className="SM__links-instagram fab fa-instagram"></i>                            
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Footer
