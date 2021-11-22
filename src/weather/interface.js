import React from 'react'
import './style.css'

const Interface = () => {
    return (
        <>
            <div className="background">
                <div className="container">
                    <div className="search">
                        <input type="search" className='search2' />
                        <button className='searchBtn'>Search</button>
                    </div>
                    <div className="body">
                        <div className="weatherLogo">Logo</div>
                        {/* middle */}
                        <div className="infoWeather">
                            <div className="tempInfo temp1">
                                <p className="tempText">24.3</p>
                                <div className="cloudText">
                                    <p className="cloudInfo">Cloud</p>
                                    <p className="cityName">dhaka, Bangladesh</p>
                                </div>
                            </div>
                            <div className="dateInfo temp1">
                                <p className="dateData">7/11/12,</p>
                                <p className="timeData">3:30:32 PM</p>
                            </div>
                        </div>
                        {/* footer */}
                        <div className="footerInfo">
                            <div className="footerDetail">
                                <div className="logo1">logo</div>
                                <div className="text2">
                                    <p className='timetext2'>19:12 PM</p>
                                    <p className='timetext2 timetext'>Sunset</p>
                                </div>
                            </div>
                            <div className="footerDetail">
                                <div className="logo1">logo</div>
                                <div className="text2">
                                    <p className='timetext2'>19:12 PM</p>
                                    <p className='timetext2 timetext'>Sunset</p>
                                </div>
                            </div>
                            <div className="footerDetail">
                                <div className="logo1">logo</div>
                                <div className="text2">
                                    <p className='timetext2'>19:12 PM</p>
                                    <p className='timetext2 timetext'>Sunset</p>
                                </div>
                            </div>
                            <div className="footerDetail">
                                <div className="logo1">logo</div>
                                <div className="text2">
                                    <p className='timetext2'>19:12 PM</p>
                                    <p className='timetext2 timetext'>Sunset</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interface
