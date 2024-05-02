import { Link } from 'react-router-dom';
import { BargainModal } from '../modal/bargainModal';
import './index.scss';
// import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Props {
    name: string;
    recieverId: string;
    reviewsNumber: number;
}

export const Toggler = (props: Props) => {
    const [activeTab, setActivetab] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    return (
        <header className='toggler'>
            <div>
                <button className={activeTab === 1 ? 'profile__active' : ''} onClick={() => setActivetab(1)}>Profile</button>
                <button className={activeTab === 2 ? 'profile__active' : ''} onClick={() => setActivetab(2)}>Reviews({props.reviewsNumber})</button>
            </div>
            <Link to=''  >
                <div onClick={() => { openModal() }}>
                Book {props.name}
                </div>
                
            </Link>
            <BargainModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} recieverId={props.recieverId} />
        </header>
    )

}

