import './_header.scss';
import menuIcon from './icons/menu.svg';
import mobileDrop from '../../assets/drop-mobile.svg';
import desktopDrop from '../../assets/drop.svg';
import { ProfileDropdown } from './components/profileDropdown';
import { ExploreDropdown } from './components/components';
import { isAuthenticated } from '../../utils/helper';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FC, useState, useRef, useEffect } from 'react';

export const Logo = () => {
    return (
        <>
            <svg width="134" height="46" viewBox="0 0 134 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.49024 35.7451L5.49024 10.49L30.7453 10.49L30.7453 17.5175L36.2356 17.5175L36.2356 10.49L36.2356 4.99977L30.7453 4.99977L5.49024 4.99977L-1.58391e-06 4.99977L-1.34392e-06 10.49L-2.39986e-07 35.7451L0 41.2354L5.49024 41.2354L30.7453 41.2354L36.2356 41.2353L36.2356 41.2353L21.9609 41.2353L21.9609 35.7451L5.49024 35.7451Z" fill="#F8F8F8" />
                <path d="M30.4121 40.9999L35.8595 35.5456L31.9145 31.5981L30.4122 30.0938L30.4121 40.9999Z" fill="#CC55BB" />
                <path d="M30.2301 40.9996V30.0933L24.7827 35.5453L30.2301 40.9996Z" fill="#FF8200" />
                <path d="M32.0737 23.5962V27.296L35.7661 23.5962H32.0737Z" fill="#A05EB5" />
                <path d="M36.0811 23.5048H40.0001L36.0811 19.5835V23.5048Z" fill="#00B388" />
                <path d="M35.899 31.3083V23.729L32.1128 27.5201L35.899 31.3083Z" fill="#FFC600" />
                <path d="M32.0737 19.5835H35.899V23.4137H32.0737V19.5835Z" fill="#FF8200" />
                <path d="M35.899 35.3237V31.5719L32.0737 27.7417V31.4937L35.899 35.3237Z" fill="#91D6AC" />
                <path d="M55.524 16.992C57.594 16.992 59.358 16.254 60.528 14.886L59.016 13.446C58.098 14.454 56.964 14.94 55.65 14.94C53.04 14.94 51.15 13.104 51.15 10.512C51.15 7.92001 53.04 6.08401 55.65 6.08401C56.964 6.08401 58.098 6.57001 59.016 7.56001L60.528 6.13801C59.358 4.77001 57.594 4.03201 55.542 4.03201C51.672 4.03201 48.792 6.75001 48.792 10.512C48.792 14.274 51.672 16.992 55.524 16.992ZM64.6961 8.60401V7.20001H62.5541V16.812H64.8041V12.15C64.8041 10.188 65.8841 9.18001 67.5941 9.18001C67.7561 9.18001 67.9181 9.19801 68.1161 9.23401V7.09201C66.5141 7.09201 65.3441 7.59601 64.6961 8.60401ZM78.9729 12.06C78.9729 9.05401 76.9209 7.09201 74.1129 7.09201C71.2509 7.09201 69.1449 9.14401 69.1449 12.006C69.1449 14.868 71.2329 16.938 74.4549 16.938C76.1109 16.938 77.4609 16.398 78.3249 15.372L77.1189 13.986C76.4349 14.688 75.5889 15.03 74.5089 15.03C72.8349 15.03 71.6649 14.13 71.3949 12.726H78.9369C78.9549 12.51 78.9729 12.24 78.9729 12.06ZM74.1129 8.89201C75.5889 8.89201 76.6509 9.84601 76.8309 11.232H71.3769C71.5929 9.82801 72.6549 8.89201 74.1129 8.89201ZM84.5425 7.09201C82.9945 7.09201 81.5005 7.48801 80.4745 8.28001L81.3565 9.91801C82.0765 9.32401 83.1925 8.96401 84.2725 8.96401C85.8745 8.96401 86.6665 9.73801 86.6665 11.052V11.196H84.1825C81.2665 11.196 80.1865 12.456 80.1865 14.058C80.1865 15.732 81.5725 16.938 83.7685 16.938C85.2085 16.938 86.2525 16.47 86.7925 15.642V16.812H88.9165V11.178C88.9165 8.40601 87.3145 7.09201 84.5425 7.09201ZM84.2365 15.3C83.0845 15.3 82.4005 14.778 82.4005 13.968C82.4005 13.266 82.8145 12.69 84.3445 12.69H86.6665V13.806C86.2885 14.796 85.3345 15.3 84.2365 15.3ZM96.9521 14.688C96.6101 14.958 96.1601 15.084 95.6921 15.084C94.8281 15.084 94.3601 14.58 94.3601 13.644V9.07201H96.9341V7.27201H94.3601V5.07601H92.1101V7.27201H90.5261V9.07201H92.1101V13.698C92.1101 15.822 93.3161 16.938 95.4221 16.938C96.2321 16.938 97.0421 16.722 97.5821 16.29L96.9521 14.688ZM100.567 5.61601C101.413 5.61601 102.007 5.00401 102.007 4.21201C102.007 3.47401 101.395 2.91601 100.567 2.91601C99.739 2.91601 99.127 3.51001 99.127 4.26601C99.127 5.02201 99.739 5.61601 100.567 5.61601ZM99.433 16.812H101.683V7.20001H99.433V16.812ZM111.476 7.20001L108.398 14.328L105.41 7.20001H103.07L107.192 16.812H109.514L113.636 7.20001H111.476ZM123.815 12.06C123.815 9.05401 121.763 7.09201 118.955 7.09201C116.093 7.09201 113.987 9.14401 113.987 12.006C113.987 14.868 116.075 16.938 119.297 16.938C120.953 16.938 122.303 16.398 123.167 15.372L121.961 13.986C121.277 14.688 120.431 15.03 119.351 15.03C117.677 15.03 116.507 14.13 116.237 12.726H123.779C123.797 12.51 123.815 12.24 123.815 12.06ZM118.955 8.89201C120.431 8.89201 121.493 9.84601 121.673 11.232H116.219C116.435 9.82801 117.497 8.89201 118.955 8.89201ZM128.946 16.938C131.646 16.938 133.302 15.768 133.302 13.968C133.302 10.206 127.362 11.934 127.362 9.99001C127.362 9.36001 128.01 8.91001 129.378 8.91001C130.296 8.91001 131.214 9.09001 132.132 9.63001L132.996 7.92001C132.132 7.39801 130.674 7.09201 129.396 7.09201C126.804 7.09201 125.166 8.28001 125.166 10.098C125.166 13.932 131.106 12.204 131.106 14.04C131.106 14.706 130.512 15.102 129.09 15.102C127.884 15.102 126.588 14.706 125.742 14.148L124.878 15.858C125.742 16.47 127.344 16.938 128.946 16.938Z" fill="#F8F8F8" />
                <path d="M58.548 28.5885V33.7905H52.032V28.5885H49.692V41.1885H52.032V35.7885H58.548V41.1885H60.888V28.5885H58.548ZM71.1043 31.5765V36.4365C71.1043 38.3625 70.0423 39.3345 68.4763 39.3345C67.0543 39.3345 66.2263 38.5065 66.2263 36.7605V31.5765H63.9763V37.0665C63.9763 39.9645 65.6503 41.3145 68.1163 41.3145C69.3583 41.3145 70.4923 40.8465 71.2123 39.9645V41.1885H73.3543V31.5765H71.1043ZM81.6282 31.4685C80.4042 31.4685 79.3242 31.8825 78.5502 32.7465V27.8325H76.3002V41.1885H78.4422V39.9465C79.1982 40.8645 80.3142 41.3145 81.6282 41.3145C84.4362 41.3145 86.5062 39.3705 86.5062 36.3825C86.5062 33.3945 84.4362 31.4685 81.6282 31.4685ZM81.3762 39.3885C79.7562 39.3885 78.5142 38.2185 78.5142 36.3825C78.5142 34.5465 79.7562 33.3765 81.3762 33.3765C82.9962 33.3765 84.2202 34.5465 84.2202 36.3825C84.2202 38.2185 82.9962 39.3885 81.3762 39.3885Z" fill="#F8F8F8" />
            </svg></>
    )
}

const HeaderNav: FC = () => {

    const anthenticated = isAuthenticated()

    const [backgroundColor, setBackgroundColor] = useState<boolean>(false)

    const changeColor = () => {
        if (window.scrollY >= 70) {
            setBackgroundColor(true)
        } else {
            setBackgroundColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    const [showNav, setShowNav] = useState<boolean>(false);

    const closeMenu = () => setShowNav(!showNav)

    const ref = useRef<HTMLUListElement & HTMLImageElement>(null);

    useOnClickOutside(ref, () => setShowNav(false));

    function useOnClickOutside(ref: any, handler: any) {
        useEffect(() => {
            const listener = (event: any) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        }, [ref, handler]);
    }

    const [showDropdown, setShowDropdown] = useState<boolean>(true);

    const handleDrop = () => {
        setShowDropdown(!showDropdown)
    }

    const currentLocation = useLocation()

    return (
        <header id={backgroundColor ? 'default' : ''}
            className={
                currentLocation?.pathname === '/' ||
                    currentLocation?.pathname === '/talentlisting' ||
                    currentLocation?.pathname === '/explore' ||
                    currentLocation?.pathname === '/talentinfo' ||
                    currentLocation?.pathname === '/soundengineer' ||
                    currentLocation?.pathname === '/recentJobs'
                    ? 'main__header transparent'
                    : 'main__header'
            }>
            <nav>
                <div className='links'>
                    <Link className='logo' to='/'>
                        <Logo />
                    </Link>
                    <div className={showNav ? "overlay" : 'overlay overlay__fade'}></div>
                    <ul ref={ref} className={showNav ? 'open' : ''} >
                        <li onClick={closeMenu}>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li onClick={handleDrop}>
                            <NavLink to='explore' className='explore'>
                                <span>Explore</span><img src={desktopDrop} alt="desktop-drop" /><img src={mobileDrop} alt="mobile-drop" />
                            </NavLink>
                            <ExploreDropdown className='top-visible' onClick={handleDrop} />
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink to='/recentJobs'>Recent Jobs</NavLink>
                        </li>
                        <li onClick={closeMenu} className='bargain'>
                            <NavLink to='/'>Bargain</NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink to='/talentlisting'>Find Talent</NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink to='/'>Find Work</NavLink>
                        </li>
                        {anthenticated ?
                            <ProfileDropdown menuAction={closeMenu} className='nav__drop1' /> :
                            <li className='sign__in' onClick={closeMenu}>
                                <Link to='/signin'>Sign In</Link>
                            </li>
                        }
                    </ul>
                </div>
                <img onClick={closeMenu} className='menu__icon' src={menuIcon} alt="menu icon" />
                {anthenticated ?
                    <ProfileDropdown menuAction={closeMenu} className='nav__drop2' /> :
                    <Link className='sign__in' to='/signin'>Sign In</Link>
                }
            </nav>
        </header>
    )
}

export default HeaderNav;