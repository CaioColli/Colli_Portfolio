import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import { Link } from "wouter";

import projects from '../../assets/json/projects.json';
import certificates from '../../assets/json/certificates.json';
import skills from '../../assets/json/skills.json';

import { IoIosLink } from "react-icons/io";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const PortfolioCardsList = styled.ul`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

const PortfolioCardsListItem = styled.li`
    all: unset;
    display: flex;
    max-width: 350px;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    gap: 16px;
    background-color: var(--transparentLigthGray);
`;

interface PortfolioCardsListItemImagemProps {
    $skill?: boolean
}

const PortfolioCardsListItemImagem = styled.img<PortfolioCardsListItemImagemProps>`
    width: 60%;
    padding-top: 16px;
    padding-bottom: ${({ $skill }) => ($skill ? '16px' : '0px')};
    transition: 0.2s ease-in;

    &:hover {
        transform: translateY(-5px);
    }
`;

const PortfolioCardsListItemContent = styled.div`
    width: 100%;
    padding: 0 16px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const PortfolioCardsListItemTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const PortfolioCardsListItemTitle = styled.h3`
    color: var(--orange);
    font-size: 20px;
`;

const PortfolioCardsListItemDescription = styled.p`
    color: var(--white);
    font-size: 16px;
`;

const PortfolioCardsListItemButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PortfolioCardsListItemAnchor = styled.a`
    all: unset;
    display: flex;
    gap: 4px;
    align-content: center;
    font-size: 14px;
    cursor: pointer;
    color: var(--orange);
    transition: 0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }
`;

const PortfolioCardsListItemButtonLink = styled(Link)`
    all: unset;
    padding: 8px 16px;
    color: var(--orange);
    border: 2px solid var(--orange);
    border-radius: 8px;
    cursor: pointer;
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
        const handleResizeForProjects = () => {
            setProjectsToShow(window.innerWidth <= 500 ? 3 : 6);
        };

        const handleResizeForCertificates = () => {
            setCertificatesToShow(window.innerWidth <= 500 ? 3 : 8);
        };

        handleResizeForProjects();
        handleResizeForCertificates()

        window.addEventListener('resize', handleResizeForProjects);
        window.addEventListener('resize', handleResizeForCertificates);

        return () => {
            window.removeEventListener('resize', handleResizeForProjects);
            window.removeEventListener('resize', handleResizeForCertificates);
        }
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: portfolioContainerRef.current,
                markers: true,
                start: 'top bottom',
                end: 'top center',
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

    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
    };

    return (
        <PortfolioContainer ref={portfolioContainerRef}>
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

                    <PortfolioCardsList ref={portfolioCardsListRef}>
                        {selectedOption === 'Projects' &&
                            dataProjects.slice(0, projectsToShow).map((project) => (
                                <PortfolioCardsListItem key={project.id}>
                                    <PortfolioCardsListItemImagem
                                        src={project.image}
                                        alt={project.title}
                                    />

                                    <PortfolioCardsListItemContent>
                                        <PortfolioCardsListItemTextsContainer>
                                            <PortfolioCardsListItemTitle>
                                                {project.title}
                                            </PortfolioCardsListItemTitle>

                                            <PortfolioCardsListItemDescription>
                                                {truncateText(project.description, 100)}
                                            </PortfolioCardsListItemDescription>
                                        </PortfolioCardsListItemTextsContainer>

                                        <PortfolioCardsListItemButtonsContainer>
                                            {project.demoLink === null || project.demoLink === '' ? null : (
                                                <PortfolioCardsListItemAnchor href={project.demoLink?.toString()} target="_blank">
                                                    Demo
                                                    <IoIosLink />
                                                </PortfolioCardsListItemAnchor>
                                            )}

                                            <PortfolioCardsListItemButtonLink to={`/project/${project.id}`}>
                                                Detalhes
                                            </PortfolioCardsListItemButtonLink>
                                        </PortfolioCardsListItemButtonsContainer>
                                    </PortfolioCardsListItemContent>
                                </PortfolioCardsListItem>
                            )
                            )}

                        {selectedOption === 'Certificates' &&
                            dataCertificates.slice(0, certificatesToShow).map((certificate) => (
                                <PortfolioCardsListItem key={certificate.id}>
                                    <PortfolioCardsListItemImagem
                                        src={certificate.image}
                                        alt={certificate.title}
                                    />

                                    <PortfolioCardsListItemContent>
                                        <PortfolioCardsListItemTextsContainer>
                                            <PortfolioCardsListItemTitle>
                                                {certificate.title}
                                            </PortfolioCardsListItemTitle>

                                            <PortfolioCardsListItemDescription>
                                                {truncateText(certificate.description, 100)}
                                            </PortfolioCardsListItemDescription>
                                        </PortfolioCardsListItemTextsContainer>

                                        <PortfolioCardsListItemAnchor href={certificate.link?.toString()} target="_blank">
                                            Link
                                            <IoIosLink />
                                        </PortfolioCardsListItemAnchor>
                                    </PortfolioCardsListItemContent>
                                </PortfolioCardsListItem>
                            ))
                        }

                        {selectedOption === 'Skills' &&
                            dataSkills.map((skill) => (
                                <PortfolioCardsListItem key={skill.id}>
                                    <PortfolioCardsListItemImagem
                                        src={skill.image}
                                        alt={skill.name}
                                        $skill={true}
                                    />
                                </PortfolioCardsListItem>
                            )
                            )}
                    </PortfolioCardsList>
                </PortfolioCardsContent>

            </PortfolioContent>
        </PortfolioContainer>
    )
}