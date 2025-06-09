import styled from "styled-components";

import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactContainer = styled.section`
    min-height: 100%;
    width: 70%;
    padding-bottom: 96px;
    max-width: 1920px;

    @media screen and (width <= 900px) {
        width: 100%;
        padding: 0 24px 48px 24px;
    }
`;

const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
`;

const ContactDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 500px;
`;

const ContactDescriptionTitle = styled.h1`
    color: var(--orange);
    font-size: 48px;
    margin: 0;

    @media screen and (width <= 500px) {
        font-size: 40px;
    }
`;

const ContactDescriptionSpan = styled.span`
    font-size: 16px;
    text-align: center;
    color: var(--ligthGray);
`;

const ContactCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    padding: 24px;
    background-color: var(--mediumGray);
    border-radius: 8px;
`;

const ContactCardTitle = styled.h2`
    font-size: 24px;
    color: var(--orange);
`;

const ContactCardList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const ContactCardItemAnchor = styled.a`
    all: unset;
    cursor: pointer;
`;

const ContactCardItem = styled.li`
    all: unset;
    display: flex;
    align-items: center;
    gap: 16px;
    background-color: var(--transparentLigthGray);
    padding: 16px 24px;
    border-radius: 8px;
`

const ContactCardItemIcon = styled.span`
    color: var(--white);
    font-size: 24px;
`;

const ContactCardItemTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ContactCardItemTitle = styled.h4`
    color: var(--white);
    font-size: 16px;
`;

const ContactCardItemSpan = styled.span`
    color: var(--ligthGray);
    font-size: 14px;
`

export const Contact = () => {
    const ContactContainerRef = useRef<HTMLElement>(null);
    const ContactContentRef = useRef<HTMLDivElement>(null);

    const links = [
        {
            "icon": <FaLinkedin />,
            "title": "Me mande uma mensagem",
            "description": "Linkedin",
            "link": "https://www.linkedin.com/in/caiocolli/"
        },
        {
            "icon": <FaGithubSquare />,
            "title": "Veja meus projetos",
            "description": "Github",
            "link": "https://github.com/CaioColli"
        }
    ]

    useEffect(() => {
        if (
            ContactContainerRef.current,
            ContactContentRef.current
        ) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ContactContainerRef.current,
                    markers: false,
                    start: "top bottom",
                    end: "top center",
                    scrub: 2
                }
            });

            gsap.set([
                ContactContentRef.current,
            ], {
                opacity: 0,
                scale: 0.8,
                y: 100,
            })


            tl.to(ContactContentRef.current, {
                opacity: 1,
                scale: 1,
                y: 0
            })
        }
    }, [])

    return (
        <ContactContainer ref={ContactContainerRef} id="Contact">
            <ContactContent ref={ContactContentRef}>
                <ContactDescriptionContainer>
                    <ContactDescriptionTitle>
                        Contate-me
                    </ContactDescriptionTitle>

                    <ContactDescriptionSpan>
                        Tem uma pergunta? Envie-me uma mensagem e eu responderei em breve.
                    </ContactDescriptionSpan>
                </ContactDescriptionContainer>

                <ContactCardContainer>
                    <ContactCardTitle>
                        contacte-me com
                    </ContactCardTitle>

                    <ContactCardList>
                        {links.map((link, index) => (
                            <ContactCardItemAnchor
                                href={link.link}
                                key={index}
                                target="_blank"
                            >
                                <ContactCardItem>
                                    <ContactCardItemIcon>
                                        {link.icon}
                                    </ContactCardItemIcon>

                                    <ContactCardItemTextsContainer>
                                        <ContactCardItemTitle>
                                            {link.title}
                                        </ContactCardItemTitle>

                                        <ContactCardItemSpan>
                                            {link.description}
                                        </ContactCardItemSpan>
                                    </ContactCardItemTextsContainer>
                                </ContactCardItem>
                            </ContactCardItemAnchor>
                        ))}
                    </ContactCardList>
                </ContactCardContainer>
            </ContactContent>
        </ContactContainer>
    )
}