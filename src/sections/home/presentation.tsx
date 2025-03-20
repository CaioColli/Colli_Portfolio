import styled from "styled-components";

import { GiBrain } from "react-icons/gi";
import { IoIosLink } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";

import { PrimaryButtonComponent } from "../../components/primaryButton";
import { Header } from "./header";
import { SecondaryButton } from "../../components/secondaryButton";

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    max-height: 1080px;
    position: relative;
    width: 100%;

    @media screen and (width <= 430px) {
        align-items: center;
    }
`;

const BackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
`;

const PresentationContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: fit-content;
    max-width: 350px;
    margin-left: 230px;

    @media screen and (width <= 430px) {
        margin: 0;
        max-width: 300px;
    }
`;

const PresentationCard = styled.div`
    align-items: center;
    border-radius: 8px;
    border: 2px solid var(--orange);
    display: flex;
    gap: 8px;
    margin: 0;
    padding: 8px 16px;
    width: fit-content;
`;

const PresentationCardIcon = styled(GiBrain)`
    font-size: 18px;
    color: var(--orange);
    width: 18px;
    transition: 0.2s ease-in-out;
`

const PresentationCardTitle = styled.span`
    color: var(--orange);
    width: fit-content;
    transition: 0.2s ease-in-out;
`;

interface PresentationTitleProps {
    primary?: boolean;
}

const PresentationTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PresentationTitle = styled.h1<PresentationTitleProps>`
    color: ${(props) => (props.primary ? "var(--orange)" : "var(--white)")};
    font-size: 48px;

    @media screen and (width <= 430px) {
        font-size: 40px;
    }
`;

const PresentationDescription = styled.p`
    color: var(--white);
    font-size: 16px;
`;

const PresentationCardsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const PresentationCardItem = styled.li`
    all: unset;
    cursor: default;
    color: var(--white);
    position: relative;
    padding: 8px 16px;
    background-color: var(--ligthGray);
    border-radius: 8px;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: translateY(-4px);
    }
`;

const PresentationButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
`;

export const Presentation = () => {
    const technologies = [
        'React', 'JavaScript', 'Typescript', 'PHP', 'Node.js', 'Figma'
    ]

    return (
        <MainContent>
            <BackgroundVideo autoPlay loop muted>
                <source src="./src/assets/videos/backgroundVideo.mp4" />
            </BackgroundVideo>

            <Header />

            <PresentationContainer>
                <PresentationCard>
                    <PresentationCardIcon />
                    <PresentationCardTitle>
                        Pronto para inovar!
                    </PresentationCardTitle>
                </PresentationCard>

                <PresentationTitleContainer>
                    <PresentationTitle primary>
                        DESENVOLVEDOR
                    </PresentationTitle>

                    <PresentationTitle>
                        FULL STACK
                    </PresentationTitle>
                </PresentationTitleContainer>

                <PresentationDescription>
                    Criando websites inovadores, funcionais e fáceis de usar para soluções digitais.
                </PresentationDescription>

                <PresentationCardsList>
                    {technologies.map((technology) => (
                        <PresentationCardItem>
                            {technology}
                        </PresentationCardItem>
                    ))}
                </PresentationCardsList>

                <PresentationButtonsContainer>
                    <PrimaryButtonComponent text="Projetos">
                        <IoIosLink />
                    </PrimaryButtonComponent>

                    <SecondaryButton text="Contato">
                        <IoMailOpenOutline />
                    </SecondaryButton>
                </PresentationButtonsContainer>
            </PresentationContainer>

        </MainContent>
    )
}