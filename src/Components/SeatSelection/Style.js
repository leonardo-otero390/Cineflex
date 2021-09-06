import styled from 'styled-components'
const SeatList = styled.ul`
display:flex;
flex-direction:column;
width:327px;
margin: 0 auto;

`
const SeatRowStyled = styled.ul`
display: flex;
justify-content: space-between;
margin-bottom:18px;
`
const Seat = styled.div`
width: 26px;
height: 26px;
background: ${({ isAvailable }) => isAvailable ? isAvailable === 'selected' ? "#8DD7CF" : "#C3CFD9" : "#FBE192"};
border: 1px solid #808F9D;
border-radius: 12px;
display:flex;
justify-content: center;
align-items: center;
`
const Container = styled.main`
margin-bottom:147px;
a{
    text-decoration:none;
}
`
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
export { SeatList, SeatRowStyled, Seat, SeatLabel, Container, ClientForm };