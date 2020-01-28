const mongoose= require('mongoose');

const Cloth= mongoose.model('Cloth',{
      clothname:{
          type :String,

      },
        price:{

            type: Number,
        },
        
        gender:{
            type: String,
        },

        size:{
            type: String
        }, 
        brand:{
            type:String
        }
    
});

module.exports=Cloth;
