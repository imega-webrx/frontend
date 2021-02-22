import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  block: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));


const Intro = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.block}>
      <p>Все результаты по запросу {props.name}</p>
    </div>
  )
}
export default Intro;
