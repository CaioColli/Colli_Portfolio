export interface ButtonStyleProps {
    $largePadding?: boolean
};

export interface ButtonComponentProps {
    children: React.ReactNode
    text: string
    largePadding?: boolean
    onClick?: () => void
}