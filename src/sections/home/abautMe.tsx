import styled from "styled-components";
import { GiStarsStack } from "react-icons/gi";
import { RiMedalLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { PrimaryButtonComponent } from "../../components/primaryButton";
import { SecondaryButtonComponent } from "../../components/secondaryButton";

import { BsEnvelopePaper } from "react-icons/bs";
import { IoCodeOutline } from "react-icons/io5";

const AbautContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
    min-height: 100%;
    padding: 96px 0;
    width: 70%;

    @media screen and (width <= 900px) {
        width: 100%;
        padding: 96px 24px;
    }
`;

const AbautDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const AbautDescriptionTitle = styled.h1`
    color: var(--orange);
    font-size: 48px;

    @media screen and (width <= 500px) {
        font-size: 40px;
    }
`;

const AbautDescriptionSpanContainer = styled.div`
    display: flex;
    gap: 16px;
    color: var(--ligthGray);
`;

const AbautDescriptionSpan = styled.span`
    font-size: 16px;
    text-align: center;
`;

const DescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;

    @media screen and (width <= 900px) {
        justify-content: center;
    }
`;

const DescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-width: 300px;
    max-width: 30%;
`;

const DescriptionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const DescriptionSubTitle = styled.h3`
    font-size: 20px;
    color: var(--orange);
`;

const DescriptionTitle = styled.h2`
    font-size: 24px;
    color: var(--white);

    & > span {
        color: var(--orange);
    }
`;

const DescriptionParagraph = styled.p`
    font-size: 16px;
    color: var(--white);
`;

const DescriptionButtons = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;

const DescriptionImageContent = styled.div`
    width: 400px;
    height: 400px;
    background-image: url('./src/assets/images/controlBackground.svg');
    background-position: center;
    background-size: cover;
    border: 2px solid var(--lightGray);
    border-radius: 50%;

    @media screen and (width <= 1280px) {
        width: 300px;
        height: 300px;
    }

    @media screen and (width <= 900px) {
        display: none;
    }
`;

const AbautCardsList = styled.ul`
    display: flex;
    gap: 24px;
    width: 100%;
    flex-wrap: wrap;

    &:hover li {
        filter: blur(1px);
    }   
    
    &:hover li:hover {
        transform: translateY(-10px);
        filter: none;
    }
`;

const AbautCardItem = styled.li`
    all: unset;
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: var(--transparentGray);
    border-radius: 8px;
    transition: 0.2s ease-in-out;
    min-width: 300px;
`;

const AbautCardHeader = styled.header`
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AbautCardHeaderIcon = styled.div`
    background-color: var(--transparentGray);
    color: var(--white);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

const AbautCardHeaderQuantity = styled.span`
    color: var(--orange);
    font-size: 24px;
`;

const AbautCardTexts = styled.div`
    display: flex;
    padding: 16px 24px;
    flex-direction: column;
    gap: 8px;
`;

const AbautCardTitle = styled.span`
    color: var(--white);
    font-size: 16px;
`;

const AbautCardSubTitle = styled.span`
    color: var(--white);
    font-size: 14px;
`;

export const AbautMe = () => {
    const handleClickCv = () => {
        const link = document.createElement('a');
        link.href = '/assets/files/cv.pdf';
        link.download = 'Curriculo_Caio_Colli_Dev.pdf';
        link.click();
    }

    const cards = [
        {
            "title": "Projetos",
            "subTitle": "Solução web inovadora criada",
            "icon": <IoCodeOutline />,
            "quantity": 12
        },
        {
            "title": "Certificados",
            "subTitle": "Competências profissionais validadas",
            "icon": <RiMedalLine />,
            "quantity": 8
        },
        {
            "title": "Tempo de experiencia",
            "subTitle": "Jornada de aprendizagem contínua",
            "icon": <TfiWorld />,
            "quantity": 2
        },
    ]

    return (
        <AbautContainer>
            <AbautDescriptionContainer>
                <AbautDescriptionTitle>Sobre mim</AbautDescriptionTitle>

                <AbautDescriptionSpanContainer>
                    <GiStarsStack />
                    <AbautDescriptionSpan>
                        Transformando ideias em uma experiencia digital
                    </AbautDescriptionSpan>
                    <GiStarsStack />
                </AbautDescriptionSpanContainer>
            </AbautDescriptionContainer>

            <DescriptionContainer>
                <DescriptionContent>
                    <DescriptionTitleContainer>

                        <DescriptionSubTitle>
                            Hello World !
                        </DescriptionSubTitle>

                        <DescriptionTitle>
                            Eu sou <span>Caio Colli</span>
                        </DescriptionTitle>

                    </DescriptionTitleContainer>

                    <DescriptionParagraph>
                        desenvolvedor FullStack com experiência e conhecimento em desenvolvimento web em linguagens como React, JavaScript, TypeScript, HTML, CSS, PHP, Node.js e MySQL.
                    </DescriptionParagraph>

                    <DescriptionButtons>
                        <PrimaryButtonComponent text="Baixar CV" onClick={handleClickCv}>
                            <BsEnvelopePaper />
                        </PrimaryButtonComponent>

                        <SecondaryButtonComponent text="Projetos">
                            <IoCodeOutline />
                        </SecondaryButtonComponent>
                    </DescriptionButtons>
                </DescriptionContent>

                <DescriptionImageContent />
            </DescriptionContainer>

            <AbautCardsList>
                {cards.map((card, index) => (
                    <AbautCardItem key={index}>
                        <AbautCardHeader>
                            <AbautCardHeaderIcon>
                                {card.icon}
                            </AbautCardHeaderIcon>
                            <AbautCardHeaderQuantity>
                                {card.quantity}
                            </AbautCardHeaderQuantity>
                        </AbautCardHeader>

                        <AbautCardTexts>
                            <AbautCardTitle>
                                {card.title}
                            </AbautCardTitle>
                            <AbautCardSubTitle>
                                {card.subTitle}
                            </AbautCardSubTitle>
                        </AbautCardTexts>
                    </AbautCardItem>
                ))}
            </AbautCardsList>
        </AbautContainer >
    )
}