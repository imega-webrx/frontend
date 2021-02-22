import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },

});

const ResultItem = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.data.drugstore}
        </Typography>
        <Typography variant="h5" component="h2">
          {bull}Афобазол{bull}
        </Typography>

        <Typography variant="body2" component="p">
          {props.data.price} руб
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.data.link}>
          <Button size="small">Перейти на сайт</Button>
        </a>
      </CardActions>
    </Card>
  )
}
export default ResultItem;
