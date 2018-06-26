var express = require('express');
var router = express.Router();
var id;
var City2     = require('./city.js');
var City3= require('./city3.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


//city1 table is not being used. therefore in  /city uses  the City2 table and /city2 uses the City3 table
   //connects with city3 table: includes state and time
router.route('/city2')
   
  
    //  create a city3
    .post(function(req, res) {
 
     var city = new City3();      // create a new instance of the city model
     city.name = req.body.name;  // set the city's name (comes from the request)
     city.county=req.body.county;
     city.state=req.body.state;
     city.population=req.body.population;
     city.distance=req.body.distance;
     city.time=req.body.time;
     city.save(function(err) {
         if (err)
             res.send(err);
 
         res.json({ message: 'City created!' });
     });
 
 })

 //get all cities3
     .get(function(req, res) {
         City3.find(function(err, city) {
             if (err)
                 res.send(err);
             res.render('city3', { cities: city });
           //sends to view/city2  key:city value: city  
         });
     });

router.route('/city2/:name')
 //find city3 by name
 .get(function(req, res) {
    City2.findOne({name:req.params.name}, function(err, city2) {
        if (err)
            res.send(err);
       
        res.render('city', { cities: city2 });
    });
})
//patch a city3
     .patch(function(req, res) {

        
        City3.findOne({name:req.params.name}, function(err, city) {

            if (err)
                res.send(err);
            if(req.body.name) {
            city.name=req.body.name; }
            if(req.body.distance) {
              city.distance=req.body.distance;  }
            if(req.body.county) {
            city.county=req.body.county; }
            if(req.body.state){
                city.state=req.body.state;
            }
            if(req.body.population){
                city.population=req.body.population;
            }if(req.body.time){
                city.time=req.body.time;
            }
            city.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'City updated!' });
            });

        });
    })
    .delete(function(req, res) {
        city3.remove({
            _name: req.params.name
        }, function(err, city) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });   

/////routes for City2


router.route('/city')
   
  
   //  create a city
   .post(function(req, res) {

    var city = new City2();      // create a new instance of the city model
    city.name = req.body.name;  // set the city's name (comes from the request)
    city.county=req.body.county;
    city.population=req.body.population;
    city.distance=req.body.distance;
    city.time=req.body.time;
    city.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'City created!' });
    });

})
//get all City2
    .get(function(req, res) {
        City2.find(function(err, city2) {
            if (err)
                res.send(err);
            res.render('city', { cities: city2 });
          //sends to view/city  key:city value: city 2 
        });
    });
    
    router.route('/city/:name')
    //find city by name
    .get(function(req, res) {
        City2.findOne({name:req.params.name}, function(err, city2) {
            if (err)
                res.send(err);
           
            res.render('city', { cities: city2 });
        });
    })
    //find city by name and use PATCH to update part of the city's data
    .patch(function(req, res) {

        
        City2.findOne({name:req.params.name}, function(err, city) {

            if (err)
                res.send(err);
            if(req.body.name) {
            city.name=req.body.name; }
            if(req.body.distance) {
              city.distance=req.body.distance;  }
            if(req.body.county) {
            city.county=req.body.county; }
            if(req.body.population){
                city.population=req.body.population;
            }
            city.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'City updated!' });
            });

        });
    })

    .delete(function(req, res) {
        city2.remove({
            _name: req.params.name
        }, function(err, city) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
   //find city by id
    router.route('/city/:id')

    .get(function(req, res) {
        City2.findById(req.params.id, function(err, city) {
            if (err)
                res.send(err);
            
            res.render('city', { cities: city });
        });
    })
//find city by id and use PATCH to update part of one city's data
    .patch(function(req, res) {

        
        City2.findById(req.params.id, function(err, city) {

            if (err)
                res.send(err);
            if(req.body.name) {
            city.name=req.body.name; }
            if(req.body.distance) {
              city.distance=req.body.distance;
              }
            if(req.body.county) {
            city.county=req.body.county; }
            if(req.body.time){
                city.time=req.body.time;
            }
            city.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'City updated!' });
            });

        });
    })
    .delete(function(req, res) {
        city2.remove({
            _id: req.params.id
        }, function(err, city) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;
