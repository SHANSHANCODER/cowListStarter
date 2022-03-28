import React from "react";
import axios from "axios";

class Add extends React.Component{
constructor(props){
  super(props)
  this.state={
    name:"",
    description:""
  }
  this.addCowName=this.addCowName.bind(this);
  this.addCowDescription=this.addCowDescription.bind(this);
  this.submitAdd=this.submitAdd.bind(this);

}

addCowName(val){
  let cowName= val.target.value;
  this.setState({name:cowName})
}
addCowDescription(val){
  let cowDes = val.target.value;
  this.setState({description:cowDes})
}
submitAdd(e){
  e.preventDefault();
  let newcow= {};
  newcow.name=this.state.name;
  newcow.description=this.state.description;
  console.log("addednewcowinfo front end>>>>>",newcow)
  axios
  .post('/api/cows',newcow)
  .then(response=>{console.log("frontend response>>>>",response.data)})
  .catch(err=>{console.log(err)})
  this.props.updateCow()

}

render(){
  return (
    <form className="addform" onSubmit={this.submitAdd}>
    <input type="text" name="cowName" value={this.state.name} onChange={this.addCowName} placeholder="New Cow Name" />
    <input type="text" name="cowDescription" value={this.state.description} onChange={this.addCowDescription} placeholder="new Cow Description"/>
    <input type="submit" value="Adding New Cow!"/>
    </form>
  )
}


}



export default Add;
