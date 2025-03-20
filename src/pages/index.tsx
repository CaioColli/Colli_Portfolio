import styled from "styled-components";

import { Presentation } from "../sections/home/presentation";

const Container = styled.div`
    height: 100dvh;
    width: 100%;
`;

const Sections = styled.div`
    background: linear-gradient(180deg, var(--black) 30%, var(--gray) 100%);
`;

const Test = styled.div`
    height: 100dvh;
    background-color: var(--orange);
`;

export const Home = () => {
    return (
        <Container>
            <Presentation />

            <Sections>
                <Test />
            </Sections>
        </Container>
    )
}