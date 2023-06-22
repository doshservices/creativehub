import dp from '../../../assets/profile.svg';
import accountDp from '../../../assets/account.svg';
import notIcon from '../../../assets/notifications.svg';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface prop {
    className: string
}

export const ProfileDropdown: FC<prop> = ({ className }) => {
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
                <button>Sign Out</button>
            </nav>
        </div>
    )
}