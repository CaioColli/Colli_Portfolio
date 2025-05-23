import styled from "styled-components";

import { GiBrain } from "react-icons/gi";
import { IoIosLink } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";

import { Header } from "./header";
import { PrimaryButtonComponent } from "../../components/primaryButton";
import { SecondaryButtonComponent } from "../../components/secondaryButton";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { handleScrollTo } from "../../utils/scrollToGsap";

const MainContent = styled.main`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    justify-content: center;
    position: relative;
    z-index: 1;

    @media screen and (width <= 500px) {
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
    margin-left: 10%;

    @media screen and (width <= 500px) {
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

const PresentationTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

interface PresentationTitleProps {
    $primary?: boolean;
}

const PresentationTitle = styled.h1<PresentationTitleProps>`
    color: ${(props) => (props.$primary ? "var(--orange)" : "var(--white)")};
    font-size: 48px;

    @media screen and (width <= 500px) {
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
        transform: translateY(-4px) !important;
    }
`;

const PresentationButtonsContainer = styled.div`
    display: flex;
    gap: 16px;
`;

export const Presentation = () => {
    const presentationCardRef = useRef<HTMLDivElement>(null);
    const presentationTltlesRef = useRef<HTMLDivElement>(null);
    const presentationDescriptionRef = useRef<HTMLParagraphElement>(null);
    const presentationCardsRef = useRef<HTMLUListElement>(null);
    const presentationButtonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (
            presentationCardRef.current &&
            presentationTltlesRef.current &&
            presentationDescriptionRef.current &&
            presentationCardsRef.current &&
            presentationButtonsRef.current
        ) {
            const tl = gsap.timeline({ duration: 0.5 });

            gsap.set([
                presentationCardRef.current,
                presentationTltlesRef.current,
                presentationDescriptionRef.current,
                presentationCardsRef.current,
                presentationButtonsRef.current
            ], { opacity: 0, y: 50 });

            tl.to(presentationCardRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "back.out(4)",
            })
                .to(presentationTltlesRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(2)",
                }, "-=0.5")
                .to(presentationDescriptionRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(2)",
                }, "-=0.5")
                .to(presentationCardsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(2)",
                }, "-=0.5")
                .to(presentationButtonsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "back.out(2)",
                }, "-=0.5");
        }
    }, [])

    const technologies = [
        'React', 'JavaScript', 'Typescript', 'PHP', 'Node.js', 'Figma'
    ]

    return (
        <MainContent id="Presentation">
            <BackgroundVideo autoPlay loop muted>
                <source src="assets/videos/backgroundVideo.mp4" />
            </BackgroundVideo>

            <Header />

            <PresentationContainer>
                <PresentationCard ref={presentationCardRef}>
                    <PresentationCardIcon />
                    <PresentationCardTitle>
                        Pronto para inovar!
                    </PresentationCardTitle>
                </PresentationCard>

                <PresentationTitleContainer ref={presentationTltlesRef}>
                    <PresentationTitle $primary>
                        DESENVOLVEDOR
                    </PresentationTitle>

                    <PresentationTitle>
                        FULL STACK
                    </PresentationTitle>
                </PresentationTitleContainer>

                <PresentationDescription ref={presentationDescriptionRef}>
                    Criando websites inovadores, funcionais e fáceis de usar para soluções digitais.
                </PresentationDescription>

                <PresentationCardsList ref={presentationCardsRef}>
                    {technologies.map((technology, index) => (
                        <PresentationCardItem key={index}>
                            {technology}
                        </PresentationCardItem>
                    ))}
                </PresentationCardsList>

                <PresentationButtonsContainer ref={presentationButtonsRef}>
                    <PrimaryButtonComponent text="Portfolio" onClick={() => handleScrollTo("Portfolio")}>
                        <IoIosLink />
                    </PrimaryButtonComponent>

                    <SecondaryButtonComponent text="Contato" onClick={() => handleScrollTo("Contact")}>
                        <IoMailOpenOutline />
                    </SecondaryButtonComponent>
                </PresentationButtonsContainer>
            </PresentationContainer>

        </MainContent>
    )
}
