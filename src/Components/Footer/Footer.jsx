import React from 'react'
import "./Footer.css"
import footerLogo from "../../assets/footer-logo.svg"
function Footer() {
  return (
    <div className='footer-main'>
        <div className="footer-main--inner">
            <div className="footer-logo--side">
                <div className="footer-logo">
                    <img className='footer-logo--inner' src={footerLogo} alt="" />
                </div>

                <div className="footer-properties">
                    <span>ALL PROPERTIES</span>
                    <span>OFFICE</span>
                    <span>MULTIFAMILY</span>
                    <span>RETAIL</span>
                    <span>HOTEL</span>
                    <span>INDUSTRIAL</span>
                    <span>OTHER</span>
                </div>

                <div className="footer-dashboard">
                    <span>TEN-X DASHBOARD</span>
                    <span>CAREERS</span>
                    <span>ABOUT</span>
                </div>

                <div className="footer-broker">
                    <span>BROKERS</span>
                    <span>SELLERS</span>
                    <span>BUYERS</span>
                </div>

                <div className="footer-contact">
                    <span>CONTACT</span>
                    <span>HELP CENTER</span>
                    <span>13481384034</span>
                    <span>MON-FRI 9AM-9PM</span>
                </div>
            </div>
            <div className="footer-social--side"></div>
        </div>
    </div>
  )
}

export default Footer