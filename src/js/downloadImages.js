var Discogs = require('disconnect').Client;
var db = new Discogs( {userToken: "CELhyIfVzWHVxcxcnTVqXErrPlJndRsFtuZOsGzi"}).database();
const fs = require('fs');

const albums = [
    
        378017,
    
        9938340,
    
        6784584,

        3671359,

        3734425,

        6223717,

        9464172,

        3267383,

        4608810,

        3925637,

        2287669,

        2560651,

        10445500,

        3976200,

        241801,

        9117670,

        3640707,

        8661360,

        4570505,

        4325263,

        2942297,

        6040645
    
];

//For each ID in the array albumList, an API call is made to save the corresponding album cover
albums.map((albumID) => 

db.getRelease(albumID, function(err, data){
    
        var url = data.images[0].resource_url;
        var albumID = data.id;
    
        db.getImage(url, function(err, data, rateLimit){
    
            // Data contains the raw binary image data
            fs.writeFile('./../assets/albums/' + albumID + '.jpg', data, 'binary', function(err){
    
                
            });

        });

    })

);

console.log('Images saved!');            
