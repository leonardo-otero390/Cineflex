import { SeatList, SeatRowStyled, Seat } from './Style'
export default function SeatRowList({ seats }) {
    const seatRows = [];
    const numberOfRows = parseInt(seats.length / 10);
    const leftSeats = seats.length % 10;
    let seatsInterval = 0;
    for (let i = 0; i < numberOfRows; i++, seatsInterval += 10) {
        seatRows.push(SeatRow(seatsInterval, seatsInterval + 10, i, { seats }));
    }
    seatRows.push(SeatRow(seatsInterval, seatsInterval + leftSeats, numberOfRows + 1, { seats }));
    return (
        <SeatList>
            {seatRows}
        </SeatList>
    );
}
function SeatRow(x, y, key, { seats }) {
    let row = [];
    for (let i = x; i < y; i++) {
        const { name, isAvailable } = seats[i];
        row.push(
            <li key={i}>
                <Seat isAvailable={isAvailable}>
                    {name}
                </Seat>
            </li>
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
