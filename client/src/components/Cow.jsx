import React from "react";
import axios from "axios";

class Cow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.cow.name,
      description: this.props.cow.description
    };
    this.submitNameChange=this.submitNameChange.bind(this);
    this.deleteCow = this.deleteCow.bind(this);
    this.getDescription = this.getDescription.bind(this);
    //this.editCow=this.editCow.bind(this);
    this.editCowName=this.editCowName.bind(this)
  }
  getDescription(e) {
    e.preventDefault();
    this.props.getDescripUpdate(this.props.cow.description);
    alert(this.props.cow.description);
  }
  deleteCow() {
    alert("delete got invoked");
    let id = this.props.cow._id;
    console.log("cowid>>>>>", this.props.cow._id);
    axios
      //?????? how to construct if with second param????
      .delete("/api/cows/" + id)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  editCowName(val){
    let cowname=val.target.value;
    this.setState({name:cowname})
  }

  submitNameChange(e){
    e.preventDefault()
    let cowUpdatename=this.state.name;
    let id=this.props.cow._id
    alert("submitNameChange invoked")
    let update ={};
    update.name=this.state.name
    axios
    .put('/api/cows/'+id, update)
    .then(response=>{
      console.log("put response.data",response.data)
      this.props.updateCow()
    })
    .catch(err=>{
      console.log(err)
    })

  }

  render() {
    return (
      <form className="cowform" onSubmit={this.submitNameChange}>
        <input
          type="text"
          name="cowName"
          value={this.state.name}
          onChange={this.editCowName}
        />
        <lable>Cow Name</lable>
         {/* <input type="Submit" value="Delete this Cow"/> */}
        <button onClick={this.deleteCow}>Delete this cow</button>
        <button onClick={this.getDescription}>Show my description</button>
       <button onClick={this.editCow}>Edit Cow Name</button>
      </form>
    );
  }
}

export default Cow;
