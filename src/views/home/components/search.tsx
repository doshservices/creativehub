import './style.scss';
import search from '../assets/search.svg'

export const Search = () => {
    return (
        <div id='home__search'>
            <div id="home__search__bar">
                <img src={search} alt="search" />
                <input type="search" name="" placeholder='Try ‘Dancers in Accra’' />
                <button type="submit">Search</button>
            </div>
            <div className="top__searched">
                <p>Top Searched:</p>
                <div>
                    <button>Dancers</button>
                    <button>Sound Engineers</button>
                    <button>Female Singers</button>
                </div>
            </div>
        </div>
    )
}