import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./MovieGrids.css";

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]); // mundanca de estado
  const getTopRatedMovies = async (url) => {
    // os filmes mais voltados
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results); // results vem do objeto trazendo todos os filmes
    console.log(data.results)
  };
  useEffect(() => {
    // top_rated ta na documentacao
    const topRatedUrl = `${moviesURL}top_rated?${apikey}`; // o filme mais votado
    getTopRatedMovies(topRatedUrl);
  }, []); // array de dependencias
  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};
export default Home;
