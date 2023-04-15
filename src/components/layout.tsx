import { Navbar } from './navigation/Navbar'
import { useState } from 'react';
import { MenuButton } from './navigation/MenuButton';
import { NavMenuEvent } from './types';


export default function Layout({ children }: { children: JSX.Element }) {

    const [navClicked, setNavClicked] = useState(false);

    const onNavClick = (e: NavMenuEvent) => {
        e.preventDefault();
        setNavClicked(!navClicked);
    }

    return (
        <>
            <Navbar navClicked={navClicked} />
            <MenuButton onNavClick={onNavClick} />
            <main className='fixed w-full h-full left-0 top-0 z-10 min-h-screen'>
                {children}
            </main>
        </>
    )
}