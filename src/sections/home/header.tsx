import { useEffect, useRef, useState } from "react";

import { CgCloseR } from "react-icons/cg";

import { BiHomeAlt2 } from "react-icons/bi";
import { TbInfoSquare } from "react-icons/tb";
import { GoFileDirectory } from "react-icons/go";
import { LuMail } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io5";

import styled from "styled-components";

import { LuMenu } from "react-icons/lu";

import { gsap } from "gsap";
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const HeaderContainer = styled.header`
    position: absolute;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
`;

const HeaderMenuButton = styled.button`
    all: unset;
    display: none;
    margin: 32px 0 0 32px;
    cursor: pointer;

@media screen and (width <= 900px) {
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

    @media screen and (width <= 900px) {
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

const HeaderSideMenu = styled.div`
    background-color: var(--black);
    height: 100dvh;
    width: 100%;
    position: absolute;
    top: 0;
`;

const HeaderSideMenuHeader = styled.header`
    background-color: var(--orange);
    padding: 24px;
`;

const HeaderSideMenuHeaderDivClose = styled.div`
    display: flex;
    justify-content: flex-end;
`

const HeaderSideMenuHeaderDivIcon = styled(CgCloseR)`
    color: var(--white);
    font-size: 32px;
    cursor: pointer;
`;

const HeaderSideMenuHeaderContent = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
`;

const HeaderSideMenuHeaderContentSpan = styled.span`
    color: var(--white);
    font-size: 20px;
`;

const HeaderSideMenuHeaderContentTitle = styled.h1`
    color: var(--white);
    font-size: clamp(2rem, -0.375rem + 6vw, 3rem);
`;

const HeaderSideMenuContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 96px;
`;

const HeaderSideMenuContentList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 32px;
`;

const HeaderSideMenuContentListItem = styled.li`
    all: unset;
    font-size: 24px;
    color: var(--white);
    display: flex;
    gap: 16px;
    cursor: pointer;
`;

const HeaderSideMenuContentAnchor = styled.a`
    all: unset;
    display: flex;
    gap: 16px;
    font-size: 24px;
    color: var(--white);
    cursor: pointer;
`;

export const Header = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
    const [clickedOutSide, setClickedOutSide] = useState(false);

    const logoRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const headerSideMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutSide = (event: any) => {
            if (headerSideMenuRef.current && openSideMenu && !headerSideMenuRef.current.contains(event.target) && !menuButtonRef.current?.contains(event.target)) {
                setClickedOutSide(true);
            }
        };

        document.addEventListener('click', handleClickOutSide);

        return () => {
            document.removeEventListener('click', handleClickOutSide);
        }

    }, [openSideMenu])

    useEffect(() => {
        if (openSideMenu && clickedOutSide) {
            setTimeout(() => {
                handleClickCloseSideMenu();
            }, 0.1)
            setClickedOutSide(false);

        }
    }, [clickedOutSide, openSideMenu]);

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

    const handleClickOpenSideMenu = () => {
        setOpenSideMenu(true);

        setTimeout(() => {
            gsap.fromTo(headerSideMenuRef.current, {
                x: -500,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "sine.inOut"
            });
        }, 0.1);
    }

    const handleClickCloseSideMenu = () => {
        setTimeout(() => {
            gsap.fromTo(headerSideMenuRef.current, {
                x: 0,
                opacity: 1,
            }, {
                x: -500,
                opacity: 0,
                duration: 1,
                ease: "sine.inOut",
                onComplete: () => {
                    setOpenSideMenu(false);
                }
            });
        }, 0.1);

    }

    const handleScrollTo = (id: string) => {
        handleClickCloseSideMenu();

        gsap.to(window, {
            scrollTo: {
                y: `#${id}`,
                offsetY: 50
            },
            duration: 0.5
        })
    }

    const sideMenuOptions = [
        {
            id: 1,
            ref: "Presentation",
            icon: <BiHomeAlt2 />,
            name: "Home"
        },
        {
            id: 2,
            ref: "AboutMe",
            icon: <TbInfoSquare />,
            name: "Sobre mim"
        },
        {
            id: 3,
            ref: "Portfolio",
            icon: <GoFileDirectory />,
            name: "Portfolio"
        },
        {
            id: 4,
            ref: "Contact",
            icon: <LuMail />,
            name: "Contato"
        },
    ];

    const headerOptions = [
        {
            id: 1,
            ref: "Presentation",
            name: "Home"
        },
        {
            id: 2,
            ref: "AboutMe",
            name: "Sobre mim"
        },
        {
            id: 3,
            ref: "Portfolio",
            name: "Projetos",
        },
        {
            id: 4,
            ref: "Contact",
            name: "Contato"
        }
    ];

    return (
        <HeaderContainer>
            <HeaderMenuButton onClick={handleClickOpenSideMenu} ref={menuButtonRef}>
                <HeaderMenuIcon />
            </HeaderMenuButton>

            {openSideMenu && (
                <HeaderSideMenu ref={headerSideMenuRef}>
                    <HeaderSideMenuHeader>
                        <HeaderSideMenuHeaderDivClose>
                            <HeaderSideMenuHeaderDivIcon onClick={handleClickCloseSideMenu} />
                        </HeaderSideMenuHeaderDivClose>

                        <HeaderSideMenuHeaderContent>
                            <HeaderSideMenuHeaderContentSpan>
                                Caio colli
                            </HeaderSideMenuHeaderContentSpan>

                            <HeaderSideMenuHeaderContentTitle>
                                DESENVOLVEDOR FULL STACK
                            </HeaderSideMenuHeaderContentTitle>
                        </HeaderSideMenuHeaderContent>
                    </HeaderSideMenuHeader>

                    <HeaderSideMenuContent>
                        <HeaderSideMenuContentList>
                            {sideMenuOptions.map((item) => (
                                <HeaderSideMenuContentListItem key={item.id} onClick={() => handleScrollTo(item.ref)}>
                                    {item.icon}
                                    {item.name}
                                </HeaderSideMenuContentListItem>
                            ))}
                        </HeaderSideMenuContentList>

                        <HeaderSideMenuContentAnchor href="https://github.com/CaioColli" target="__blank">
                            <IoLogoGithub />
                            Github
                        </HeaderSideMenuContentAnchor>
                    </HeaderSideMenuContent>
                </HeaderSideMenu>
            )}

            <HeaderContent>
                <HeaderLogoSpan ref={logoRef}>
                    Colli
                </HeaderLogoSpan>

                <HeaderList ref={listRef}>
                    {headerOptions.map((item) => (
                        <HeaderListItem key={item.id} onClick={() => handleScrollTo(item.ref)}>
                            {item.name}
                        </HeaderListItem>
                    ))}
                </HeaderList>
            </HeaderContent>
        </HeaderContainer>
    )
}