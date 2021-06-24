import { useState,useEffect,useRef } from 'react';

export const MovieCard = () => {
    const [movie, setMovie] = useState({ title: "", description: "", posterURL: "",  rating: "", image:""});

    return(
        <div>
      <input type="text" name="title" placeholder="title" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, title: e.target.value }))}/>
      <input type="text" name="description" placeholder="description" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, description: e.target.value }))}/>
      <input type="text" name="posterURL" placeholder="posterURL" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, posterURL: e.target.value }))}/>
      <input type="text" name="rating" placeholder="rating" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, rating: e.target.value }))}/>
      <input type="text" name="image" placeholder="poster" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, image: e.target.value }))}/>
        </div>

    )
    return [movie];
}

