const express= require('express');
const Collectormodel= require('../models/collector');

const router= new express.Router();


router.post('/uploadcollector', (req, res) => {
    var myData = new User(req.body);
    myData.save().then(function () {
        res.send('fine');
    }).catch(function (er) {
        res.send(er);
    });
});


router.get('/collector', function(req, res){
    Collector.find().then(function(collector){
        res.send(collector);
    }).catch(function(er){
        res.send(er);
    });
});


router.get('/collector_url',function(req, res){
    Collector.find().then(function(collector){
        res.send(collector);
    }).catch(function(er){
        res.send(er);
    });
});

//for deleting
router.delete('/deletecollector/:id',function(req,res){
    Collector.findByIdAndDelete(req.params.id).then(function(){
        res.send("deleted");
    }).catch(function(er){
        res.send(er);
    });
});

router.put('/updatecollector/:id', function(req, res){
    Collector.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        res.send("updated");
    }).catch(function(er){
        res.send(er);
    });
});


module.exports= router;