import React from 'react'
import "../css/footer.css"
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'


export default function Footer2() {
  return (
    <div className='footer' >
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>

        <ul className="social-icon">
            <li className="social-icon__item">
                <a className="social-icon__link" href="#Ronaldo">
                    <BsFacebook />
                </a>
            </li>
            <li className="social-icon__item">
                <a className="social-icon__link" href="#Ronaldo">
                    <BsTwitter />
                </a>
            </li>
            <li className="social-icon__item">
                <a className="social-icon__link" href="#ROnaldo">
                    <BsLinkedin />
                </a>
            </li>
            <li className="social-icon__item">
                <a className="social-icon__link" href="#Ronaldo">
                    <BsInstagram />
                </a>
            </li>
        </ul>
            <ul class="menu">
            <li class="menu__item"><a class="menu__link" href="#Ronaldo">Home</a></li>
            <li class="menu__item"><a class="menu__link" href="#Ronaldo">About</a></li>
            <li class="menu__item"><a class="menu__link" href="#Ronaldo">Services</a></li>
            <li class="menu__item"><a class="menu__link" href="#Ronaldo">Team</a></li>
            <li class="menu__item"><a class="menu__link" href="#Ronaldo">Contact</a></li>
        </ul>
        <p>&copy;2022 RonSupport | All Rights Reserved</p>
    </div>
  )
}

