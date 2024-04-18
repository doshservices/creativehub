import dp from '../../../assets/profile.svg';
import { FC } from 'react';
import notIcon from '../../../assets/notifications.svg';
import accountDp from '../../../assets/account.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearAuthToken } from '../../../state/slice/authSlice';
import { responseMessage } from '../../../utils/toast';
// import { clearStorage } from '../../../utils/authRoute';

interface prop {
    className: string;
    menuAction: any;
}

export const ProfileDropdown: FC<prop> = ({ className, menuAction }) => {

    // const logout = () => clearStorage()
    const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatching the clearAuthToken action when the user logs out
    dispatch(clearAuthToken());
    responseMessage("Logout Succesful")
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