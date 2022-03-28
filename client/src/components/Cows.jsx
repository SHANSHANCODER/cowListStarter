import React from "react";
import axios from "axios";
import Cow from "./Cow.jsx"

class Cows extends React.Component{
constructor(props){
  super(props)
}

render(){

  return (
  this.props.cows.map(cow=><Cow key={cow._id} cow={cow} getDescripUpdate={this.props.getDescripUpdate}
    updateCow={this.props.updateCow}/>)
  )
}


}



export default Cows;
