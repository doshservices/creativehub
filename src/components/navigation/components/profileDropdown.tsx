import dp from '../../../assets/profile.svg';
import { FC } from 'react';
import notIcon from '../../../assets/notifications.svg';
import accountDp from '../../../assets/account.svg';
import { Link } from 'react-router-dom';
import { clearStorage } from '../../../utils/authRoute';

interface prop {
    className: string;
    menuAction: any;
}

export const ProfileDropdown: FC<prop> = ({ className, menuAction }) => {

    const logout = () => clearStorage()

    return (
        <div className={`profile__dropdown ${className}`}>
            <img src={dp} alt="" />
            <nav>
                <Link onClick={menuAction} to='/usersDashboard'>
                    <img src={accountDp} alt="" />
                    <span>Profile</span>
                </Link>
                <Link onClick={menuAction} to='/notifications'>
                    <img src={notIcon} alt="" />
                    <span>Notications</span>
                </Link>
                <hr />
                <button onClick={logout}>Sign Out</button>
            </nav>
        </div>
    )
}