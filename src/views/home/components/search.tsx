import './style.scss';
import search from '../assets/search.svg'

interface attributes {
    placeholder: string;
    className: string;
}

export const Search = (props: attributes) => {
    return (
        <div id='home__search' className={props.className}>
            <div id="home__search__bar">
                <img src={search} alt="search" />
                <input type="search" name="" placeholder={props.placeholder} />
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