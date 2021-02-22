import  React from "react";
import Intro from "./intro";
import SuggestedResults from "../results/suggestedResults";
import axios from 'axios';

import {

  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


/*
const getData = (drugname) => {
  let pharmacyRes;
  return fetch('http://localhost:5000/pharmacy')
    .then(res => {
      return res.json().then(data => {
        return data;
      })
    })
}
*/
/*
const getData = async (drugname) => {
  let result = await fetch('http://localhost:5000/pharmacy');
  let json =  await result.json();
  return await json[0][drugname];
}

*/
class ResultsWrapper extends React.Component{
constructor (props) {
    super(props);
    this.state = {
    vol:[], 
      }
    }



componentDidMount(){


axios.post('http://localhost:8000/col',{name:this.props.match.params.id}).then(res => {
       console.log(res.data);
this.setState({vol:res.data});
  

      })


  
}


render(){
const listItems = this.state.vol.map((number) =>
  <li>{number.name}</li>
);


let id = this.props.match.params.id;

return(
<div>
<li>
{listItems}
</li>
</div>

  )

}

}
 export default ResultsWrapper;