import './dashboard.scss';
import dp from './assets/dp.svg';
import pencil from './assets/pencil.svg';

const UserDashboard = () => {
    return (
        <section id="users__dashboard">
            <section id="users__dashboard__profile">
                <img className='dp' src={dp} alt="profile" />
                <h3>
                    <span>Shai Hulud</span>
                    <img src={pencil} alt="*" />
                </h3>
                <a>shai.hulud.t@gmail.com</a>
                <address>Agege, Lagos</address>
                <p className="status">ONLINE</p>
                <button>Preview Profile</button>
                <p className="member">Member since  <span>June 2023</span></p>
            </section>
            <div id="users__dashboard__about">
                <section className="description">
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor</p>
                    <button>Edit Description</button>
                </section>
                <section className="pricing">
                    <h4>Pricing</h4>
                    <p>Concert<span>$20/hr</span><img src={pencil} alt="" /></p>
                    <p>Short Bookings<span>$20/hr</span><img src={pencil} alt="" /></p>
                    <button>Add New</button>
                </section>
                <section className="languages">
                    <h4>Languages</h4>
                    <p>English - <span>Basic</span><img src={pencil} alt="" /></p>
                    <button>Add New</button>
                </section>
                <section className="skills">
                    <h4>Skills</h4>
                    <p>Ballet Dancer - <span>Professional</span><img src={pencil} alt="" /></p>
                    <p>Sound Engineer - <span>Basic</span><img src={pencil} alt="" /></p>
                    <p>Music Producer - <span>Intermediate</span><img src={pencil} alt="" /></p>
                    <button>Add New</button>
                </section>
                <section className="awards">
                    <h4>Certification and Awards</h4>
                    <p>Ballet Dancer - <span>Professional</span><img src={pencil} alt="" /></p>
                    <p>Sound Engineer - <span>Basic</span><img src={pencil} alt="" /></p>
                    <p>Music Producer - <span>Intermediate</span><img src={pencil} alt="" /></p>
                    <button>Add New</button>
                </section>
                <section className="media">
                    <h4>Media</h4>
                    <p>Media 1 - <span>Screams of Shalazah</span><img src={pencil} alt="" /></p>
                    <p>Media 2 - <span>Big Boy Tune</span><img src={pencil} alt="" /></p>
                    <p>Music Producer - <span>Intermediate</span><img src={pencil} alt="" /></p>
                    <button>Add New</button>
                </section>
                <section className="urls">
                    <h4>Media</h4>
                    <p>Media 1 - <span>Screams of Shalazah</span><img src={pencil} alt="" /></p>
                    <p>Media 2 - <span>Big Boy Tune</span><img src={pencil} alt="" /></p>
                    <p>Music Producer - <span>Intermediate</span><img src={pencil} alt="" /></p>
                    <button>Add New</button>
                </section>
            </div>
        </section>
    )
}

export default UserDashboard