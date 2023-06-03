import { Search } from '../home/components/search';
import './index.scss';
import { FC } from 'react';

const SearchResult: FC = () => {
    return (
        <section id="search__result">
            <Search placeholder='Dancers' />
        </section>
    )
}

export default SearchResult;