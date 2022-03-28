import React from "react";
import axios from "axios";

class Cow extends React.Component{
constructor(props){
  super(props)
  this.state={
    name:this.props.cow.name,
    description:this.props.cow.description
  }
  // this.submitNameChange=this.submitNameChange.bind(this);
  // this.addCow=this.addCow.bind(this);
   this.deleteCow=this.deleteCow.bind(this);
this.getDescription=this.getDescription.bind(this);
}
getDescription(e){
  e.preventDefault()
  this.props.getDescripUpdate(this.props.cow.description)
  alert(this.props.cow.description)
}
deleteCow(){
  alert("delete got invoked")
  let id=this.props.cow._id;
  console.log("cowid>>>>>",this.props.cow._id)
  axios
  //?????? how to construct if with second param????
  .delete('/api/cows/'+id)
  .then(response=>{
    console.log(response.data)
  })
  .catch(err=>{console.log(err)})

}

render(){

  return (
   <form className="cowform" onSubmit={this.submitNameChange}>
     <input type="text" name="cowName" value={this.state.name} onChange={this.addCow} />
     <lable>Cow Name</lable>
     {/* <input type="Submit" value="Delete this Cow"/> */}
     <button onClick={this.deleteCow}>Delete this cow</button>
     <button onClick={this.getDescription}>Show my description</button>
     {/* <button onClick={this.editCow}>Edit Cow Name</button> */}
   </form>
  )
}


}



export default Cow;
