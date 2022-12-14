import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from '@material-ui/icons/Home';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import RunTest from './RunTest';
import SymptomIcon from '@material-ui/icons/LocalHotel';
import CovidInfoIcon from '@material-ui/icons/Info';
import CovidMapIcon from '@material-ui/icons/Map';
import AppointmentIcon from '@material-ui/icons/Schedule';
import EmergencyIcon from '@material-ui/icons/AirportShuttle';
import HomeGrid from "./HomeGrid";
import SymptomsPage from "./SymptomsPage";
import EmergencyPage from "./EmergencyPage";
import CovidMapPage from "./CovidMapPage";
import VaccineInfoPage from "./VaccineInfoPage";
import VaccineAppointmentPage from "./VaccineAppointmentPage";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

function NewApp(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem key="Home" component={Link} to="/">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem key="Run Test" component={Link} to="/Run Test">
                    <ListItemIcon>
                        <DirectionsRunIcon />
                    </ListItemIcon>
                    <ListItemText primary="Run Test" />
                </ListItem>

                <ListItem key="Symptoms" component={Link} to="/Symptoms">
                    <ListItemIcon>
                        <SymptomIcon />
                    </ListItemIcon>
                    <ListItemText primary="Symptoms" />
                </ListItem>

                <ListItem key="Emergency" component={Link} to="/Emergency">
                    <ListItemIcon>
                        <EmergencyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Emergency" />
                </ListItem>

                <ListItem key="CovidMap" component={Link} to="/CovidMap">
                    <ListItemIcon>
                        <CovidMapIcon />
                    </ListItemIcon>
                    <ListItemText primary="Covid-19 Map" />
                </ListItem>

                <ListItem key="VaccineInfo" component={Link} to="/VaccineInfo">
                    <ListItemIcon>
                        <CovidInfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vaccine Information" />
                </ListItem>

                <ListItem key="VaccineAppointment" component={Link} to="/VaccineAppointment">
                    <ListItemIcon>
                        <AppointmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vaccine Appointment" />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Covid-19 Information and Testing
          </Typography>
                </Toolbar>
            </AppBar>
            <BrowserRouter>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === "rtl" ? "right" : "left"}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>

                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <Switch>
                        <Route exact path="/" render={() => <HomeGrid />} />
                        <Route path="/Run Test" render={() => <RunTest />} />
                        <Route path="/Symptoms" render={() => <SymptomsPage />} />
                        <Route path="/Emergency" render={() => <EmergencyPage />} />
                        <Route path="/CovidMap" render={() => <CovidMapPage />} />
                        <Route path="/VaccineInfo" render={() => <VaccineInfoPage />} />
                        <Route path="/VaccineAppointment" render={() => <VaccineAppointmentPage />} />
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    );
}

NewApp.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(
        typeof Element === "undefined" ? Object : Element
    )
};

export default NewApp;
