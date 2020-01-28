const mongoose= require('mongoose');

const Collector= mongoose.model('Collector',{
    
     Name:{
         type: String
     },

     Location:{
         type: String
     }, 

     Phone:{
         type:String
     },
      
     gender:{
         type: String
     }


});


module.exports('Collector');