import './_header.scss';
import logo from '../../assets/creative hub logo.svg';
import menuIcon from './icons/menu.svg';
import { NavLink, Link } from 'react-router-dom';
import { FC, useState, useRef, useEffect } from 'react';

const HeaderNav: FC = () => {
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

    return (
        <header className={"main__header"}>
            <nav>
                <div className='links'>
                    <Link className='logo' to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className={showNav ? "overlay" : 'overlay overlay__fade'}></div>
                    <ul ref={ref} className={showNav ? 'open' : ''} >
                        <li onClick={closeMenu}>
                            <NavLink to='/explore'>Explore</NavLink>
                        </li>
                        <li onClick={closeMenu}>
                            <NavLink to='/'>Recent Jobs</NavLink>
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
                        <li className='sign__in' onClick={closeMenu}>
                            <Link to='/signin'>Sign In</Link>
                        </li>
                    </ul>
                </div>
                <img onClick={closeMenu} className='menu__icon' src={menuIcon} alt="menu icon" />
                <Link className='sign__in' to='/signin'>Sign In</Link>
            </nav>
        </header>
    )
}

export default HeaderNav;