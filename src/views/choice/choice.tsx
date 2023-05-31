import './choice.scss';
import ytr from './assets/top right.svg';
import ytl from './assets/top left.svg';
import ybl from './assets/bottom left.svg';
import ybr from './assets/bottom right.svg';
import ptr from './assets/ptr.svg';
import ptl from './assets/ptl.svg';
import pbl from './assets/pbl.svg';
import pbr from './assets/pbr.svg';
import { FC } from 'react';
import { LinkBtn } from '../../components/button/button';

const Chioce: FC = () => {
    return (
        <section id="choice">
            <div id="choice__users">
                <img className="tr" src={ytr} alt="" />
                <img className="tl" src={ytl} alt="" />
                <img className="bl" src={ybl} alt="" />
                <img className="br" src={ybr} alt="" />
                <h3>FOR USERS</h3>
                <p>
                    Hire professional sound engineers, producers, dancers etc to work on your next project
                </p>
                <LinkBtn id='purple' content='SIGN IN' to='/signup' />
            </div>
            <div id="choice__creatives">
                <img className="tr" src={ptr} alt="" />
                <img className="tl" src={ptl} alt="" />
                <img className="bl" src={pbl} alt="" />
                <img className="br" src={pbr} alt="" />
                <h3>FOR CREATIVES</h3>
                <p>Get listed as a professional sound engineer, producer, dancer etc and get hired for work</p>
                <LinkBtn id='yellow' content='SIGN IN' to='/signup' />
            </div>
        </section>
    )
}

export default Chioce;