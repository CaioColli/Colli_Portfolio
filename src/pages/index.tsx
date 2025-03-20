import styled from "styled-components";

import { Presentation } from "../sections/home/presentation";

const Container = styled.div`
    height: 100dvh;
    width: 100%;
`;

const Sections = styled.div`
    background: linear-gradient(180deg, var(--black) 30%, var(--gray) 100%);
`;

export const Home = () => {
    return (
        <Container>
            <Presentation />

            <Sections>
                
            </Sections>
        </Container>
    )
}