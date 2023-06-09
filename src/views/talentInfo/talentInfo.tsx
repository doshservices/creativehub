import './index.scss';
import star from './assets/star.svg';
import photo from './assets/3.png';
import video from './assets/video.svg';
import behance from './assets/behance.svg';
import youtube from './assets/youtube.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import { reviews } from './info';
import { Toggler } from '../../components/profile';

const TalentInfo = () => {


    return (
        <section id="talent__info">
            <section id="talent__info__intro">
                <div>
                    <h2>Shai Hulud</h2>
                    <h3>Ballet Dancer</h3>
                    <div className="stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" /> <p>(452)</p>
                    </div>
                    <p>Ibadan, Nigeria</p>
                </div>
            </section>
            <div id="talent__info__profile">
                <Toggler />
                <div className='talent__info__grid'>
                    <div id="talent__info__about">
                        <p>As a ballet dancer, I have dedicated my life to the art of classical dance. With over [X years/months] of training and performing experience, I have honed my skills and developed a deep understanding of the technique, artistry, and discipline required to excel in this demanding dance form. <br />
                            My training includes extensive study in ballet technique, as well as complementary forms such as contemporary and jazz dance. I have worked with renowned teachers and choreographers, refining my technique and mastering the nuances of the dance. <br />
                            In my performances, I strive to embody the grace, beauty, and precision that are hallmarks of classical ballet. From delicate adagios to virtuosic allegros, I bring a depth of expression and emotion to each movement, creating a seamless and captivating performance. <br />
                            Whether performing in a traditional ballet company, a modern dance ensemble, or a multidisciplinary collaboration, I bring a level of professionalism and dedication that sets me apart. I am always eager to push my boundaries and explore new aspects of dance, whether through experimentation with choreography or collaboration with other artists. <br />
                            Overall, as a ballet dancer, I bring a deep passion and commitment to my craft, along with a mastery of technique and a dedication to excellence that ensures a captivating and memorable performance every time.</p>
                        <section className="reviews">
                            <h4>10 Reviews</h4>
                            {reviews.map((review: object | any, index: number) => {
                                return (
                                    <div key={index}>
                                        <div className='flex'>
                                            <img src={review.userIcon} alt="user profile" />
                                            <div>
                                                <div>
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                    <img src={star} alt="" />
                                                </div>
                                                <p>
                                                    {review.date}
                                                </p>
                                            </div>
                                        </div>
                                        <p>{review.review}</p>
                                    </div>
                                )
                            })}
                            <button>Show more</button>
                        </section>
                    </div>
                    <div className='talent__services'>
                        <div className="short__clip">
                            <h5>SHORT CLIP</h5>
                            <img src={video} alt="video" />
                        </div>
                        <div className="short__bookings">
                            <h5>SHORT BOOKINGS</h5>
                            <p>$20 per Hour</p>
                            <p className="line"></p>
                            <h5>CONCERTS</h5>
                            <p>Contact for pricing</p>
                        </div>
                        <div className="terms">
                            <h5>TERMS OF SERVICE</h5>
                            <p>Lorem ipsum dolor humpty dumpty sat on the wall of lorem ipsum dolor shazam something something that has to do with lorem ipsum dolor humpty dumpty sat on the wall of lorem ipsum dolor shazam something something</p>
                        </div>
                        <div className="past__performance">
                            <h5>PAST PERFORMANCE</h5>
                            <p>The Rave Show, BurnaBoy Concert, Lagos Music Fest.</p>
                        </div>
                        <div className="photo__gallery">
                            <h5>PHOTO GALLERY</h5>
                            <div>
                                <img src={photo} alt="photo" />
                                <img src={photo} alt="photo" />
                                <img src={photo} alt="photo" />
                                <img src={photo} alt="photo" />
                                <img src={photo} alt="photo" />
                                <img src={photo} alt="photo" />
                            </div>
                        </div>
                        <div className="creative__note">
                            <h5>CREATIVES NOTE</h5>
                            <p>lorem ipsum dolor something something somethisaop</p>
                        </div>
                        <div className="urls">
                            <h5>URLS</h5>
                            <div>
                                <a target='_blank'>
                                    <img src={behance} alt="behance" />
                                </a>
                                <a target='_blank' >
                                    <img src={youtube} alt="youtube" />
                                </a>
                                <a target='_blank' >
                                    <img src={twitter} alt="twitter" />
                                </a>
                                <a target='_blank' >
                                    <img src={instagram} alt="instagram" />
                                </a>
                                <a target='_blank' >
                                    <img src={facebook} alt="facebook" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TalentInfo;