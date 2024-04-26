import './notification.scss';
import user from './Orlando_Studio_Pic_1.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from '../../utils/config';
import { authHeader } from '../../utils/headers';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/rootReducer';

export const CreativesNotification = () => {

    const authToken = useSelector((state: RootState | any) => state?.auth?.token)

    const [fullView, setFullView] = useState<boolean>(false)

    const setView = () => setFullView(!fullView);

    const getAllNotifications = async () => {
        try {
            const response = await axios.get(`${api}api/notifications`, {
                headers: authHeader(`${authToken}`)
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllNotifications()
    }, [])

    return (
        <section id="notification">
            <h2>Notifications</h2>
            <div className={fullView ? "" : "purple"}>
                <img src={user} alt="" />
                <div>
                    <h3><em>Shazam Grey</em> wants to bargain with you</h3>
                    {fullView && (
                        <>
                            <p className="headline">Shazam Grey is in need of your services and have bargained for $10 per hour. Let him know your decision</p>
                            <div className="desc">
                                <h4>Service Description</h4>
                                <p>Lorem ipsum dolor humpty dumpty sat on the wall of lorem ipsum dolor shazam something something that has to do with lorem ipsum dolor humpty dumpty sat on the wall of lorem ipsum dolor shazam something something</p>
                            </div>
                            <div className="desc">
                                <h4>Proposed Pricing</h4>
                                <p>$10 per hour</p>
                            </div>
                        </>
                    )}
                    <div className='actions'>
                        <button onClick={setView} className='read__more'>{fullView ? 'Read Less' : 'Read More'}</button>
                        {
                            fullView &&
                            <div>
                                <button className='accept'>Accept</button>
                                <button className='reject'>Reject</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}