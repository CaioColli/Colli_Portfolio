import { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import gsap from "gsap";
import { Link } from "wouter";
import { TiArrowBack } from "react-icons/ti";

import { PrimaryButtonComponent } from "../components/primaryButton";
import { CardComponent } from "../components/card";
import { SkillCard } from "../components/skillCard";

import projects from '../assets/json/projects.json';
import certificates from '../assets/json/certificates.json';
import skills from '../assets/json/skills.json';


const Container = styled.section`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(180deg, var(--black) 30%, var(--gray) 100%);
    padding: 48px;
`;

const Content = styled.div`
    width: 1200px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 48px;
`;

const ContentHeader = styled.header`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const ContentHeaderSpan = styled.span`
    color: var(--ligthGray);
    font-size: 16px;
`;

const ContentCardsList = styled.ul`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: center;
`;

interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    demoLink: string | null;
    fullDescription: string;
    backendGitHubLink: string | null;
    frontendGitHubLink: string | null;
    figmaLink: string | null;
    technologies: string[];
    inProduction: boolean;
    features: string[];
}

interface Certificate {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string | null;
}

interface Skill {
    id: number;
    image: string;
    title: string;
}

export const DynamicCategory = ({ category }: { category: string }) => {
    const [tooltipe, setTooltipe] = useState(false);
    const contentCardsListRef = useRef<HTMLUListElement>(null);

    let data = null;

    if (category === "projects") {
        data = projects as Project[];
    } else if (category === "certificates") {
        data = certificates as Certificate[];
    } else {
        data = skills as Skill[];
    }

    useEffect(() => {
        if (contentCardsListRef.current) {
            gsap.fromTo(contentCardsListRef.current.children, {
                opacity: 0,
                y: 100
            }, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                onComplete: () => {
                    setTooltipe(true);
                }
            })
        }
    }, [category]);

    return (
        <Container>
            <Content>
                <ContentHeader>
                    <Link href="/">
                        <PrimaryButtonComponent text="Voltar">
                            <TiArrowBack />
                        </PrimaryButtonComponent>
                    </Link>
                    {category === "projects" ? (
                        <ContentHeaderSpan>
                            Projetos
                        </ContentHeaderSpan>
                    ) : category === 'certificates' ? (
                        <ContentHeaderSpan>
                            Certificados
                        </ContentHeaderSpan>
                    ) : (
                        <ContentHeaderSpan>
                            Habilidades
                        </ContentHeaderSpan>
                    )}
                </ContentHeader>

                <ContentCardsList ref={contentCardsListRef}>
                    {category === 'projects' && (projects as Project[]).map((project) => (
                        <CardComponent
                            key={project.id}
                            id={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            demoLink={(project as any).demoLink}
                            truncate={120}
                            isProject
                        />
                    ))}

                    {category === 'certificates' && (certificates as Certificate[]).map((certificate) => (
                        <CardComponent
                            key={certificate.id}
                            id={certificate.id}
                            image={certificate.image}
                            title={certificate.title}
                            description={certificate.description}
                            certificateLink={(certificate as any).link}
                            truncate={100}
                        />
                    ))}

                    {category === 'skills' && (skills as Skill[]).map((skill) => (
                        <SkillCard
                            key={skill.id}
                            data={tooltipe ? skill.title : undefined}
                            img={skill.image}
                            alt={skill.title}
                        />
                    ))}

                </ContentCardsList>
            </Content>
        </Container>
    )
}