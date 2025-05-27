import { Tooltip } from "react-tooltip";

import styled from "styled-components";

const PortfolioSkillsCardsListItem = styled.li`
    all: unset;
    display: flex;
    flex: 250px;
    max-width: 300px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    gap: 16px;
    background-color: var(--transparentLigthGray);
`;

const PortfolioSkillsCardsListItemImagem = styled.img`
    width: 40%;
    padding-top: 16px;
    padding-bottom: 16px;
    transition: 0.2s ease-in;

    &:hover {
        transform: translateY(-5px);
    }
`;

interface SkillCardProps {
    data?: string;
    img?: string;
    alt?: string;
}

export const SkillCard = ({ data, img, alt }: SkillCardProps) => {
    return (
        <PortfolioSkillsCardsListItem
            data-tooltip-id="skills-tooltip"
            data-tooltip-content={data}
        >
            <PortfolioSkillsCardsListItemImagem
                src={img}
                alt={alt}
            />

            <Tooltip
                id='skills-tooltip'
                place='top'
            />
        </PortfolioSkillsCardsListItem>
    )
}