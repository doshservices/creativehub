import { reasons, creatives } from './index';
import './explore.scss';

export const TopCreatives = () => {
    return (
        <section className='top__creatives'>
            <h3>Top Creatives</h3>
            <div>
                {creatives.map((creative: object | any, index: number) => {
                    return (
                        <figure key={index}>
                            <img src={creative.img} alt="" />
                            <figcaption>{creative.type}</figcaption>
                        </figure>
                    )
                })}
            </div>
            <button>Show More</button>
        </section>
    )
}

const Explore = () => {
    return (
        <section id="explore">
            <div id="explore__intro">
                <h2>
                    Explore Our Pool of Talented Creatives
                </h2>
                <p>Hire top-notch mixing and mastering engineers, singers, songwriters, producers, studio musicians etc.</p>
            </div>
            <TopCreatives />
            <section className="why__choose">
                <h3>Why Choose Creatives Hub</h3>
                <h4>
                    Over 1,000+ experienced
                    creatives are registered & verified
                </h4>
                <div className='reason'>
                    {reasons.map((reason: object | any, index: number) => {
                        return (
                            <div key={index}>
                                <img src={reason.icon} alt="" />
                                <div>
                                    <h5>{reason.head}</h5>
                                    <p>{reason.paragraph}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}

export default Explore;