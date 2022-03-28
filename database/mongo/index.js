const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cowList', (err)=>{
  if(err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo')
});

const cowSchema = new mongoose.Schema({
  /*
    Fill me in
  */
 name:{type:String,unique:true},
 description:String
})

const Cow = mongoose.model('Cow', cowSchema);

// var newCow = new Cow({name:"testing1",description:"testingcow"})
// newCow.save();
var save = (data,callback)=>{
  Cow.create(data,(err,result)=>{
    if(err){
      callback(err)
    } else {
      callback(null,result)
    }
  }
  )
}

var retrieveall =(callback)=>{
  Cow.find((err,result)=>{
    if (err){
      callback(err)
    }else {
      callback(null,result)
      console.log("retrieve result>>>>",result)
    }
  })
}

var deleteOne = (id,callback)=>{
  Cow.findByIdAndRemove(id,(err,result)=>{
    if(err){
      callback(err)
    }else {
      callback(null,result)
    }
  })
}
// Cow.findByIdAndRemove('6240ef71cfb74adf6db8c0c9',(err,result)=>{
//   if(err){
//     console.log(err)
//   }else {
//     console.log(result)
//   }
// } )
module.exports.save = save;
module.exports.retrieveall=retrieveall;
module.exports.deleteOne=deleteOne