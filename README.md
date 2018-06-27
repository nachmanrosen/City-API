# City-API

This API contains data about cities, including county, state, population , distance and time from Lakewood( according to http://www.distancebetweencities.net/ )
    
   
     GET requests: 
      To get all the cities with county ,population, and distance data- use : /city/
      To get all the cities with county, state, population, distance, and time data- use : /city2/
      To get data of a specific city- use : /city/name or:  /city2/name
    
  
     Use Postman to post new cities to either /city or /city2.
     You can patch (update) an exisiting city by passing into the url the name  of the city.
    
      This API was built using ExpressJS, Node.js, and Mongoose 
