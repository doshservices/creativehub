import logo from '../../assets/creative hub logo.svg';
import { NavLink, Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <header>
            <nav>
                <div className='links'>
                    <Link className='logo' to='/'>
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul>
                        <li>
                            <NavLink to='/'>Explore</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Recent Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Bargain</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Find Talent</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Find Work</NavLink>
                        </li>
                    </ul>
                </div>
                <Link className='sign__in' to='/'>Sign In</Link>
            </nav>
        </header>
    )
}

export default HeaderNav;