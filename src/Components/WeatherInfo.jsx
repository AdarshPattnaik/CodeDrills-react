import React from "react";

// Importing Media:
import ClearDay from "../React-Media/clear-day.mp4";
import CloudyDay from "../React-Media/cloudy-day.mp4";
import HazeDay from "../React-Media/haze-day.mp4";
import RainyDay from "../React-Media/rainy-day.mp4";
import MistDay from "../React-Media/mist-day.mp4";
import SnowDay from "../React-Media/snow-day.mp4";
import SmokeDay from "../React-Media/smoke-day.mp4";
import DefaultDay from "../React-Media/default-day.mp4";

// Material UI:
import SunSetIcon from '@material-ui/icons/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';

const WeatherInfo = ({ weatherValueObj }) => {

    const [weatherState, setWeatherState] = React.useState();

    const {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset
    } = weatherValueObj;

    React.useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clear":
                    setWeatherState(ClearDay);
                    break;
                case "Clouds":
                    setWeatherState(CloudyDay);
                    break;
                case "Haze":
                    setWeatherState(HazeDay);
                    break;
                case "Rain":
                    setWeatherState(RainyDay);
                    break;
                case "Mist":
                    setWeatherState(MistDay);
                    break;
                case "Snow":
                    setWeatherState(SnowDay);
                    break;
                case "Smoke":
                    setWeatherState(SmokeDay);
                    break;
                default:
                    setWeatherState(DefaultDay);
                    break;
            }
        }
    }, [weatherMood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let sunsetTime = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
            <div className="weather-info mt-5">

                {/* Weather-box */}
                <article className="container mt-5">
                    <div className="weather-box">
                        <div className="weather-icon d-flex justify-content-center align-items-center">
                            <video
                                loop muted autoPlay
                                src={weatherState}
                                className="drawer-img rounded-5">
                                sunny-day/mp4
                            </video>
                        </div>

                        {
                            temp
                            ? <hr className="line-class w-75 mx-auto mt-5 text-white" />
                            : <></>
                        }

                        {/* Weather Forecasting */}
                        <div className="container mt-5">
                            {/* Upper Group */}
                            <div className="row condition-row-to-col">

                                <div className="temperature ps-4 col-6 text-center d-flex justify-content-center align-items-center text-white">
                                    {
                                        temp
                                            ? <span>{Math.round(temp * 10) / 10}&deg;C</span>
                                            : <></>
                                    }
                                </div>

                                <div className="conditions d-flex flex-column col-6 text-center justify-content-center align-items-start text-white ps-5">
                                    {
                                        weatherMood
                                            ? <>
                                                <span className="cond-1">{weatherMood}</span>
                                                <span className="cond-2">{`${name}, ${country}`}</span>
                                            </>
                                            : <></>
                                    }
                                </div>

                            </div>

                            {/* Lower Group */}
                            <div className="lower-group-info ps-5">

                                <div className="row condition-row-to-col">
                                    <div className="small-info col-6 d-flex justify-content-start align-items-center">
                                        {
                                            sunset
                                                ? <>
                                                    <SunSetIcon className="info-icon" />
                                                    <span>{sunsetTime} <br /> Sunset</span>
                                                </>
                                                : <></>
                                        }
                                    </div>

                                    <div className="small-info col-6 d-flex justify-content-start align-items-center">
                                        {
                                            humidity
                                                ? <>
                                                    <WaterDropIcon className="info-icon" />
                                                    <span>{humidity}% <br /> Humidity</span>
                                                </>
                                                : <></>
                                        }
                                    </div>
                                </div>

                                <div className="row condition-row-to-col">
                                    <div className="small-info col-6 d-flex justify-content-start align-items-center">
                                        {
                                            pressure
                                                ? <>
                                                    <ThunderstormIcon className="info-icon" />
                                                    <span>{pressure}mbar <br /> Pressure</span>
                                                </>
                                                : <></>
                                        }
                                    </div>

                                    <div className="small-info col-6 d-flex justify-content-start align-items-center">
                                        {
                                            speed
                                                ? <>
                                                    <AirIcon className="info-icon" />
                                                    <span>{speed}km/h <br /> Wind Speed</span>
                                                </>
                                                : <></>
                                        }
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="bottom-space-box"></div>

                    </div>
                </article >

            </div >
        </>
    );
};

export default WeatherInfo;