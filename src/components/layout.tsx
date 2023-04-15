import { Navbar } from './navigation/Navbar'
import { useState } from 'react';
import { MenuButton } from './navigation/MenuButton';
import { NavMenuEvent } from './types';
import { TextWrapper } from './utils/TextWrapper';


function Layout({ children }: { children: JSX.Element }) {

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
    );
}

const Page = ({
    children,
    title
}: {
    children: JSX.Element,
    title: string
}) => (
    <div className="flex flex-col p-6 sm:p-8 md:p-10 lg:p-10 xl:p-14 mt-16 min-h-full">
        <div className="flex flex-row justify-center lg:justify-start ml-0 lg:ml-16">
            <TextWrapper size='lg' >
                {title}
            </TextWrapper>
        </div>
        {children}
    </div>
);

Layout.Page = Page;


export default Layout;