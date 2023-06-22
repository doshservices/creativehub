import dp from '../../../assets/profile.svg';
import { FC } from 'react';
import notIcon from '../../../assets/notifications.svg';
import accountDp from '../../../assets/account.svg';
import { Link } from 'react-router-dom';
import { clearStorage } from '../../../utils/authRoute';

interface prop {
    className: string
}

export const ProfileDropdown: FC<prop> = ({ className }) => {

    const logout = () => clearStorage()

    return (
        <div className={`profile__dropdown ${className}`}>
            <img src={dp} alt="" />
            <nav>
                <Link to='/usersDashboard'>
                    <img src={accountDp} alt="" />
                    <span>Profile</span>
                </Link>
                <Link to='/notifications'>
                    <img src={notIcon} alt="" />
                    <span>Notications</span>
                </Link>
                <hr />
                <button onClick={logout}>Sign Out</button>
            </nav>
        </div>
    )
}