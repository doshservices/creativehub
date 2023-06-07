import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Toggler = () => {
    const [activeTab, setActivetab] = useState<number>(1)
    return (
        <header className='toggler'>
            <div>
                <button className={activeTab === 1 ? 'profile__active' : ''} onClick={() => setActivetab(1)}>Profile</button>
                <button className={activeTab === 2 ? 'profile__active' : ''} onClick={() => setActivetab(2)}>Reviews(10)</button>
            </div>
            <Link to='/'>
                Book Shai Hulud
            </Link>
        </header>
    )

}

