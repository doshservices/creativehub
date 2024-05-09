/* eslint-disable @typescript-eslint/no-explicit-any */
import './index.scss';
import star from './assets/star.svg';
import photo from './assets/3.png';
import video from './assets/video.svg';
import behance from './assets/behance.svg';
import youtube from './assets/youtube.svg';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import img3 from './assets/3.png';
import { Toggler } from '../../components/profile';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GetReviewsApi from '../../apis/GetReviews';
import GetAUserApi from '../../apis/GetAUserApi';

const TalentInfo = () => {
    const { userId } = useParams();
    const { getReviews, searchReviews, loading, error } = GetReviewsApi();
    const {getUser, userDetails } = GetAUserApi();

    useEffect(() => {
        getUser(userId);
        getReviews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section id="talent__info">
            <section id="talent__info__intro">
                <div>
                    {userDetails?.firstName && (
                        <h2>{userDetails?.firstName} {" "} {userDetails?.lastName} </h2>
                    )}
                    {/* <h3>{userDetails?.skills[0]}</h3> */}
                    <div className="stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" /> <p>(452)</p>
                    </div>
                    {userDetails?.country && userDetails.state ? (
                        <p>{userDetails?.state}, {userDetails?.country}</p>
                    ) : userDetails?.country && (
                        <p>{userDetails?.country}</p>
                    )}
                </div>
            </section>
            <div id="talent__info__profile">
                <Toggler reviewsNumber={searchReviews.length} name={`${userDetails?.firstName ?? ""} ${userDetails?.lastName ?? ""}`} recieverId={userDetails?._id ?? ""} />
                <div className='talent__info__grid'>
                    <div id="talent__info__about">
                        {userDetails?.bio && userDetails?.bio !== "" ? (
                            <p>{userDetails?.bio}</p>
                        ) : (
                            <p>No bio yet.</p>
                        )}
                        <section className="reviews">
                            {searchReviews ? (
                                <h4>{searchReviews?.length} Review(s)</h4>
                            ) : (
                                <h4>1 Review(s)</h4>
                            )}
                            {loading ? (
                                <div>Loading...</div>
                            ) : error ? (
                                <div>Error in fetching details</div>
                            ) : searchReviews && searchReviews.length > 0 ? (
                                searchReviews.map((review: object | any, index: number) => {
                                    return (
                                        <div key={index}>
                                            <div className='flex'>
                                                <img src={img3} alt="user profile" />
                                                <div>
                                                    <div>
                                                        <img src={star} alt="" />
                                                        <img src={star} alt="" />
                                                        <img src={star} alt="" />
                                                        <img src={star} alt="" />
                                                        <img src={star} alt="" />
                                                    </div>
                                                    {review.userId.firstName && (
                                                        <p>
                                                            5 days ago by {review.userId.firstName} {review.userId.lastName}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <p>{review.comment}</p>
                                        </div>
                                    )
                                })
                            ) : (
                                <div>
                                    <p>No reviews yet.</p>
                                </div>
                            )}
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