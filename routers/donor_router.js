const express= require('express');
const Donor= require('../models/donor');

const router= new express.Router();


router.post('/uploaddonor', (req, res) => {
    var myData = new donor(req.body);
    myData.save().then(function () {
        res.send('fine');
    }).catch(function (er) {
        res.send(er);
    });
});


router.get('/donor', function(req, res){
    Donor.find().then(function(donor){
        res.send(donor);
    }).catch(function(er){
        res.send(er);
    });
});


router.get('/donor_url',function(req, res){
    Donor.find().then(function(donor){
        res.send(donor);
    }).catch(function(er){
        res.send(er);
    });
});

//for deleting
router.delete('/deletedonor/:id',function(req,res){
    Donor.findByIdAndDelete(req.params.id).then(function(){
        res.send("deleted");
    }).catch(function(er){
        res.send(er);
    });
});

router.put('/updatedonor/:id', function(req, res){
    Donor.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        res.send("updated");
    }).catch(function(er){
        res.send(er);
    });
});


module.exports= router;