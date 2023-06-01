import './home.scss';
import { FC } from 'react'
import { Search } from './components/search';
import Creative from './components/creative';
import { HowItWorks, WhyChoose } from './components/howItWorks';
import { User } from './components/users';

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
            <HowItWorks />
            <User className='clients' btnContent='For Clients' heading='Hire The Best Hands For Your Next Project' />
            <WhyChoose />
            <User className='creatives' btnContent='For Creatives' heading='Find The Best Opportunity to Showcase Your Creative Experience' />
        </div>
    )
}

export default Home;