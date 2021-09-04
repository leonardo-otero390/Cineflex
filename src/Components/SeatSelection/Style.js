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
`
export { SeatList, SeatRowStyled, Seat,Container };