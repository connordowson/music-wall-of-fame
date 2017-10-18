import React from "react"
var Discogs = require('disconnect').Client;
import albums from "albums.js"
import "./../css/main.scss"


var db = new Discogs( {userToken: "CELhyIfVzWHVxcxcnTVqXErrPlJndRsFtuZOsGzi"}).database();


export default class Home extends React.Component{


    render(){

        return(

            <div id="container">

                <h1> Wall of Fame </h1>

                <Albums />

            </div>
        
        );

    }


}



//All the album covers
class Albums extends React.Component{


    render(){
      
            const listAlbums = albums.map((albumCover, index) =>
            
                <a href={"https://discogs.com/release/" + albumCover} target="_blank"> <img height="175px" src={"./assets/albums/" + albumCover + ".jpg"} /> </a>
            
            );



            return(

                <div id="albums-container">

                    {listAlbums}

                </div>

            );

    }

}


//All the album covers
class Album extends React.Component{
    
    render(){
    
         return(
    
    
            <h2> {this.props.albumID} </h2>
    
    
        );
    
    }
    
}