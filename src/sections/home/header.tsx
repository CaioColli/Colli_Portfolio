import { LuMenu } from "react-icons/lu";
import styled from "styled-components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 48px 5%;
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
        color: var(--white);
    }
`;

export const Header = () => {
    const logoRef = useRef(null);

    // gsap.fromTo(logoRef.current, {
    //     opacity: 0,
    //     x: 1920,   
    // }, {
    //     opacity: 1,
    //     x: 0,
    //     duration: 1
    // });

    return (
        <HeaderContainer>
            <HeaderMenuButton>
                <HeaderMenuIcon />
            </HeaderMenuButton>

            <HeaderLogoSpan ref={logoRef}>
                Colli
            </HeaderLogoSpan>

            <HeaderList>
                <HeaderListItem>Home</HeaderListItem>
                <HeaderListItem>Sobre mim</HeaderListItem>
                <HeaderListItem>Projetos</HeaderListItem>
                <HeaderListItem>Contato</HeaderListItem>
            </HeaderList>
        </HeaderContainer>
    )
}