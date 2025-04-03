import { IoIosLink } from "react-icons/io";

import styled from "styled-components";
import { Link } from "wouter";

interface PortfolioCardsListItemImagemProps {
    $skill?: boolean
}

const CardsListItem = styled.li<PortfolioCardsListItemImagemProps>`
    all: unset;
    display: flex;
    max-width: 350px;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    gap: 16px;
    background-color: var(--transparentLigthGray);
`;

const CardsListItemImagem = styled.img<PortfolioCardsListItemImagemProps>`
    width: 60%;
    padding-top: 16px;
    transition: 0.2s ease-in;

    &:hover {
        transform: translateY(-5px);
    }
`;

const CardsListItemContent = styled.div`
    width: 100%;
    padding: 0 16px 16px 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const CardsListItemTextsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const CardsListItemTitle = styled.h3`
    color: var(--orange);
    font-size: 20px;
`;

const CardsListItemDescription = styled.p`
    color: var(--white);
    font-size: 16px;
    font-family: 'louis';
`;

const CardsListItemButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const CardsListItemAnchor = styled.a`
    all: unset;
    display: flex;
    gap: 4px;
    align-content: center;
    font-size: 14px;
    cursor: pointer;
    color: var(--orange);
    transition: 0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }
`;

const CardsListItemButtonLink = styled(Link)`
    all: unset;
    padding: 8px 16px;
    color: var(--orange);
    border: 2px solid var(--orange);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s ease-in;

    &:hover {
        transform: translateY(-5px);
    }
`;

interface CardComponentProps {
    id: number;
    image: string;
    title?: string;
    description?: string;
    demoLink?: string | null;
    certificateLink?: string | null;
    truncate?: number;
    isProject?: boolean;
    isSkill?: boolean;
}

export const CardComponent = (({ image, title, description, demoLink, id, truncate, isProject, isSkill, certificateLink }: CardComponentProps) => {
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength - 3) + "..." : text;
    };

    return (
        <CardsListItem $skill={isSkill}>
            <CardsListItemImagem
                src={image}
                alt={title}
            />

            <CardsListItemContent>
                <CardsListItemTextsContainer>
                    <CardsListItemTitle>
                        {title}
                    </CardsListItemTitle>

                    <CardsListItemDescription>
                        {truncateText(description ?? "", truncate ?? 0)}
                    </CardsListItemDescription>
                </CardsListItemTextsContainer>

                <CardsListItemButtonsContainer>
                    {demoLink && (
                        <CardsListItemAnchor href={demoLink} target="_blank">
                            Demo
                            <IoIosLink />
                        </CardsListItemAnchor>
                    )}

                    {!isProject && certificateLink && (
                        <CardsListItemAnchor href={certificateLink} target="_blank">
                            link
                            <IoIosLink />
                        </CardsListItemAnchor>
                    )}

                    {isProject && (
                        <CardsListItemButtonLink href={`/project/${id}`}>
                            Detalhes
                        </CardsListItemButtonLink>
                    )}
                </CardsListItemButtonsContainer>
            </CardsListItemContent>
        </CardsListItem>
    );
});