import { SectionTitle } from "../shared/SectionTitle";
import Footer from "../Footer";
import { OrangeButton } from "../shared/OrangeButton";
import { SessionsList, SessionDate, DaysList, Container } from './Style'
export default function SessionSelection() {
    return (
        <>
            <Container>
                <SectionTitle>Selecione o horário</SectionTitle>
                <DaysList>
                    <li>
                        <SessionDate>weekday - date</SessionDate>
                        <SessionsList>
                            <li>
                                <OrangeButton session>name</OrangeButton>
                            </li>
                            <li>
                                <OrangeButton session>name</OrangeButton>
                            </li>
                        </SessionsList>
                    </li>
                </DaysList>
            </Container>
            <Footer />
        </>
    );
}