import { SectionTitle } from "../shared/SectionTitle";
import { Seat, Container, SeatLabel, ClientForm } from "./Style";
import SeatRowList from './SeatRowList';
import { OrangeButton } from "../shared/OrangeButton";
import Footer from "../Footer"
import { getSeatsList, reserveSeats } from "../../API/APIUtils";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function SeatSelection({ orderFunctions, order }) {
    const { idSessao } = useParams();
    const [seatsList, setSeatsList] = useState({ seats: [], movie: { posterURL: '' },day:{weekday:''} });
    const { changeSeatsClientOrder, setMyClient, chooseMovieSession } = orderFunctions;
    const { name, cpf, seatsOrder } = order;
    const isOrderReady = (!!name && !!cpf && !!seatsOrder.ids.length);
    useEffect(() => {
        getSeatsList(setSeatsList, idSessao);
    }, []);
    const { movie, day, seats, name: time } = seatsList;
    const session = { day, time };
    return (
        <>
            <Container>
                <SectionTitle>Selecione o assento</SectionTitle>
                <SeatRowList seats={seats} changeClientOrder={changeSeatsClientOrder} />
                <SeatLabel>
                    <li>
                        <Seat isAvailable={"selected"}></Seat>
                        <h1>Selecionado</h1>
                    </li>
                    <li>
                        <Seat isAvailable={true}></Seat>
                        <h1>Disponível</h1>
                    </li>
                    <li>
                        <Seat isAvailable={false}></Seat>
                        <h1>Indisponível</h1>
                    </li>
                </SeatLabel>
                <ClientForm>
                    <li>
                        <h1>Nome do comprador:</h1>
                        <input type="text" placeholder="Digite seu nome..." value={name} onChange={e => setMyClient(e.target.value, "name")} />
                    </li>
                    <li>
                        <h1>CPF do comprador:</h1>
                        <input type="number" placeholder="Digite seu CPF..." value={cpf} onChange={e => setMyClient(e.target.value, "cpf")} />
                    </li>
                </ClientForm>
                <Link to={isOrderReady ? "/sucesso" : '/assentos/' + idSessao}>
                    <OrangeButton session={false} onClick={() => { reserveSeats({ ids: seatsOrder.ids, name, cpf }, isOrderReady); chooseMovieSession(movie, day, time); }}>
                        Reservar assento(s)
                    </OrangeButton>
                </Link>
            </Container>
            <Footer movieInfos={movie} session={session} />
        </>
    );
}