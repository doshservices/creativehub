import './home.scss';
import { FC } from 'react'
import { Search } from './components/search';
import Creative from './components/creative';

const Home: FC = () => {
    return (
        <div id="home">
            <section id="home__hero">
                <div>
                    <h1>Not Creative Right Now</h1>
                    <p>Hire top-notch mixing and mastering engineers, singers, songwriters, producers, studio musicians etc.</p>
                    <Search />
                </div>
            </section>
            <Creative />
        </div>
    )
}

export default Home;