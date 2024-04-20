import './modal.scss';
import upload from '../../assets/Vector.svg';
import { FaTimes } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const BargainModal: React.FC<Props> = ({ isOpen, onClose }) => {

    // const [open, setOpen] = useState<boolean>(false)
    // const closeModal = () => setOpen(!open)

    const modalRef = useRef<HTMLDivElement>(null);

    const useOnClickOutside = (modalRef: any, handler: any) => {
        useEffect(() => {
            const listener = (event: any) => {
                if (!modalRef.current || modalRef.current.contains(event.target)) {
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
        }, [modalRef, handler]);
    }
    useOnClickOutside(modalRef, () => onClose());

    return (
        <div className={isOpen ? "project__modal" : 'project__modal modal__show__false'}>
            <div ref={modalRef} className="project__modal__content">
                <div ref={modalRef} onClick={onClose} className="close">
                    <FaTimes size={20} color='#2d2d2d' />
                </div>
                <h3>Describe your project and Shazam Fred will reply to your message</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="">What can I help you with?</label>
                    <input type="text" placeholder='Need couple of songs produced' />
                    <label htmlFor="">Tell me more about your project:</label>
                    <textarea></textarea>
                    <button className='upload'>
                        <img src={upload} alt="" />
                        <span>Upload MP3(Optional)</span>
                    </button>
                    <button type="submit">Continue</button>
                </form>
            </div>
        </div>
    )
}