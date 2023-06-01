import './components.scss';
import green from '../assets/green.png';
import ybd from '../assets/yellowbd.svg';
import lbd from '../assets/lemonbd.svg';
import search from '../assets/search.png';
import yellow from '../assets/yellow.png';
import quality from '../assets/quality.svg';
import trusted from '../assets/payment.svg';
import platfrom from '../assets/platform.svg';

export const HowItWorks = () => {
    return (
        <section id='how__it__works'>
            <div className="layer"></div>
            <h2>How Creative Hub Works</h2>
            <div className='flex-col'>
                <div className='numbers'>
                    <div className='number'>
                        <div>
                            <button>1</button>
                            <p>Search from our pool of creatives</p>
                        </div>
                        <span></span>
                    </div>
                    <div className='number'>
                        <div>
                            <button>2</button>
                            <p>Send and bargain proposals with <br />
                                our top creatives</p>
                        </div>
                        <span></span>
                    </div>
                    <div className='number'>
                        <div>
                            <button>3</button>
                            <p>Hire a pro and get <br />
                                awesome job done</p>
                        </div>
                    </div>
                </div>
                <figure>
                    <img className='yellow' src={yellow} alt="" />
                    <img className='green' src={green} alt="" />
                    <img className='ybd' src={ybd} alt="" />
                    <img className='lbd' src={lbd} alt="" />
                    <img className='search' src={search} alt="search" />
                </figure>
            </div>
        </section>
    )
}

export const WhyChoose = () => {
    return (
        <section id="hire">
            <h2>Why Choose Creatives Hub</h2>
            <div>
                <div>
                    <img src={quality} alt="quality" />
                    <h3>Quality Service</h3>
                    <p>Be sure to get high quality services from our pool of experienced talents</p>
                </div>
                <div>
                    <img src={platfrom} alt="platform" />
                    <h3>Quality Service</h3>
                    <p>Be sure to get high quality services from our pool of experienced talents</p>
                </div>
                <div>
                    <img src={trusted} alt="trusted" />
                    <h3>Quality Service</h3>
                    <p>Be sure to get high quality services from our pool of experienced talents</p>
                </div>
            </div>
        </section>
    )
}