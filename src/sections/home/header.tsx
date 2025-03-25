import { LuMenu } from "react-icons/lu";
import styled from "styled-components";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const HeaderContainer = styled.header`
    position: absolute;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (width <= 900px) and (width > 500px) {
        position: relative;
        left: 0;
        transform: translateX(0);
}
`;

const HeaderMenuButton = styled.button`
    all: unset;
    display: none;
    margin: 32px 0 0 32px;

@media screen and (width <= 500px) {
    display: block;
}
`;

const HeaderMenuIcon = styled(LuMenu)`
    font-size: 40px;
    color: var(--orange);
    width: fit-content;
`;

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 48px 10%;

    @media screen and (width <= 500px) {
        display: none;
    }
`;

const HeaderLogoSpan = styled.span`
    color: var(--orange);
    font-size: 24px;
    max-width: fit-content;
    cursor: pointer;
    margin: 0;
`;

const HeaderList = styled.ul`
    display: flex;
    gap: 24px;
    max-width: fit-content;
    margin: 0;
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

            const tl = gsap.timeline();

            tl.fromTo(logoRef.current, {
                opacity: 0,
                x: -100,
            }, {
                opacity: 1,
                x: 0,
                duration: 2,
                ease: "back.out(1.5)"
            }).fromTo(listRef.current, {
                opacity: 0,
                x: 100,
            }, {
                opacity: 1,
                x: 0,
                duration: 4,
                ease: "back.out(1.5)"
            }, '-=2');
        }
    }, []);

    const headerOptions = ['Home', 'Sobre mim', 'Projetos', 'Contato'];

    return (
        <HeaderContainer>
            <HeaderMenuButton>
                <HeaderMenuIcon />
            </HeaderMenuButton>

            <HeaderContent>
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
            </HeaderContent>
        </HeaderContainer>
    )
}