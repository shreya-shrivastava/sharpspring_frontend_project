import React, { Component } from "react";

 const Details  = (props) => {
     var artistName = props.value1[props.value2].artistName;
     var releaseDate = props.value1[props.value2].releaseDate;
     releaseDate = releaseDate.split('T')[0]
     var artworkUrl60 = props.value1[props.value2].artworkUrl60
    return ( <div>
        <p>Artist Name: {artistName}</p>
        <p>Release Date: {releaseDate}</p>
        <img id="img1" src={artworkUrl60} width="300" height="300" /></div> );
}

export default Details;