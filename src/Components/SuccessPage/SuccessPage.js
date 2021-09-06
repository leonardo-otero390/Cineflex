import { SectionTitle } from "../shared/SectionTitle";
import { OrangeButton } from "../shared/OrangeButton";
import styled from 'styled-components';
import { Link } from "react-router-dom";
export default function SeatSelection({ order, movieSession ,resetOrder}) {
    const { movie, day, time } = movieSession;
    return (
        <>
            <SectionTitle success>
                <strong>
                    Pedido feito<br />
                    com sucesso!
                </strong>
            </SectionTitle>
            <Container>
                <InfosContainer>
                    <InfosTitle><strong>Filme e sessão</strong></InfosTitle>
                    <div>
                        <Infos>{movie.title}</Infos>
                        <Infos>{day.date + ' ' + time}</Infos>
                    </div>
                </InfosContainer>
                <InfosContainer>
                    <InfosTitle><strong>Ingressos</strong></InfosTitle>
                    <div>
                        {order.seatsOrder.seatsName.map((name, index) => <Infos key={index}>Assento {name}</Infos>)}
                    </div>
                </InfosContainer>
                <InfosContainer>
                    <InfosTitle><strong>Comprador</strong></InfosTitle>
                    <div>
                        <Infos>Nome: {order.name}</Infos>
                        <Infos>CPF: {order.cpf}</Infos>
                    </div>
                </InfosContainer>
            </Container>
            <Link to="/" style={{textDecoration: "none"}}>
                <OrangeButton session={false} onClick={resetOrder}>
                    Voltar para Home
                </OrangeButton>
            </Link>
        </>
    );
}
const Container = styled.div`
width:327px;
height:330px;
margin:0 auto 40px;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const InfosContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
height:110px;
`
const InfosTitle = styled.h1`
font-size:24px;
`
const Infos = styled.h2`
font-size:22px;
line-height:26px;
`