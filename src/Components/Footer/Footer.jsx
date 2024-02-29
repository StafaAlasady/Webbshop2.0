import React from 'react'
import './Footer.css'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import TwitterLineIcon from 'remixicon-react/TwitterLineIcon'
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import PinterestLineIcon from 'remixicon-react/PinterestLineIcon'
import WhatsupLineIcon from 'remixicon-react/WhatsappLineIcon'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'
import MailAddLineIcon from 'remixicon-react/MailAddLineIcon'
import NoBackLogo from '../Assets/No-back-logo.svg'


export const Footer = () => {
  return (
   <footer>
            <div className="footer-content">
                <div className="col-text">
                <img className="footer_logo-image" src={NoBackLogo} alt='Logo'/>
                    <p>Unleash your imagination and discover boundless artistic possibilities through our AI-powered platform.</p>
                </div>
                <div className="col">
                    <h3>Office <div className="underline-anim"><span></span></div></h3>
                    <p>Avenida Óscar, 6, 6º A</p>
                    <p>Illes Balears, Feliciano Baja</p>
                    <p>zip code:17177, Spain</p>
                    <p className="email-id">AI.Art@outlook.com</p>
                    <h4>+34 - 0123456789</h4>
                </div>

                <div className="col">
                    <h3>Links <div className="underline-anim"><span></span></div></h3>
                    <ul>
                        <li className="footer-li"><a className="footer-links" href="/">Home</a></li>
                        <li className="footer-li"><a className="footer-links" href="/explore">Explore</a></li>
                        <li className="footer-li"><a className="footer-links" href="/marketplace">MarketPlace</a></li>
                        <li className="footer-li"><a className="footer-links" href="/Contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3>NewsLetter <div className="underline-anim"><span></span></div></h3>
                    <form className="footer-form">
                        <MailAddLineIcon className="ri-mail-add-line"/>
                        <input className="footer-input" type="email" placeholder="Enter your email" required />
                        <button className="footer-button" type="submit"><ArrowRightLineIcon className="ri-arrow-right-line"/></button>
                    </form>
                    <div className="social-icons">
                        <FacebookCircleLineIcon className=" ico ri-facebook-circle-line"/>
                        <TwitterLineIcon className="ico ri-twitter-line"/>
                        <InstagramLineIcon className="ico ri-instagram-line"/>
                        <PinterestLineIcon className="ico ri-pinterest-line"/>
                        <WhatsupLineIcon className="ico ri-whatsapp-line"/>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright">© PixelProAi. All rights reserved 2024.</p>
        </footer>
  )
}
