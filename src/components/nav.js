import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 170,
    margin: "0px 0 15px 0"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  titleHeading: {
    fontSize: '2rem',
  }
}));

const NavBar = () => {
  const classes = useStyles();
  return(
    <header>
      <AppBar position="static" color="primary">
        <Toolbar className="container-fluid justify-content-center">
            <div className="row w-100 justify-content-center">
              <Button>Служба поддержки</Button>
              <Typography className={`${classes.titleHeading} col-xl-8 col-sm-4 text-center align-self-center`} variant="title" color="inherit">
                  Webrx
              </Typography>
              <FormControl  className={classes.formControl} disabled>
                  <InputLabel id="demo-simple-select-label">Москва</InputLabel>
                  <Select>
                  <MenuItem>Москва</MenuItem>
                  </Select>
              </FormControl>
            </div>
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default NavBar;
