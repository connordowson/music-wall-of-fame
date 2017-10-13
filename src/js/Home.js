import albums from "albums.js"
import React from "react"

var Discogs = require('disconnect').Client;

var db = new Discogs().database();
db.getRelease(176126, function(err, data){

    console.log(data);

});

class 