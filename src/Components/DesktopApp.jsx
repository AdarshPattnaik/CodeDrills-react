import * as React from 'react';

// Material UI:
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FilterDramaTwoToneIcon from '@mui/icons-material/FilterDramaTwoTone';

// Importing Components:
import Home from "./Home.jsx";
import SearchBar from "./SearchBar.jsx";
import WeatherInfo from "./WeatherInfo.jsx";

const drawerWidth = 500;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const DesktopApp = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                {/* Navbar: */}
                <AppBar
                    position="fixed"
                    open={open}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap sx={{ flexGrow: 1 }}
                            component="div">
                            <FilterDramaTwoToneIcon className="nav-logo-icon" />
                            AtmoCloud
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            sx={{ ...(open && { display: 'none' }) }}>
                            <SearchIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Main open={open}>
                    <DrawerHeader />
                    {/* Home Component: */}
                    <Home />
                </Main>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open} >

                    <DrawerHeader>

                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>

                        {/* Search Bar Component: */}
                        <SearchBar
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            getWeatherInfo={getWeatherInfo} />

                    </DrawerHeader>
                    <Divider />

                    {/* Weather Information Component: */}
                    <WeatherInfo weatherValueObj={weatherValueObj} />

                </Drawer>
            </Box>
        </>
    );
};

export default DesktopApp;