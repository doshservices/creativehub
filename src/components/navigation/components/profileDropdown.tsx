import dp from '../../../assets/profile.svg';
import { FC } from 'react';
import notIcon from '../../../assets/notifications.svg';
import accountDp from '../../../assets/account.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../../state/slice/authSlice';
import { responseMessage } from '../../../utils/toast';

interface prop {
    className: string;
    menuAction: any;
}

export const ProfileDropdown: FC<prop> = ({ className, menuAction }) => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearUser());
        responseMessage("Logout Succesful")
        setTimeout(() => {
            window.location.reload()
        }, 3000)
    }

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
                <button onClick={handleLogout}>Sign Out</button>
            </nav>
        </div>
    )
}