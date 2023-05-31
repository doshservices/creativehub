import './home.scss';
import { FC } from 'react'
import { Search } from './components/search';

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
        </div>
    )
}

export default Home;