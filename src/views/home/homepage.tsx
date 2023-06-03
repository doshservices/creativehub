import './home.scss';
import Creative from './components/creative';
import { FC } from 'react'
import { User } from './components/users';
import { Search } from './components/search';
import { HowItWorks, WhyChoose } from './components/howItWorks';

const Home: FC = () => {
    return (
        <div id="home">
            <section id="home__hero">
                <div>
                    <h1>Not Creative Right Now</h1>
                    <p>Hire top-notch mixing and mastering engineers, singers, songwriters, producers, studio musicians etc.</p>
                    <Search placeholder="Try ‘Dancers in Accra’" />
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