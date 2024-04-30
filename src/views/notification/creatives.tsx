import "./notification.scss";
import user from "./Orlando_Studio_Pic_1.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../utils/config";
import { authHeader } from "../../utils/headers";
import { useSelector } from "react-redux";
import { responseMessage } from "../../utils/toast";

export const CreativesNotification = () => {
  const [fullView, setFullView] = useState<boolean>(false);
  const [notifications, setNotifications] = useState([]);

  const token = useSelector((state: any) => state?.auth?.authToken);
  const setView = () => setFullView(!fullView);

  const getAllNotifications = async () => {
    console.log("api: ", api);

    try {
      const response = await axios.get(
        `https://creativehub-endpoints-production.up.railway.app/api/notifications`,
        {
          headers: authHeader(`${token}`),
        }
      );
      console.log(response.data.data.notifications);
      setNotifications(response.data.data.notifications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  const acceptBargain = async (id: any) => {
    const url = `https://creativehub-endpoints-production.up.railway.app/api/creatives/bargain?id=${id}&response=ACCEPTED`;
    try {
      const response = await axios.patch(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      responseMessage("Bargain accepted Succesful");
      getAllNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectBargain = async (id: any) => {
    const url = `https://creativehub-endpoints-production.up.railway.app/api/creatives/bargain?id=${id}&response=DECLINED`;
    try {
      const response = await axios.patch(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      responseMessage("Bargain rejected");
      getAllNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  const pendingNotifications = notifications.filter(
    (notification: any) => notification.docId.status === "PENDING"
  );
  //   console.log(pendingNotifications[0].docId._id);

  return (
    <section id="notification">
      <h2>Notifications</h2>
      {pendingNotifications && pendingNotifications.length !== 0 ? (
        pendingNotifications.map((notification: any, index: any) => (
          <div key={index} className={fullView ? "" : "purple"}>
            <img src={user} alt="" />
            <div>
              <h3>{notification.docId._id} wants to bargain with you</h3>
              {fullView && (
                <>
                  <p className="headline">
                    {notification.docId._id} is in need of your services and
                    have bargained for ${notification.docId.proposedPrice} per
                    hour. Let him know your decision.
                  </p>
                  <div className="desc">
                    <h4>Service Description</h4>
                    <p>{notification.docId.projectDescription}</p>
                  </div>
                  <div className="desc">
                    <h4>Proposed Pricing</h4>
                    <p>${notification.docId.proposedPrice} per hour</p>
                  </div>
                </>
              )}
              <div className="actions">
                <button onClick={setView} className="read__more">
                  {fullView ? "Read Less" : "Read More"}
                </button>
                {fullView && (
                  <div>
                    <button
                      onClick={() => acceptBargain(notification.docId._id)}
                      className="accept"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => rejectBargain(notification.docId._id)}
                      className="reject"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>No Notifications to show yet.</p>
        </div>
      )}
    </section>
  );
};
