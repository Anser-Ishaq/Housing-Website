import React from 'react'
import "./Broker.css"
import brandOne from "../../assets/brokerBrandOne.png"
import brandTwo from "../../assets/brokerBrandTwo.png"
import brandThree from "../../assets/brokerBrandThree.png"
import brandFour from "../../assets/brokerBrandFour.png"
import brandFive from "../../assets/brokerBrandFive.png"
import brandSix from "../../assets/brokerBrandSix.png"
function Broker() {
    return (
        <div className='broker-main'>
            <div className="broker-main--inner">
                <div className="broker-text">
                    Join the thousands of brokers selling twice as fast on Ten-X !

                </div>

                <div className="broker-brands-main">
                    <div className="broker-brandsL">
                        <div className="broker-brand--logo">
                            <img className='broker-brand--images' src={brandOne} alt="" />
                        </div>
                        <div className="broker-brand--logo">
                            <img className='broker-brand--images' src={brandTwo} alt="" />
                        </div>
                        <div className="broker-brand--logo">
                            <img className='broker-brand--images' src={brandThree} alt="" />
                        </div>
                    </div>

                    <div className="broker-brandsR">

                        <div className="broker-brand--logo">
                            <img className='broker-brand--images' src={brandFour} alt="" />
                        </div>
                        <div className="broker-brand--logo">
                            <img className='broker-brand--images' src={brandFive} alt="" />
                        </div>
                        <div className="broker-brand--logo">
                            <img className='broker-brand--images' src={brandSix} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Broker