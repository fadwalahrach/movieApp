import "./App.css";
import { useState,useEffect,useRef } from 'react';
import MovieList from './Components/MovieList';
import {MovieCard} from './Components/MovieCard';

const App= () => {
  const [items,setItems] = useState([
    {
    id : 1,
    title : 'Delphi Safari',
    description : 'kids Movies',
    posterURL : 'https://youtu.be/tcqip3ULaCY',
    rating : 2,
    image : 'https://upload.wikimedia.org/wikipedia/en/2/2a/Delhi_Safari_Poster.jpg'
},

{
    id : 2,
    title : 'Diamond Dog Caper',
    description : 'kids Movies',
    posterURL : 'https://youtu.be/MkjMrzT6TvA',
    rating : 3,
    image : 'https://is5-ssl.mzstatic.com/image/thumb/S7aADi2S93PZseiVoqBgSQ/1000x563.jpg'
},

{
    id : 3,
    title : 'TAXI',
    description : 'Driver Film',
    posterURL :'https://youtu.be/lEoLOHVl76U',
    rating :2,
    image : 'https://m.media-amazon.com/images/M/MV5BNjlmZmU4ODEtYTIwZC00Y2Y0LTlhYmEtM2E5MTAwMjUzNTRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY1200_CR89,0,630,1200_AL_.jpg'
}
])
    const [title,setTitle]= useState('')
    const [rating,setRating]= useState('')
    const [filtredMovies, setFiltredMovies]= useState([])

    const [movie, setMovie] = useState({ title: "", description: "", posterURL: "",  rating: "", image:""});

    useEffect(() => {
      setFiltredMovies(
          items.filter((e)=>e.title.toLowerCase().includes(title.toLowerCase()) || e.rating===rating)
      )
  },[title,rating,items])

  const Add = () => {
    setItems([...items,movie])
  }


  return (
    <div className="App">
        <h1>Movies List</h1>
        Title : <input type="text" placeholder="Search Movies" onChange={(e) => setTitle(e.target.value)}/>
        Rating : <input type="text" placeholder="Search Movies" onChange={(e) => setRating(Number(e.target.value))}/>
        <br/><br/>
        <div>
      <input type="text" name="title" placeholder="title" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, title: e.target.value }))}/>
      <input type="text" name="description" placeholder="description" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, description: e.target.value }))}/>
      <input type="text" name="posterURL" placeholder="posterURL" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, posterURL: e.target.value }))}/>
      <input type="text" name="rating" placeholder="rating" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, rating: e.target.value }))}/>
      <input type="text" name="image" placeholder="poster" onChange={(e) => setMovie(prevMovie => ({ ...prevMovie, image: e.target.value }))}/>
        <button onClick={Add}>ADD</button>
        </div>
        <br/><br/>
        <MovieList data={filtredMovies}/>
    </div>
  );
}

export default App;
