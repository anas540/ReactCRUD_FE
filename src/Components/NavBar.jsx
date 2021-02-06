import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import CreateUser from './CreateUser';
import DisplayUser from './DisplayUser';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import UpdateUser from './UpdateUser';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
}));




const NavBar = () =>
{
    const classes = useStyles();

    return (
        <Router>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DashBoard
          </Typography>
          <Button color="inherit" ><Link style={{color: "white",textDecoration:"none"}} to="/">Create</Link></Button>
          <Button color="inherit"><Link style={{color: "white",textDecoration:"none"}} to="/display">Display</Link></Button>
        </Toolbar>
        </AppBar>

      
      <Switch>
      <Route exact path="/">
            <CreateUser />
          </Route>
          <Route path="/display">
            <DisplayUser />
      </Route>
      <Route exact path="/update/:id">
            <UpdateUser />
          </Route>
      </Switch>
      </Router>
      );
};
export default NavBar;
