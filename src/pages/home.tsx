import styled from "styled-components";

import { Presentation } from "../sections/home/presentation";
import { AboutMe } from "../sections/home/aboutMe";
import { Portfolio } from "../sections/home/portfolio";
import { Contact } from "../sections/home/contact";

const Container = styled.div`
    height: 100dvh;
    max-height: 1080px;
    width: 100%;
`;

const Sections = styled.div`
    background: linear-gradient(180deg, var(--black) 30%, var(--gray) 100%);
    display: flex;
    gap: 128px;
    flex-direction: column;
    align-items: center;
`;

export const Home = () => {
    return (
        <Container>
            <Presentation />

            <Sections>
                <AboutMe />
                <Portfolio />
                <Contact />
            </Sections>
        </Container>
    )
}