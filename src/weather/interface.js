import React,{useState} from 'react'
import './style.css'

const Interface = () => {
    const [state, setstate] = useState();
    const getWeatherInfo = async () =>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=35dd5dc47c02eb4a6a1da61cf4f3eae7`;
            
        } catch(error){
            console.log(error);
        }
    };
    return (
        <>
            <div className="background">
                <div className="container">
                    <div className="search">
                        <input type="search" className='search2' onChange={(e)=> setstate(e.target.value)} value={state} />
                        <button className='searchBtn' onClick={getWeatherInfo}>Search</button>
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
                                <p className="dateData">{new Date().toLocaleString()}</p>
                                {/* <p className="timeData"></p> */}
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
