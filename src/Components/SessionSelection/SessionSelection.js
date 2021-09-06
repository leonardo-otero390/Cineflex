import { SectionTitle } from "../shared/SectionTitle";
import Footer from "../Footer";
import { OrangeButton } from "../shared/OrangeButton";
import { SessionsList, SessionDate, DaysList, Container } from './Style';
import { getSessionsList } from '../../API/APIUtils';
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SessionSelection() {
    const { idFilme } = useParams();
    const [sessionsList, setSessionsList] = useState({posterURL:'',title:''});

    useEffect(() => {
        getSessionsList(setSessionsList, idFilme);
    }, []);
    const { posterURL, title, days } = sessionsList;

    return (
        <>
            <Container>
                <SectionTitle>Selecione o horário</SectionTitle>
                <DaysList>
                    {days ?
                        days.map((day, index) => <SessionDay day={day} key={index} />) : ""
                    }
                </DaysList>
            </Container>
            <Footer movieInfos={{ posterURL, title }} />
        </>
    );
}
function SessionDay({ day }) {
    const { weekday, date, showtimes } = day;

    return (
        <li>
            <SessionDate>{weekday} - {date}</SessionDate>
            <SessionsList>
                {showtimes.map(({ name, id }, index) => <SessionTime name={name} id={id} key={index} />)}
            </SessionsList>
        </li>
    );
}
function SessionTime({ name, id }) {
    return (
        <li>
            <Link to={"/assentos/" + id}>
                <OrangeButton session>{name}</OrangeButton>
            </Link>
        </li>
    );
}