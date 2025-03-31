import styled from "styled-components";
import { Link } from "wouter";

import { TiArrowBack } from "react-icons/ti";
import { FaAngleRight } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { IoIosLink } from "react-icons/io";
import { FaFigma } from "react-icons/fa";
import { IoCodeOutline } from "react-icons/io5";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { CiStar } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { AiFillTool } from "react-icons/ai";


import { PrimaryButtonComponent } from "../components/primaryButton";
import { SecondaryButtonComponent } from "../components/secondaryButton";

import JsonData from '../assets/json/projects.json';


const ProjectContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(180deg, var(--black) 30%, var(--gray) 100%);
    padding: 48px;
`;

const ProjectContent = styled.div`
    display: flex;
    gap: 48px;
    max-width: 1200px;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (width <= 900px) {
    }
`;

const ProjectDescription = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 48px;
    min-width: 50%;
    max-width: 600px;
`;

const ProjectDescriptionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

const ProjectDescriptionHeaderContent = styled.div`
    display: flex;
    gap: 16px;
`

const ProjectDescriptionHeaderContentSpan = styled.span`
    color: var(--ligthGray);
    font-size: 16px;
`;

const ProjectDescriptionHeaderContentIcon = styled(FaAngleRight)`
    color: var(--orange);
    font-size: 16px;
`;

const ProjectDescriptionHeaderContentProjectSpan = styled.span`
    color: var(--white);
    font-size: 16px;
`;

const ProjectDescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const ProjectDescriptionContentHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const ProjectDescriptionContentHeaderTitle = styled.h1`
    color: var(--white);
    font-size: 48px;
`;

const ProjectDescriptionContentHeaderLineSpan = styled.span`
    width: 50%;
    height: 4px;
    display: block;
    background-color: var(--orange);
`;

const ProjectDescriptionContentDescription = styled.p`
    font-size: 16px;
    color: var(--ligthGray);
    font-family: 'louis';
`;

const ProjectDescriptionContentButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`;

const ProjectDescriptionContentButtonsAnchor = styled.a`
    all: unset;
`;

const ProjectDescriptionTechnologies = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const ProjectDescriptionTechnologiesHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ProjectDescriptionTechnologiesHeaderIcon = styled(IoCodeOutline)`
    font-size: 20px;
    color: var(--orange);
`;

const ProjectDescriptionTechnologiesHeaderTitle = styled.h3`
    font-size: 20px;
    color: var(--white);
`;

const ProjectDescriptionTechnologiesCardsList = styled.ul`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectDescriptionTechnologiesCardsItem = styled.li`
    all: unset;
`;

const ProjectCardsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

const ProjectCardsContentCard = styled.div`
    background-color: var(--transparent);
    padding: 32px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 300px;
`;

const ProjectCardsContentCardImage = styled.img`
    width: 200px;
`;

const ProjectCardsContentCardIcon = styled(TiStarFullOutline)`
    color: var(--orange);
    font-size: 24px;
`;

const ProjectCardsContentCardTitle = styled.h3`
    color: var(--white);
    font-size: 20px;
    display: flex;
    gap: 16px;
    align-items: center;
    font-family: 'louis';
    font-weight: 800;
`;

const ProjectCardsContentCardList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const ProjectCardsContentCardListIcons = styled(CiStar)`
    color: var(--orange);
    font-size: 24px;
`;

const ProjectCardsContentCardListItem = styled.li`
    all: unset;
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--white);
    font-size: 16px;
    font-family: 'louis';
`;

const ProjectCardsContentSpan = styled.span`
    display: flex;
    gap: 16px;
    color: var(--orange);
    font-size: 20px;
`

export const Project = ({ id }: { id: string }) => {
    const projectData = JsonData.find(item => item.id === parseInt(id));
    console.log(projectData);

    return (
        <ProjectContainer>
            <ProjectContent>
                <ProjectDescription>
                    <ProjectDescriptionHeader>
                        <Link href="/">
                            <PrimaryButtonComponent text="Voltar">
                                <TiArrowBack />
                            </PrimaryButtonComponent>
                        </Link>

                        <ProjectDescriptionHeaderContent>
                            <ProjectDescriptionHeaderContentSpan>
                                Projetos
                            </ProjectDescriptionHeaderContentSpan>

                            <ProjectDescriptionHeaderContentIcon />

                            <ProjectDescriptionHeaderContentProjectSpan>
                                {projectData?.title}
                            </ProjectDescriptionHeaderContentProjectSpan>
                        </ProjectDescriptionHeaderContent>

                    </ProjectDescriptionHeader>

                    <ProjectDescriptionContent>

                        <ProjectDescriptionContentHeader>
                            <ProjectDescriptionContentHeaderTitle>
                                {projectData?.title}
                            </ProjectDescriptionContentHeaderTitle>
                            <ProjectDescriptionContentHeaderLineSpan />
                        </ProjectDescriptionContentHeader>

                        <ProjectDescriptionContentDescription>
                            {projectData?.fullDescription}
                        </ProjectDescriptionContentDescription>

                        <ProjectDescriptionContentButtons>
                            {projectData?.frontendGitHubLink && (
                                <ProjectDescriptionContentButtonsAnchor
                                    href={projectData?.frontendGitHubLink ?? ''}
                                    target="_blank"
                                >
                                    <PrimaryButtonComponent text="github front-end" largePadding>
                                        <SiGithub />
                                    </PrimaryButtonComponent>
                                </ProjectDescriptionContentButtonsAnchor>
                            )}

                            {projectData?.backendGitHubLink && (
                                <ProjectDescriptionContentButtonsAnchor
                                    href={projectData?.backendGitHubLink ?? ''}
                                    target="_blank"
                                >
                                    <PrimaryButtonComponent text="github back-end" largePadding>
                                        <SiGithub />
                                    </PrimaryButtonComponent>
                                </ProjectDescriptionContentButtonsAnchor>
                            )}

                            {projectData?.demoLink && (
                                <ProjectDescriptionContentButtonsAnchor
                                    href={projectData?.demoLink ?? ''}
                                    target="_blank"
                                >
                                    <SecondaryButtonComponent text="demo" largePadding>
                                        <IoIosLink />
                                    </SecondaryButtonComponent>
                                </ProjectDescriptionContentButtonsAnchor>
                            )}

                            {projectData?.figmaLink && (
                                <ProjectDescriptionContentButtonsAnchor
                                    href={projectData?.figmaLink ?? ''}
                                    target="_blank"
                                >
                                    <SecondaryButtonComponent text="figma" largePadding>
                                        <FaFigma />
                                    </SecondaryButtonComponent>
                                </ProjectDescriptionContentButtonsAnchor>
                            )}
                        </ProjectDescriptionContentButtons>
                    </ProjectDescriptionContent>

                    <ProjectDescriptionTechnologies>
                        <ProjectDescriptionTechnologiesHeader>
                            <ProjectDescriptionTechnologiesHeaderIcon />
                            <ProjectDescriptionTechnologiesHeaderTitle>
                                tecnologias usadas
                            </ProjectDescriptionTechnologiesHeaderTitle>
                        </ProjectDescriptionTechnologiesHeader>

                        <ProjectDescriptionTechnologiesCardsList>
                            {projectData?.technologies.map((technology, index) => (
                                <ProjectDescriptionTechnologiesCardsItem key={index}>
                                    <PrimaryButtonComponent text={technology} largePadding={true}>
                                        <HiOutlineCodeBracketSquare />
                                    </PrimaryButtonComponent>
                                </ProjectDescriptionTechnologiesCardsItem>
                            ))}
                        </ProjectDescriptionTechnologiesCardsList>
                    </ProjectDescriptionTechnologies>
                </ProjectDescription>

                <ProjectCardsContent>
                    <ProjectCardsContentCard>
                        <ProjectCardsContentCardImage
                            src={projectData?.image}
                            alt={projectData?.title}
                        />
                    </ProjectCardsContentCard>
                    <ProjectCardsContentCard>
                        <ProjectCardsContentCardTitle>
                            <ProjectCardsContentCardIcon />
                            características
                        </ProjectCardsContentCardTitle>

                        <ProjectCardsContentCardList>
                            {projectData?.features.map((feature, index) => (
                                <ProjectCardsContentCardListItem key={index}>
                                    <ProjectCardsContentCardListIcons />
                                    {feature}
                                </ProjectCardsContentCardListItem>
                            ))}
                        </ProjectCardsContentCardList>
                    </ProjectCardsContentCard>

                    {projectData?.inProduction && (
                        <ProjectCardsContentSpan>
                            <AiFillTool />
                            Em desenvolvimento
                        </ProjectCardsContentSpan>
                    )}
                </ProjectCardsContent>
            </ProjectContent>
        </ProjectContainer>
    )
}
