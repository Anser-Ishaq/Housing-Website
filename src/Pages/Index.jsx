import React from 'react'
import Header from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import Properties from '../Components/Properties/Properties'
import Platform from '../Components/Platform/Platform'
import Broker from '../Components/Broker/Broker'
import Estate from '../Components/Estate/Estate'
import Tenx from '../Components/TenX/Tenx'
import Footer from '../Components/Footer/Footer'

function Index() {
    return (
        <div>
            <Header/>
            <Home/>
            <Properties/>
            <Platform/>
            <Broker/>
            <Estate/>
            <Tenx/>
            <Footer/>
        </div>
    )
}

export default Index