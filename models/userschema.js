const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
    ,
    user_type:{
        type:String
    },
    tokens: [{

        token: {
            type: String,
            required: true
        }

    }]

});

userSchema.statics.checkCrediantialsDb= async(user22, pass)=>{
    const user1= await User.findOne({username: user22, password:pass})
    return user1;
}

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewtoken')
    console.log(token);
    user.tokens = user.tokens.concat({ token: token })
    await user.save()
    return token
}

const User = mongoose.model('User', userSchema);

module.exports = User;