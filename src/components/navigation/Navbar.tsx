import Link from 'next/link'
import Image from 'next/image'
import Selfie from '../../../public/img/jason.jpg'
import { useRouter } from 'next/router'
import { useWindowSize } from "../hooks/useWindowSize";
import { IAnimationStyle, INavBar, TNavItems } from '../types';
import { TextWrapper } from '../utils/TextWrapper';


export const Navbar = ({
    navClicked
}: INavBar) => {

    const router = useRouter();

    const [width] = useWindowSize();

    const navItems = ['Home', 'About Me', 'Toolkit', 'Portfolio', 'Contact'] as const;

    const animationStyle = ({
        variant
    }: IAnimationStyle) => {
        const isMobile = width > 1024;
        const translate = variant === 'left' ? '-' : '';
        const transform = navClicked
            ? 'translate3d(0, 0, 0)'
            : isMobile
                ? `translate3d(0, ${translate}100%, 0)`
                : `translate3d(${translate}100%, 0, 0)`;
        const style = {
            transform: transform,
            opacity: navClicked ? 1 : 0,
            transition: 'all 0.5s ease-out',
        }
        return style;
    }

    const navLink = (item: TNavItems) => {
        let newItem: string = item;
        if (item === 'Home') newItem = '/';
        newItem = newItem?.toLowerCase().replace(/\s/g, '');
        return newItem;
    }

    const getCurrentLink = () => {
        let link = router.pathname;
        return link?.length > 1 ? link.replaceAll('/', '') : '/';
    }

    const navLinkClass = (item: TNavItems) =>
        navLink(item) === getCurrentLink() && 'text-secondaryFont text-opacity-60 hover:cursor-default';


    return (
        <div className={`fixed top-0 left-0 flex flex-col lg:flex-row w-screen h-screen ${navClicked ? 'z-20' : ' z-0'}`}>
            <div
                style={animationStyle({ variant: 'left' })}
                className={`flex flex-row lg:flex-col w-full lg:w-1/2 justify-center bg-dark h-full`}>
                <div
                    className='flex items-center'
                    style={{
                        padding: '0 20%',
                        transition: 'transform 0.5s ease-out',
                        transform: navClicked ? 'translate3d(0, 0, 0)' : 'translate3d(-50vw, 0, 0)',
                        transitionDelay: `${(navItems?.length - 1) * 0.1}s`,
                        opacity: navClicked ? 1 : 0
                    }}
                >
                    <Image
                        src={Selfie}
                        alt='Jason Selfie'
                        className='rounded-full border-4 border-secondaryFont w-full max-w-sm lg:max-w-lg xl:max-w-xl'
                    />
                </div>
            </div>
            <div
                style={animationStyle({ variant: 'right' })}
                className="flex flex-col w-full lg:w-1/2 justify-center bg-black h-full">
                <div className="flex flex-col">
                    {navItems.map((item, index) => {
                        return (
                            <div
                                style={{
                                    transition: 'transform 0.5s ease-out',
                                    transform: navClicked ? 'translate3d(0, 0, 0)' : 'translate3d(50vw, 0, 0)',
                                    transitionDelay: `${index * 0.1}s`,
                                    opacity: navClicked ? 1 : 0
                                }}
                                className={`self-center my-2 sm:my-4 md:my-6 lg:my-8 xl:my-10 hover:text-secondaryFont hover:cursor-pointer`}
                                key={`${item}-${index}`}
                            >
                                <Link
                                    className='w-full h-full'
                                    href={`${navLink(item)}`}
                                >
                                    <TextWrapper
                                        size='lg'
                                        className={`${navLinkClass(item)}`}
                                    >
                                        {item}
                                    </TextWrapper>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

