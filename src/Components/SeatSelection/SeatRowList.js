import { useState } from 'react';
import { SeatList, SeatRowStyled, Seat } from './Style';
export default function SeatRowList({ seats,changeClientOrder }) {
    const seatRows = [];
    const numberOfRows = parseInt(seats.length / 10);
    const leftSeats = seats.length % 10;
    let seatsInterval = 0;
    for (let i = 0; i < numberOfRows; i++, seatsInterval += 10) {
        seatRows.push(SeatRow(seatsInterval, seatsInterval + 10, i, { seats }, changeClientOrder));
    }
    seatRows.push(SeatRow(seatsInterval, seatsInterval + leftSeats, numberOfRows + 1, { seats }));
    return (
        <SeatList>
            {seatRows}
        </SeatList>
    );
}
function SeatRow(x, y, key, { seats }, changeClientOrder) {
    let row = [];
    for (let i = x; i < y; i++) {
        const { name, isAvailable, id } = seats[i];
        row.push(
            <SeatComponent
                key={i}
                name={name}
                id={id}
                isAvailable={isAvailable}
                changeClientOrder={changeClientOrder} />
        )
    }
    return (
        <li key={key}>
            <SeatRowStyled>
                {row}
            </SeatRowStyled>
        </li>
    );
}
function SeatComponent({ name, isAvailable, changeClientOrder, id }) {
    const [availability, setAvailability] = useState(isAvailable);
    function toggleSelected() {
        if (!availability) {
            alert("Esse assento não está disponível");
            return;
        }
        if (availability === 'selected') {
            setAvailability(true);
            changeClientOrder('remove', id, name)
            return;
        }
        setAvailability('selected');
        changeClientOrder('add', id, name)
    }

    return (
        <li onClick={toggleSelected}>
            <Seat isAvailable={availability}>
                {name}
            </Seat>
        </li>
    );
}