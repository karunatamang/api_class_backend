const express= require('express');
const Cloth= require('../models/clothesmodel');

const router= new express.Router();


router.post('/uploadclothes', (req, res) => {
    var myData = new Cloth(req.body);
    myData.save().then(function () {
        res.send('Cloth added !!!!!!!!!!!!!!!!!!!!!!11111');
    }).catch(function (er) {
        res.send(er);
    });
});


router.get('/clothes', function(req, res){
    Cloth.find().then(function(cloth){
        res.send(cloth);
    }).catch(function(er){
        res.send(er);
    });
});


router.get('/clothes_url',function(req, res){
    Cloth.find().then(function(cloth){
        res.send(cloth);
    }).catch(function(er){
        res.send(er);
    });
});

//for deleting
router.delete('/deleteclothes/:id',function(req,res){
    Cloth.findByIdAndDelete(req.params.id).then(function(){
        res.send("deleted");
    }).catch(function(er){
        res.send(er);
    });
});

router.put('/updateclothes/:id', function(req, res){
    Cloth.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        res.send("updated");
    }).catch(function(er){
        res.send(er);
    });
});

module.exports= router;