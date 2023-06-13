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
                <section className="languages"></section>
                <section className="skills"></section>
                <section className="awards"></section>
                <section className="media"></section>
                <section className="urls"></section>
            </div>
        </section>
    )
}

export default UserDashboard