import styled from "styled-components";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

const MainContent = styled.main`
    width: 100%;
    height: 100%;
    max-height: 1080px;
    position: relative;
`;

const BackgroundVideo = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 48px 120px;

    @media screen and (width <= 430px) {
        padding: 48px 32px;
    }
`;

const HeaderMenuButton = styled.button`
    all: unset;
    display: none;

    @media screen and (width <= 430px) {
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

    @media screen and (width <= 430px) {
        display: none;
    }
`;

const HeaderList = styled.ul`
    display: flex;
    gap: 24px;
    max-width: fit-content;

    @media screen and (width <= 430px) {
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

export const Presentation = () => {


    return (
        <MainContent>
            <BackgroundVideo autoPlay loop muted>
                <source src="./src/assets/videos/backgroundVideo.mp4" />
            </BackgroundVideo>

            <Header>
                <HeaderMenuButton>
                    <HeaderMenuIcon />
                </HeaderMenuButton>

                <HeaderLogoSpan>
                    Colli
                </HeaderLogoSpan>

                <HeaderList>
                    <HeaderListItem>Home</HeaderListItem>
                    <HeaderListItem>Sobre mim</HeaderListItem>
                    <HeaderListItem>Projetos</HeaderListItem>
                    <HeaderListItem>Contato</HeaderListItem>
                </HeaderList>
            </Header>

        </MainContent>
    )
}