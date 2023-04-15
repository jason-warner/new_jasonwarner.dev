export interface IMenuButton {
    onNavClick: (e: NavMenuEvent) => void
}

export interface NavMenuEventTarget extends EventTarget {
    index: number
}

export interface NavMenuEvent extends React.MouseEvent<HTMLLabelElement> {
    target: NavMenuEventTarget
}

export interface INavBar {
    navClicked?: boolean
}

export interface IAnimationStyle {
    variant: 'left' | 'right'
}

export type TNavItems = 'Home' | 'About Me' | 'Toolkit' | 'Portfolio' | 'Contact';