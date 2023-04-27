import React from 'react'
import "./Home.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';
function Home() {
    return (
        <div className='home-main'>
            <div className="home-main--inner">
                <div className="home-text">
                    <div className="home-text--inner">
                        <span className='text-capital'>the smarter, faster, better</span>
                        <span> way to transact commercial real estate</span>
                    </div>
                </div>
                <div className="home-fields">
                    
                    <div className="field-input">
                        <div className="field-input--logo"><BsSearch /></div>
                        <input className='field-input--text' type="text" placeholder='Search City, State, Zip or Address' />
                    </div>
                    <div className="field-dropdown">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                ALL PROPERTY TYPES
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">oFFICE</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Multifamily</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Retail</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Hotel</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="field-search pc">
                        <button className='field-search--btn'>Search
                            <AiOutlineArrowRight className='field-searcch--logo' />

                        </button>

                    </div>
                    <div className="field-search mb">
                        <button className='field-search--btn'>
                            <AiOutlineArrowRight className='field-searcch--logo' />

                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home