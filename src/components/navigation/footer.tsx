import './_footer.scss';
import { FC, useState } from "react";
import logo from '../../assets/creative hub logo white.svg';
import mail from './icons/mail.svg';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import twitter from './icons/Twitter.svg';
import youtube from './icons/youtube.svg';
import toggler from './icons/toggler.svg';
import { Form } from './form';

const Footer: FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showLink, setShowLink] = useState<boolean>(false);

    return (
        <footer>
            <div className='main_section'>
                <nav>
                    <div className='social__links'>
                        <img src={logo} alt="logo" />
                        <div>
                            <img src={facebook} aria-label='facebook' alt="facebook" />
                            <img src={instagram} aria-label='instagram' alt="instagram" />
                            <img src={twitter} aria-label='twitter' alt="twitter" />
                            <img src={youtube} aria-label='youtube' alt="youtube" />
                        </div>
                    </div>
                    <div className='links'>
                        <section>
                            <h3 onClick={() => setShowMenu(!showMenu)}><span>Popular Services</span><img className={showMenu ? 'rotate' : ''} src={toggler} alt="" /></h3>
                            <ul className={showMenu ? 'show' : ''}>
                                <li>Ballet Dancer</li>
                                <li>Sound Engineer</li>
                                <li>Art Designer</li>
                                <li>Sound Mixer</li>
                                <li>Mc</li>
                                <li>Affiliates</li>
                            </ul>
                        </section>
                        <section>
                            <h3 onClick={() => setShowLink(!showLink)}><span>Support</span> <img className={showLink ? 'rotate' : ''} src={toggler} alt="" /> </h3>
                            { }
                            <ul className={showLink ? 'show' : ''}>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                                <li>Saved</li>
                                <li>Locate a Creative</li>
                                <li>Service Registration</li>
                            </ul>
                        </section>
                    </div>
                </nav>
                <section className="footer__contact">
                    <h3><img src={mail} alt="mail" /> Stay up to date on the latest from Creatives Hub</h3>
                    <Form />
                </section>
            </div>
            <div className="copyright">
                <p>&copy; 2023 Creatives Hub All Rights Reserved</p>
                <ul><li>Terms and Condition</li><li>Privacy Policy</li></ul>
            </div>
        </footer>
    )
}

export default Footer;