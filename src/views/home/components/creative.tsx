import './components.scss';
import { creatives } from '../../explore';

const Creative = () => {

    return (
        <section id="home__creatives">
            <h2>Top Creatives</h2>
            <div className='creatives'>
                {creatives.slice(0, 8).map((creative: object | any, index: number) => {
                    return (
                        <figure key={index}>
                            <img src={creative.img} alt={creative.type} />
                            <figcaption>{creative.type}</figcaption>
                        </figure>
                    )
                })}
            </div>
            <button>More Creatives</button>
        </section>
    )
}

export default Creative;