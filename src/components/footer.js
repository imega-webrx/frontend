import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from '@material-ui/core/styles';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: 'dimgray',
  }
}))
const Footer = () => {
  const classes = useStyles();
  return(
    <footer className={classes.footer}>
      <BottomNavigation color="secondary" position="fixed">
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </footer>
  )
};

export default Footer;
