import styled from "styled-components";
import { ButtonComponentProps, ButtonStyleProps } from "../types/buttonTypes";
import { ButtonIcon, ButtonText } from "../styles/buttonComponent";

const Button = styled.button<ButtonStyleProps>`
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 8px;
    border-radius: 8px;
    border: 2px solid var(--orange);
    padding: ${(props) => (props.largePadding ? '16px 24px' : '8px 16px')};
    transition: 0.2s ease-in-out;
    color: var(--orange);

    &:hover {
        transform: translateY(-4px);
    }
`;

export const SecondaryButton = ({ children, text, largePadding = false }: ButtonComponentProps) => {
    return (
        <Button largePadding={largePadding}>
            <ButtonIcon>
                {children}
            </ButtonIcon>

            <ButtonText>
                {text}
            </ButtonText>
        </Button>
    )
}