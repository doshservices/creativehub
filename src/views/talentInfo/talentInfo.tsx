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
import { reviews } from './info';
import { Toggler } from '../../components/profile';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
interface UserDetails {
    firstName: string;
    lastName: string;
    location: string;
    country: string;
    bio: string;
    skills: string[];
  }

const TalentInfo = () => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const { userId } = useParams();
  
    const onUser = async (userId: any) => {
      const url = `https://creativehub-endpoints-production.up.railway.app/api/users/${userId}`;
  
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // console.log(response.data.data.user);
        setUserDetails(response.data.data.user);
      } catch (error: any) {
        console.log(error);
        // errorMessage(error.response.data.message)
      }
    };
    useEffect(() => {
      onUser(userId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    console.log("user details: ", userDetails);
  

    return (
        <section id="talent__info">
            <section id="talent__info__intro">
                <div>
                    {userDetails?.firstName && (
                        <h2>{userDetails.firstName} {" "} {userDetails.lastName} </h2>
                    )}
                    <h3>{userDetails?.skills[0]}</h3>
                    <div className="stars">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" /> <p>(452)</p>
                    </div>
                    <p>{userDetails?.location}, {userDetails?.country}</p>
                </div>
            </section>
            <div id="talent__info__profile">
                <Toggler />
                <div className='talent__info__grid'>
                    <div id="talent__info__about">
                        <p>{userDetails?.bio}</p>
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