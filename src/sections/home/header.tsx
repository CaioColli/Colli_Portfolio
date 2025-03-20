import { LuMenu } from "react-icons/lu";
import styled from "styled-components";

const HeaderContainer = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 48px 120px;
    position: absolute;
    top: 0;

    @media screen and (width <= 430px) {
        padding: 48px 32px;
    }

    @media screen and (width <= 320px) {
        padding: 16px;
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

export const Header = () => {
    return (
        <HeaderContainer>
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
        </HeaderContainer>
    )
}