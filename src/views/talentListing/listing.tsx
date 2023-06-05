import './listing.scss';
import search from './assets/search.svg';
import { result } from '../searchResult/components/result';

const Listing = () => {
    return (
        <section id="listing">
            <div id="listing__intro">
                <h2>Get Top Dancers To Hire</h2>
                <p>These experienced dancers are available to for hire and are trusted to give in their best.</p>
            </div>
            <div id='listing__dancers'>
                <div className="search">
                    <input type="text" placeholder="Try 'Mombasa'" />
                    <img src={search} alt="" />
                    <button>Filter</button>
                </div>
                <div className='dancers'>
                    {result.map((results: object | any, index: number) => {
                        return (
                            <div className='dancer' key={index}>
                                {results.img && <img src={results.img} />}
                                <div>
                                    {results.type && <h5>{results.type}</h5>}
                                    <div className='name'>
                                        {results.name && <p>{results.name} <span>{results.state}</span></p>}
                                        <img src={results.like} alt="" />
                                    </div>
                                    <div className='stars'>
                                        <div>
                                            <img src={results.star} alt="" />
                                            <img src={results.star} alt="" />
                                            <img src={results.star} alt="" />
                                            <img src={results.star} alt="" />
                                            <img src={results.star} alt="" />
                                            {results.number && <p>{results.number}</p>}
                                        </div>
                                        <p className={results.active === 'Online' ? 'online' : 'offline'}>{results.active}</p>
                                    </div>
                                    <p>{results.about}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button className='showmore'>Show more</button>
            </div>
        </section>
    )
}

export default Listing;