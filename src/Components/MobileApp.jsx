import * as React from 'react';

// Material UI:
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone';

// Importing Components:
import Home from "./Home.jsx";
import SearchBar from "./SearchBar.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
            role="presentation">

            <div className="mobile-search d-flex flex-row">
                <Button
                    onClick={toggleDrawer(anchor, false)}>
                    <ChevronRightIcon />
                </Button>

                {/* Search Bar Component: */}
                <SearchBar
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    getWeatherInfo={getWeatherInfo} />
            </div>

            {/* Weather Information Component: */}
            <WeatherInfo weatherValueObj={weatherValueObj} />

        </Box>
    );

    // Weather States:
    const [searchValue, setSearchValue] = React.useState("");
    const [weatherValueObj, setWeatherValueObj] = React.useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f65f9b76f484497c736ce7cb73bb3472`;

            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            // Weather Object:
            const weatherObject = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            };

            setWeatherValueObj(weatherObject);

        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            {
                ['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <nav className="mobile-nav d-flex align-items-center justify-content-between">
                            <div className="text-white fw-bold d-flex align-items-center justify-content-between ms-4">
                                <FilterDramaTwoToneIcon className="nav-logo-icon" />
                                AtmoCloud
                            </div>

                            <Button onClick={toggleDrawer(anchor, true)}>
                                <SearchIcon />
                            </Button>
                        </nav>
                        <Home />
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))
            }
        </>
    );
}