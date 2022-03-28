import React from "react";
import axios from "axios";
import Add from "./Add.jsx"
import Cows from "./Cows.jsx"

let data=[
  {
    name:"Buttercup",
    description:"a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock."
  },{
    name:"Daisy",
description:"a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties."
  }
]

class App extends React.Component{
constructor(props){
  super(props)
  this.state={
    cows:data,
    description:""
  }
 // this.getDescripUpdate=this.getDescripUpdate.bind(this)
 this.updateCow=this.updateCow.bind(this)
 this.getDescripUpdate=this.getDescripUpdate.bind(this)
}
updateCow(){
  axios
  .get('/api/cows')
  .then((response)=>{
    console.log(response.data)
    this.setState({cows:response.data})
  })
  .catch(err=>{
    console.log(err)
  })
}

getDescripUpdate(val){
this.setState({description:val})
console.log(this.state.description)
}

componentDidMount(){
  this.updateCow()
}
render(){
  return (
    <div>
    <h1 className="description">{this.state.description}</h1>
    <h1>
      Cow list
    </h1>
    <Add updateCow={this.updateCow}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <Cows cows={this.state.cows} getDescripUpdate={this.getDescripUpdate}/>
</div>
  )
}


}



export default App;
