import React from "react";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  infoBlock: {
    width: '90vw',
  },
  wrapper: {
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: '80%'
  },
  tabsList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}));

const MainToggle = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return(
    <div className={classes.wrapper}>
      <Paper className={classes.infoBlock} square variant="outlined" >
        <Tabs
          className={classes.tabsList}
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab className={classes.tabText} label="Рецептурные лекарства" />
          <Tab className={classes.tabText} label="Лекарства для животных" />
          <Tab className={classes.tabText} label="Услуги для животных" />
        </Tabs>
      </Paper>
    </div>
  )
};

export default MainToggle;
