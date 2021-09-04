import { SectionTitle } from "../shared/SectionTitle";
import {MoviePoster} from "../shared/MoviePoster";
import {MoviesList} from './Style'
export default function Home() {
    const item = <MoviePoster>{<img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" />}</MoviePoster>;
    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(item);
    }
    return (
        <>
            <SectionTitle>Selecione o filme</SectionTitle>
            <MoviesList>
                <MoviePoster><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg" /></MoviePoster>
                {array.map(poster => poster)}
            </MoviesList>
        </>
    );
}