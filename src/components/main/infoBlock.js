import React from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(() => ({
  infoBlock: {
    width: '40%',
    margin: '3% auto',
    textAlign: 'center',
  }
}));
const InfoBlock = () => {
  const classes = useStyles();
  return(
    <div className={classes.infoBlock}>
      <Typography>Хватит платить слишком много за рецепты! Сравните цены и экономьте на покупке до 50%</Typography>
    </div>
  )
}

export default InfoBlock;
