import { Link } from "react-router-dom";
import {FaStar} from "react-icons/fa";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard =({movie,showLink=true})=>{
    return(
        // poster_path vem da propriedade results
        <div className="movie-card"> 
            
            <img src={imageUrl+movie.poster_path}alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p> 
                {/* vote+_average e media de votos */}
                <FaStar/>{movie.vote_average} 
            </p> 
             {/* acessando id do filme no button detalhes */}
            {showLink && <Link to={`/movie/${movie.id}`}>detalhes</Link>}
            

        </div>
    )
}
export default MovieCard;