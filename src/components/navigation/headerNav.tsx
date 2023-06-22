import './_header.scss';
import logo from '../../assets/creative hub logo.svg';
import menuIcon from './icons/menu.svg';
import mobileDrop from '../../assets/drop-mobile.svg';
import desktopDrop from '../../assets/drop.svg';
import { ProfileDropdown } from './components/profileDropdown';
import { ExploreDropdown } from './components/components';
import { isAuthenticated } from '../../utils/helper';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FC, useState, useRef, useEffect } from 'react';

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
                        <img src={logo} alt="logo" />
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
                            <ProfileDropdown className='nav__drop1' /> :
                            <li className='sign__in' onClick={closeMenu}>
                                <Link to='/signin'>Sign In</Link>
                            </li>
                        }
                    </ul>
                </div>
                <img onClick={closeMenu} className='menu__icon' src={menuIcon} alt="menu icon" />
                {anthenticated ?
                    <ProfileDropdown className='nav__drop2' /> :
                    <Link className='sign__in' to='/signin'>Sign In</Link>
                }
            </nav>
        </header>
    )
}

export default HeaderNav;