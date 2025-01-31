import axios from "axios";
import { useEffect, useState } from "react"
import { baseurl } from "../components/Baseurl";


export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchmovies = async () => {
            setIsLoading(true);
            try{
                const response = await axios.get(`${baseurl}/movies`);
                setMovies(response.data);
                setIsLoading(false);
            } catch(err){
                setError(err.response.data.message);
                setIsLoading(false);
            }
        }

        fetchmovies()
    }, []);

    // console.log(movies);
    if(isloading) {
        return <p>Loading Movies....</p>
    }
    if(error) {
        return <p style={{color: 'red'}}>{error}</p>
    }
    return (
        <div className="movies-container">
            <h2>Welcome to Movies Page</h2>
            <div className="movie-list">
                {movies.map(movie => (
                    <div key={movie.id}>
                        <img src={movie.poster} alt={movie.title}></img>
                        <h3>{movie.title} </h3>
                        <p>{movie.year} </p>
                    </div>
                ))}
            </div>
        </div>
    );
};