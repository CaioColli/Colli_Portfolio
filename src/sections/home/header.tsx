import { LuMenu } from "react-icons/lu";
import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 48px 10%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (width <= 320px) {
        padding: 16px;
    }
`;

const HeaderMenuButton = styled.button`
    all: unset;
    display: none;

    @media screen and (width <= 500px) {
        display: block;
    }
`;

const HeaderMenuIcon = styled(LuMenu)`
    font-size: 40px;
    color: var(--orange);
    width: fit-content;
`;

const HeaderLogoSpan = styled.span`
    color: var(--orange);
    font-size: 24px;
    max-width: fit-content;
    cursor: pointer;
    margin: 0;

    @media screen and (width <= 500px) {
        display: none;
    }
`;

const HeaderList = styled.ul`
    display: flex;
    gap: 24px;
    max-width: fit-content;
    margin: 0;

    @media screen and (width <= 500px) {
        display: none;
    }
`;

const HeaderListItem = styled.li`
    all: unset;
    color: var(--orange);
    font-size: 16px;
    cursor: pointer;
    position: relative;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: translateY(-4px) !important;
    }
`;

export const Header = () => {
    const logoRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    
    useEffect(() => {
        if (logoRef.current && listRef.current) {
            gsap.fromTo(logoRef.current, {
                opacity: 0,
                x: -100,
            }, {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "back.out(1.5)"
            })

            gsap.fromTo(listRef.current.children, {
                opacity: 0,
                y: -100,
            }, {
                opacity: 1,
                y: 0,
                delay: 0.2,
                stagger: 0.2,
            });
        }
    }, []);

    const headerOptions = ['Home', 'Sobre mim', 'Projetos', 'Contato'];

    return (
        <HeaderContainer>
            <HeaderMenuButton>
                <HeaderMenuIcon />
            </HeaderMenuButton>

            <HeaderLogoSpan ref={logoRef}>
                Colli
            </HeaderLogoSpan>

            <HeaderList ref={listRef}>
                {headerOptions.map((item, index) => (
                    <HeaderListItem key={index}>
                        {item}
                    </HeaderListItem>
                ))}
            </HeaderList>
        </HeaderContainer>
    )
}