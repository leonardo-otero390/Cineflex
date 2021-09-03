export default function SessionSelection() {
    return (
        <>
            <h1 className="section-title">Selecione o horário</h1>
            <ul className="sessions-days-list">
                <li>
                <h1 className="session-date">weekday - date</h1>
                    <ul className="sessions-day-list">
                        <li className="session">name</li>
                        <li className="session">name</li>
                    </ul>
                </li>
            </ul>
            <footer className="movie-infos-bottom-bar">
                <div className="movie-poster">
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg"/>
                </div>
                <h1 className="movie-title">Enola Holmes</h1>
            </footer>
        </>
    );
}