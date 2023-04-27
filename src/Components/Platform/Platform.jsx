import React from 'react'
import "./Platform.css"
function Platform() {
    return (
        <>
            <div className='platform-main'>
                <div className="platform-main--inner">
                    <div className="platform-title">The Power Of The Platform</div>
                    <div className="platform-card">
                        <div className="platform-buy">
                            <div className=" platform-card--title">Buy & sell faster</div>
                            <div className="platform-card--text">Ten-X connects buyers and sellers with a more convenient, faster transaction & closing process.</div>
                            <button className='platform-card--btn'>GET CONNECTED</button>
                        </div>
                        <div className="platform-reach">
                            <div className=" platform-card--title">Give property reach</div>
                            <div className="platform-card--text">Brokers enjoy faster transactions with powerful tools, data, and global connections, all delivered from the dashboard or mobile phone.</div>
                            <button className='platform-card--btn'>EXPLORE THE TEN-X DASHBOARD</button>
                        </div>
                        <div className="platform-invest">
                            <div className=" platform-card--title">Get more certainty</div>
                            <div className="platform-card--text platform_work--text">Investors find better opportunities with Ten-X powerful CRE data and exciting online bidding experience.</div>
                            <button className='platform-card--btn'>START INVESTING</button>
                        </div>
                    </div>
                </div>
                <div className="platform_work-main--inner">
                    <div className="platform-title">Put the Ten-X platform to work for you.</div>
                    <div className="platform-card">
                        <div className="platform-buy">
                            <div className=" platform-card--title platform_work--title">For Brokers</div>
                            <div className=" platform-card--title_tag">Succeed with built-in broker benefits</div>
                            <div className="platform-card--text platform_work--text">Achieve a quick, lucrative close by tapping into full-service transaction resources at no cost to you. Leverage Ten-X’s end-to-end platform and spend more time building relationships.</div>
                            <button className='platform-card--btn'>CLOSE DEALS FASTER</button>
                        </div>
                        <div className="platform-reach">
                            <div className=" platform-card--title platform_work--title">For Buyers</div>
                            <div className=" platform-card--title_tag">Find new investment opportunities</div>
                            <div className="platform-card--text platform_work--text">Ten-X takes the hassle, stress and uncertainty out of buying commercial real estate. As the leading end-to-end transaction platform, Ten-X offers buyers access to new opportunities and a simplified transaction.
</div>
                            <button className='platform-card--btn'>FIND YOUR INVESTMENT</button>
                        </div>
                        <div className="platform-invest">
                            <div className=" platform-card--title platform_work--title">For Sellers</div>
                            <div className=" platform-card--title_tag">Sell your commercial property and maximize value</div>
                            <div className="platform-card--text platform_work--text">Achieve a successful transaction by reaching the largest buying pool in the world. Put the Ten-X platform to work for you, ensure a successful sale, and let us help your broker facilitate a quick close on your terms.
</div>
                            <button className='platform-card--btn'>LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Platform