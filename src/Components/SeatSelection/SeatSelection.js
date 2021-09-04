import { SectionTitle } from "../shared/SectionTitle";
import { Seat,Container } from "./Style";
import SeatRowList from './SeatRowList';
import { OrangeButton } from "../shared/OrangeButton";
import Footer from "../Footer"
import styled from "styled-components"
export default function SeatSelection() {

    const seats = [
        {
            "id": 1,
            "name": "1",
            "isAvailable": false,
        },
        {
            "id": 2,
            "name": "2",
            "isAvailable": true,
        },
        {
            "id": 3,
            "name": "3",
            "isAvailable": true,
        },
        {
            "id": 4,
            "name": "4",
            "isAvailable": true,
        },
        {
            "id": 5,
            "name": "5",
            "isAvailable": true,
        },
        {
            "id": 6,
            "name": "6",
            "isAvailable": true,
        },
        {
            "id": 7,
            "name": "7",
            "isAvailable": true,
        },
        {
            "id": 8,
            "name": "8",
            "isAvailable": true,
        },
        {
            "id": 9,
            "name": "9",
            "isAvailable": true,
        },
        {
            "id": 10,
            "name": "10",
            "isAvailable": true,
        },
        {
            "id": 11,
            "name": "11",
            "isAvailable": true,
        },
        {
            "id": 12,
            "name": "12",
            "isAvailable": true,
        },
        {
            "id": 13,
            "name": "13",
            "isAvailable": true,
        },
        {
            "id": 14,
            "name": "14",
            "isAvailable": true,
        },
        {
            "id": 15,
            "name": "15",
            "isAvailable": true,
        },
        {
            "id": 16,
            "name": "16",
            "isAvailable": true,
        },
        {
            "id": 17,
            "name": "17",
            "isAvailable": true,
        },
        {
            "id": 18,
            "name": "18",
            "isAvailable": true,
        },
        {
            "id": 19,
            "name": "19",
            "isAvailable": true,
        },
        {
            "id": 20,
            "name": "20",
            "isAvailable": true,
        },
        {
            "id": 21,
            "name": "21",
            "isAvailable": true,
        },
        {
            "id": 22,
            "name": "22",
            "isAvailable": true,
        },
        {
            "id": 23,
            "name": "23",
            "isAvailable": true,
        },
        {
            "id": 24,
            "name": "24",
            "isAvailable": true,
        },
        {
            "id": 25,
            "name": "25",
            "isAvailable": true,
        },
        {
            "id": 26,
            "name": "26",
            "isAvailable": true,
        },
        {
            "id": 27,
            "name": "27",
            "isAvailable": true,
        },
        {
            "id": 28,
            "name": "28",
            "isAvailable": true,
        },
        {
            "id": 29,
            "name": "29",
            "isAvailable": true,
        },
        {
            "id": 30,
            "name": "30",
            "isAvailable": true,
        },
        {
            "id": 31,
            "name": "31",
            "isAvailable": true,
        },
        {
            "id": 32,
            "name": "32",
            "isAvailable": true,
        },
        {
            "id": 33,
            "name": "33",
            "isAvailable": true,
        },
        {
            "id": 34,
            "name": "34",
            "isAvailable": true,
        },
        {
            "id": 35,
            "name": "35",
            "isAvailable": true,
        },
        {
            "id": 36,
            "name": "36",
            "isAvailable": true,
        },
        {
            "id": 37,
            "name": "37",
            "isAvailable": true,
        },
        {
            "id": 38,
            "name": "38",
            "isAvailable": true,
        },
        {
            "id": 39,
            "name": "39",
            "isAvailable": true,
        },
        {
            "id": 40,
            "name": "40",
            "isAvailable": true,
        },
        {
            "id": 41,
            "name": "41",
            "isAvailable": true,
        },
        {
            "id": 42,
            "name": "42",
            "isAvailable": true,
        },
        {
            "id": 43,
            "name": "43",
            "isAvailable": true,
        },
        {
            "id": 44,
            "name": "44",
            "isAvailable": true,
        },
        {
            "id": 45,
            "name": "45",
            "isAvailable": true,
        },
        {
            "id": 46,
            "name": "46",
            "isAvailable": true,
        },
        {
            "id": 47,
            "name": "47",
            "isAvailable": true,
        },
        {
            "id": 48,
            "name": "48",
            "isAvailable": true,
        },
        {
            "id": 49,
            "name": "49",
            "isAvailable": true,
        },
        {
            "id": 50,
            "name": "50",
            "isAvailable": true,
        }
    ]
    return (
        <>
            <Container>
                <SectionTitle>Selecione o assento</SectionTitle>
                <SeatRowList seats={seats} />
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
                        <input type="text" placeholder="Digite seu nome..." />
                    </li>
                    <li>
                        <h1>CPF do comprador:</h1>
                        <input type="number" placeholder="Digite seu CPF..." />
                    </li>
                </ClientForm>
                <OrangeButton session={false}>
                    Reservar assento(s)
                </OrangeButton>
            </Container>
            <Footer />
        </>
    );
}
const ClientForm = styled.ul`
width:327px;
margin: 48px auto;
//Remove arrow/spinners from number inputs toolkit
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
//End of input toolkit
h1{
    font-size:18px;
    color:#293845;
    margin-bottom:8px;
}
input { 
    border:#d5d5d5 1px solid;
    width: 100%;
    margin-bottom:8px;
    height:51px;
    font-size:18px;
    padding-left:18px;
    ::placeholder{
        color:#afafaf;
    }
}
`
const SeatLabel = styled.ul`
width:327px;
display:flex;
justify-content:space-between;
margin:0 auto;

li{
    display:flex;
    flex-direction:column;
    align-items:center;

    h1{
        margin-top:8px;
    }
}

`