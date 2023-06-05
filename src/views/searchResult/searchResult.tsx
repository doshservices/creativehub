import './index.scss';
import { FC } from 'react';
import arrowup from './assets/arrow up.svg';
import arrowright from './assets/arrow right.svg';
import { result } from './components/result';
import { Search } from '../home/components/search';

const SearchResult: FC = () => {
    return (
        <section id="search">
            <h2>Creatives Hub <img src={arrowright} alt="" /> Search Result <img src={arrowright} alt="" /> 1</h2>
            <div>
                <section className='filter__results'>
                    <h3>Filter Results</h3>
                    <div className="location">
                        <h4><span>Location</span><img src={arrowup} alt="" /></h4>
                        <input type="text" placeholder='Mombasa' />
                        <label htmlFor="">
                            <input type="checkbox" />
                            Any Location
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            Mombasa
                        </label>
                    </div>
                    <div className="location">
                        <h4><span>Talent Gender</span><img src={arrowup} alt="" /></h4>
                        <input type="text" placeholder='Mombasa' />
                        <label htmlFor="">
                            <input type="checkbox" />
                            Male
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            Female
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            Mixed
                        </label>
                    </div>
                    <div className="location">
                        <h4><span>Hourly Rate</span><img src={arrowup} alt="" /></h4>
                        <input type="text" placeholder='Mombasa' />
                        <label htmlFor="">
                            <input type="checkbox" />
                            Any hourly rate
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            $10 and below
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            $11 - 50$
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            $50 - $100
                        </label>
                        <label htmlFor="">
                            <input type="checkbox" />
                            $100 and above
                        </label>
                    </div>
                </section>
                <div className='search__results'>
                    <Search placeholder='Dancers' className='result__bar' />
                    <div className='items'>
                        {result.map((results: object | any, index: number) => {
                            return (
                                <div className='results' key={index}>
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
                </div>
            </div>
        </section>
    )
}

export default SearchResult;