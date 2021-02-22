import React from "react";
import Item from "../item";
import * as contentful from 'contentful';
import {makeStyles} from "@material-ui/core/styles";

/*
const SPACE_ID = 'c8bal3yrepjg';
const ACCESS_TOKEN = 'lQR43_wxIit_YwnnJ8g-FP9bK83Hc87-tIkoPEP_5ec';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});
*/
const useStyles = makeStyles(()=>({
  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const SuggestedItems = () => {
  const classes = useStyles();
  const ItemsList = data.map((item) => {
   return(<Item data={item}></Item>)
 });
  return(
    <div className={classes.itemsList}>
      {ItemsList}
    </div>
  )
}

const data = [
  {
    title: 'Афобазол',
    description: 'Афобазол® — селективный небензодиазепиновый анксиолитик.',
    img: 'https://uteka.ru/media/normal/2/09/20998c10976625fc4d3966541e7f6467.jpg'
  },
  {
    title: 'Глицин',
    description: 'Таблетки подъязычные белого цвета с элементами мраморности, плоскоцилиндрической формы с фаской.',
    img: 'https://imgs.asna.ru/resize_cache/254139/4ba2084cac7ad749c8f5dbb734dc4565/iblock/565/5656fb1c6f15aadb83c0c6fb7e8c9be7/8716593.png'
  },
  {
    title: 'Феназепам',
    description: 'Круглые плоскоцилиндрические таблетки белого цвета с фаской (для дозировок 0,5 и 2,5 мг), с фаской и риской на одной стороне (для дозировки 1 мг).',
    img: 'https://uteka.ru/media/normal/6/88/688c97c1d4d01b81560744d49ecf3b2a.jpg'
  }
]

export default SuggestedItems;
