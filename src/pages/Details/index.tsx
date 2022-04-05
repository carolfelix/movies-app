import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { APIKEY } from "../../configs/apikey";
import { Container } from "./style";

function Details(){

    const paramns = useParams();
    interface IMovie{
        original_title: string,
        overview: string
        id: number,
        poster_path: string,
        title: string,
        release_date:string
    }
    const image_path = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState<null | IMovie>();

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${paramns.id}?api_key=${APIKEY}&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setMovie(data)
        })
    }, [paramns.id])

    return(
        <Container>
            <div className="movie">
                <img src={`${image_path}${movie?.poster_path}`} alt={movie?.title} />
                <div className="details">
                    <h1>{`${movie?.original_title}`}</h1>
                    <span>Sinopse:{movie?.overview}</span>
                    <span className="release-date">Release date: {movie?.release_date}</span>
                    <Link to="/"><button>Go back</button></Link>
                </div>
            </div>

        </Container>
    )};

export default Details;