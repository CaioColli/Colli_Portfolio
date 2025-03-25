import styled from "styled-components";

import { Presentation } from "../sections/home/presentation";
import { AbautMe } from "../sections/home/abautMe";

const Container = styled.div`
    height: 100dvh;
    max-height: 1080px;
    width: 100%;
`;

const Sections = styled.div`
    background: linear-gradient(180deg, var(--black) 30%, var(--gray) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Home = () => {
    return (
        <Container>
            <Presentation />

            <Sections>
                <AbautMe />
            </Sections>
        </Container>
    )
}