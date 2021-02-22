import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    border:'1px solid red',
    justifyContent: 'space-between'
  },
  img: {
    height: '100px',
    width: '100px'
  },
  textInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'
  },
  card: {
    marginBottom: '1%',
    width: '80%',
    display: 'flex',
     border:'1px solid red',
    flexDirection: 'row',
  },
  heading: {
    fontSize: '3vh',
  }
}));
const  Item = (props) => {
  const classes = useStyles();
  return(
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <div className={classes.textInfo}>
            <Typography className={classes.heading}>{props.data.title}</Typography>
            <Typography>{props.data.description}</Typography>
          </div>
          <CardMedia
            square
            component="image"
            className={classes.img}
            image={props.data.img}
            title={props.data.title + ' image'}
          />


        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Item;
