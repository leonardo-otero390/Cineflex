export default function Home(){
    const item = <li className="movie-poster"><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"/></li>;
    const array = [];
    for (let i = 0; i <10;i++){
        array.push(item);
    }
    return (
<>
    <h1 className="section-title">Selecione o filme</h1>
    <ul className="movies-list">
        <li className="movie-poster"><img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"/></li>
        {array.map(poster => poster)}
    </ul>
</>
    );
}