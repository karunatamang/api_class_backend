const express= require('express');
const User = require('../models/userschema');
const auth= require('../middleware/auth')
const app= express();
const router= new express.Router();

router.post('/upload', (req, res) => {
    var myData = new User(req.body);
    myData.save().then(function () {
        res.send('fine');
    }).catch(function (er) {
        res.send(er);
    });
});

router.get('/users', function(req, res){
    User.find().then(function(user){
        res.send(user);
    }).catch(function(er){
        res.send(er);
    });
});

router.get('/users_url',auth, function(req, res){
    User.find().then(function(user){
        res.send(user);
    }).catch(function(er){
        res.send(er);
    });
});

router.get('/users/single/:id', function(req, res){
    User.findOne({_id: req.params.id}).then(function(user){
        res.send(user);
    }).catch(function(er){
        res.send(er);
    });
});

//for deleting
router.delete('/deleteuser/:id',function(req,res){
    User.findByIdAndDelete(req.params.id).then(function(){
        res.send("deleted");
    }).catch(function(er){
        res.send(er);
    });
});

//for updating
router.put('/update/:id', function(req, res){
    User.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        res.send("updated");
    }).catch(function(er){
        res.send(er);
    });
});

router.post("/login", async(req, res)=>{
    // console.log(req.body.username)
    // console.log(req.body.password)
    try{
    const user= await User.checkCrediantialsDb(req.body.username, req.body.password)
    const token = await user.generateAuthToken()
    res.send({user, token});
    }catch(e){
        res.status(400).send();
    }
})


router.get("/admin_dashboard", auth, function(req, res){
    user_type= req.user_type
    if(user_type=="admin")
    {
        res.send("hello admin")
    }else{
        res.send("please authenticate...")
    }
})

router.get("/student_dashboard", auth, function(req, res){
    user_type= req.user_type
    if(user_type=="student")
    {
        res.send("hello student")
    }else{
        res.send("please authenticate...")
    }
})


module.exports= router;