import React from "react";
import ResultItem from "./resultItem";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(()=>({
  resultsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const SuggestedResults = (props) => {
  const classes = useStyles();

  const ResultsList = props.data.map((item) => {
    return <ResultItem data={item} name={props.name.name}/>
  });

  console.log(props.data);
  return(
    <div className={classes.resultsList}>
      { ResultsList }
    </div>
  )
}

export default SuggestedResults;
