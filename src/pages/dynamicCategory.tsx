import styled from "styled-components";
import { Link } from "wouter";
import { TiArrowBack } from "react-icons/ti";
import gsap from "gsap";

import { PrimaryButtonComponent } from "../components/primaryButton";
import { CardComponent } from "../components/card";

import projects from '../assets/json/projects.json';
import certificates from '../assets/json/certificates.json';
import { useEffect, useRef } from "react";

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

export const DynamicCategory = ({ category }: { category: string }) => {
    const contentCardsListRef = useRef<HTMLUListElement>(null);

    let data = null;

    if (category === "projects") {
        data = projects;
    } else if (category === "certificates") {
        data = certificates;
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
                stagger: 0.2
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
                    ) : (
                        <ContentHeaderSpan>
                            Certificados
                        </ContentHeaderSpan>
                    )}
                </ContentHeader>

                <ContentCardsList ref={contentCardsListRef}>
                    {category === "projects" ? (
                        data &&
                        data.map((data) => (
                            <CardComponent
                                key={data.id}
                                id={data.id}
                                image={data.image}
                                title={data.title}
                                description={data.description}
                                demoLink={(data as any).demoLink}
                                truncate={120}
                                isProject
                            />
                        ))
                    ) : (
                        data &&
                        data.map((data) => (
                            <CardComponent
                                key={data.id}
                                id={data.id}
                                image={data.image}
                                title={data.title}
                                description={data.description}
                                certificateLink={(data as any).link}
                                truncate={100}
                            />
                        ))
                    )}

                </ContentCardsList>
            </Content>
        </Container>
    )
}