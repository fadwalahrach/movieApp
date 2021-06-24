import { useState,useEffect,useRef } from 'react';

const MovieList = (props) => {

    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
        {props.data.map((e)=>
        <div>
        <a href={e.posterURL}><img src={e.image} alt="" width="300" height="300"/></a>  
        <br/>
        <label>Title : {e.title}</label>
        <br/>
        <label>Rating : {e.rating}</label>
        </div>
        )}
        </div>
    )
}

export default MovieList;