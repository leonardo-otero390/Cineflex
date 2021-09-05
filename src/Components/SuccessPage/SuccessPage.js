import { SectionTitle } from "../shared/SectionTitle";
import { OrangeButton } from "../shared/OrangeButton";
import styled from 'styled-components';
export default function SeatSelection() {
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
                        <Infos>Título</Infos>
                        <Infos>Sessão</Infos>
                    </div>
                </InfosContainer>
                <InfosContainer>
                    <InfosTitle><strong>Filme e sessão</strong></InfosTitle>
                    <div>
                        <Infos>Título</Infos>
                        <Infos>Sessão</Infos>
                    </div>
                </InfosContainer>
                <InfosContainer>
                    <InfosTitle><strong>Filme e sessão</strong></InfosTitle>
                    <div>
                        <Infos>Título</Infos>
                        <Infos>Sessão</Infos>
                    </div>
                </InfosContainer>
            </Container>
            <OrangeButton session={false}>
                Voltar para Home
            </OrangeButton>

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