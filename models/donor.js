const mongoose= require('mongoose');

const Donor= mongoose.model('Donor',
{
    Name:{
        type:String
    },

    Address:{
        type:String
    },

    Contact:{
        type:Number
    },
     
    Age:{
        type:Number
    }


    




});

module.exports('Donor');