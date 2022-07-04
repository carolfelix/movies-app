import { Container, MovieList, Movie } from "./style";
import { useState, useEffect } from 'react';
import { APIKEY } from '../../configs/apikey'
import { Link } from 'react-router-dom'
import buscarFilmes from "../../repositorios/repositorio";
import baby from "../../repositorios/repositorio";

function Home(){

    const [movies, setMovies] = useState<null | IMovies[]>([]);
    const image_path = "https://image.tmdb.org/t/p/w500";

    interface IMovies {
        id: number,
        poster_path: string,
        title: string
    }

    const listaFilmes = () => buscarFilmes().then((response) => setMovies(response.results));

    useEffect(() => {
        listaFilmes();
    }, [])

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies?.map(movie => {
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )};

export default Home;