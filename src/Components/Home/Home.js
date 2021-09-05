import { SectionTitle } from "../shared/SectionTitle";
import { MoviePoster } from "../shared/MoviePoster";
import { MoviesList } from './Style'
import getMoviesList from '../../API/APIUtils'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        getMoviesList(setMoviesList);
    }, []);

    return (
        <>
            <SectionTitle>Selecione o filme</SectionTitle>
            <MoviesList>
                {moviesList.map(({ id, posterURL, title }, index) => <MovieLink
                    id={id}
                    posterURL={posterURL}
                    title={title}
                    key={index} />)}
            </MoviesList>
        </>
    );
}
function MovieLink({ id, posterURL, title, }) {
    return (
        <Link to={"/filme/" + id}>
            <MoviePoster>
                <img src={posterURL} alt={title} />
            </MoviePoster>
        </Link>
    );
}