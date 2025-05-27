import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Link } from "wouter";

import projects from '../../assets/json/projects.json';
import certificates from '../../assets/json/certificates.json';
import skills from '../../assets/json/skills.json';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CardComponent } from "../../components/card";

gsap.registerPlugin(ScrollTrigger);

const PortfolioContainer = styled.section`
    min-height: 100vh;
    width: 70%;

    @media screen and (width <= 900px) {
        width: 100%;
        padding: 0 24px 0 24px;
    }
`;

const PortfolioContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`;

const PortfolioDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 500px;
`;

const PortfolioDescriptionTitle = styled.h1`
    color: var(--orange);
    font-size: 48px;

    @media screen and (width <= 500px) {
        font-size: 40px;
    }
`;

const PortfolioDescriptionSpan = styled.span`
    font-size: 16px;
    text-align: center;
    color: var(--ligthGray);
`;

const PortfolioCardsContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

const PortfolioCardsOptionsList = styled.ul`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`;

interface PortfolioCardsOptionsProps {
    $isSelected: boolean
}

const PortfolioCardsOptionsItem = styled.li<PortfolioCardsOptionsProps>`
    all: unset;
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 8px;
    min-height: 80px;
    background-color: var(--transparent);
    background-color: ${({ $isSelected }) => ($isSelected ? 'var(--orange)' : 'var(--transparent)')};
    border: ${({ $isSelected }) => ($isSelected ? '1px solid var(--white)' : 'none')};
    color: var(--white);
    transition: 0.2s ease-in;

    &:hover {
        border: 1px solid var(--white);
    }

    @media screen and (width <= 900px) {
        min-width: 100%;
    } 
`;

const PortfolioCardsOptionsLabel = styled.label<PortfolioCardsOptionsProps>`
    width: 100%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &::before {
        content: '|';
        display: ${({ $isSelected }) => ($isSelected ? 'block' : 'none')};
        color: var(--white);
        font-size: 32px;
    }
`;

const PortfolioCardsOptionsInput = styled.input`
    all: unset;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const PortfolioCardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const PortfolioCardsList = styled.ul`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

const PortfolioSkillsCardsListItem = styled.li`
    all: unset;
    display: flex;
    flex: 250px;
    max-width: 300px;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    gap: 16px;
    background-color: var(--transparentLigthGray);
`;

const PortfolioSkillsCardsListItemImagem = styled.img`
    width: 60%;
    padding-top: 16px;
    padding-bottom: 16px;
    transition: 0.2s ease-in;

    &:hover {
        transform: translateY(-5px);
    }
`;

const PortfolioCardsListLink = styled(Link)`
    all: unset;
    cursor: pointer;
    color: var(--orange);
    transition: 0.2s ease-in;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const Portfolio = () => {
    const [selectedOption, setSelectedOption] = useState('Projects');
    const [projectsToShow, setProjectsToShow] = useState(0);
    const [certificatesToShow, setCertificatesToShow] = useState(0);

    const portfolioContainerRef = useRef<HTMLElement>(null);
    const PortfolioDescriptionContainerRef = useRef<HTMLDivElement>(null);
    const portfolioCardsContentRef = useRef<HTMLDivElement>(null);
    const portfolioCardsListRef = useRef<HTMLUListElement>(null);

    const cardsOptions = [
        {
            "title": "Projetos",
            "inputValue": "Projects"
        },
        {
            "title": "Certificados",
            "inputValue": "Certificates"
        },
        {
            "title": "Habilidades",
            "inputValue": "Skills"
        }
    ]

    const dataProjects = projects;
    const dataCertificates = certificates;
    const dataSkills = skills;

    useEffect(() => {
        const handleResizeForCertificates = () => {
            setCertificatesToShow(window.innerWidth <= 500 ? 5 : 9);
        };

        const handleResizeForProjects = () => {
            setProjectsToShow(window.innerWidth <= 500 ? 3 : 6);
        }

        handleResizeForCertificates();
        handleResizeForProjects();

        window.addEventListener('resize', handleResizeForCertificates);
        window.addEventListener('resize', handleResizeForProjects);

        return () => {
            window.removeEventListener('resize', handleResizeForCertificates);
            window.removeEventListener('resize', handleResizeForProjects);
        }
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: portfolioContainerRef.current,
                markers: false,
                start: 'top bottom',
                end: '30% center',
                scrub: 2
            }
        });

        if (
            PortfolioDescriptionContainerRef.current,
            portfolioCardsContentRef.current
        ) {
            gsap.set([
                PortfolioDescriptionContainerRef.current,
                portfolioCardsContentRef.current.children,
            ], {
                opacity: 0,
                scale: 0.8,
                y: 100,
                delay: 0.5
            })

            tl.to(PortfolioDescriptionContainerRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                delay: 0.5
            })
                .to(portfolioCardsContentRef.current.children, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    delay: 0.5,
                    stagger: 0.3
                }, "-=0.2")
        }

    }, [])

    const handleOptionClick = (value: string) => {
        if (value != selectedOption) {
            if (portfolioCardsListRef.current) {
                gsap.fromTo(portfolioCardsListRef.current, {
                    opacity: 0,
                    scale: 0.8,
                    y: 100
                }, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "sine.inOut",
                })
            }
        }
    }

    return (
        <PortfolioContainer ref={portfolioContainerRef} id="Portfolio">
            <PortfolioContent>
                <PortfolioDescriptionContainer ref={PortfolioDescriptionContainerRef}>
                    <PortfolioDescriptionTitle>
                        Portfolio
                    </PortfolioDescriptionTitle>

                    <PortfolioDescriptionSpan>
                        Explore minha jornada por meio de projetos, certificações e expertise técnica. Cada seção representa um marco em meu caminho de aprendizado contínuo.
                    </PortfolioDescriptionSpan>
                </PortfolioDescriptionContainer>

                <PortfolioCardsContent ref={portfolioCardsContentRef}>
                    <PortfolioCardsOptionsList>
                        {cardsOptions.map((card, index) => (
                            <PortfolioCardsOptionsItem key={index} $isSelected={selectedOption === card.inputValue}>
                                <PortfolioCardsOptionsLabel $isSelected={selectedOption === card.inputValue}>
                                    <PortfolioCardsOptionsInput
                                        type="radio"
                                        name="cardsOptions"
                                        value={card.inputValue}
                                        onChange={() => setSelectedOption(card.inputValue)}
                                        onClick={() => handleOptionClick(card.inputValue)}
                                    />
                                    {card.title}
                                </PortfolioCardsOptionsLabel>
                            </PortfolioCardsOptionsItem>
                        ))}
                    </PortfolioCardsOptionsList>

                    <PortfolioCardsContainer>
                        <PortfolioCardsList ref={portfolioCardsListRef}>
                            {selectedOption === 'Projects' &&
                                dataProjects.slice(0, projectsToShow).map((project) => (
                                    <CardComponent
                                        key={project.id}
                                        id={project.id}
                                        image={project.image}
                                        title={project.title}
                                        description={project.description}
                                        demoLink={project.demoLink}
                                        truncate={120}
                                        isProject
                                    />
                                )
                                )}

                            {selectedOption === 'Certificates' &&
                                dataCertificates.slice(0, certificatesToShow).map((certificate) => (
                                    <CardComponent
                                        key={certificate.id}
                                        id={certificate.id}
                                        image={certificate.image}
                                        title={certificate.title}
                                        description={certificate.description}
                                        certificateLink={certificate.link}
                                        truncate={100}
                                    />
                                ))
                            }

                            {selectedOption === 'Skills' &&
                                dataSkills.map((skill) => (
                                    <PortfolioSkillsCardsListItem
                                        key={skill.id}
                                    >
                                        <PortfolioSkillsCardsListItemImagem
                                            src={skill.image}
                                            alt={skill.name}
                                        />
                                    </PortfolioSkillsCardsListItem>
                                )
                                )}
                        </PortfolioCardsList>

                        {selectedOption === 'Projects' && (
                            <PortfolioCardsListLink href={`/portfolio/projects`}>
                                Ver todos projetos
                            </PortfolioCardsListLink>
                        )
                        }

                        {selectedOption === 'Certificates' &&
                            dataCertificates.length >= 9 && (
                                <PortfolioCardsListLink href={`/portfolio/certificates`}>
                                    Ver mais certificados
                                </PortfolioCardsListLink>
                            )
                        }

                    </PortfolioCardsContainer>
                </PortfolioCardsContent>

            </PortfolioContent>
        </PortfolioContainer>
    )
}