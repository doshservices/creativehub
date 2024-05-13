import "./notification.scss";
import user from "./Orlando_Studio_Pic_1.svg";
import { useEffect, useState } from "react";
import GetNotifications from "../../apis/GetNotifications";
import AcceptBargain from "../../apis/AcceptBargain";
import RejectBargain from "../../apis/RejectBargain";

interface NotificationState {
  docId: {
    _id: number;
    status: string;
    proposedPrice: number;
    projectDescription: string;
  } | null;
}

export const CreativesNotification = () => {
  const [fullView, setFullView] = useState<number | null>(null);
  const toggleExpandedView = (index: number) => {
    setFullView(fullView === index ? null : index);
  };

  const { getAllNotifications, notificationRedux, loading, error } =
    GetNotifications();
  const { acceptBargain, isAccepting } = AcceptBargain();
  const { rejectBargain, isRejecting } = RejectBargain();

  useEffect(() => {
    getAllNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pendingNotifications = notificationRedux?.filter(
    (notification: NotificationState) =>
      notification?.docId?.status === "PENDING"
  );

  return (
    <section id="notification">
      <h2>Notifications</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error in fetching notifications</div>
      ) : pendingNotifications === null ? (
        <div>No Notifications found.</div>
      ) : pendingNotifications && pendingNotifications?.length !== 0 ? (
        pendingNotifications.map(
          (notification: NotificationState, index: number) => (
            <div key={index} className={fullView === index ? "" : "purple"}>
              <img src={user} alt="" />
              <div>
                <h3>{notification?.docId?._id} wants to bargain with you</h3>
                {fullView === index && (
                  <>
                    <p className="headline">
                      {notification?.docId?._id} is in need of your services and
                      have bargained for ₦{notification?.docId?.proposedPrice}{" "}
                      per hour. Let him know your decision.
                    </p>
                    <div className="desc">
                      <h4>Service Description</h4>
                      <p>{notification?.docId?.projectDescription}</p>
                    </div>
                    <div className="desc">
                      <h4>Proposed Pricing</h4>
                      <p>₦{notification?.docId?.proposedPrice} per hour</p>
                    </div>
                  </>
                )}
                <div className="actions">
                  <button
                    onClick={() => toggleExpandedView(index)}
                    className="read__more"
                  >
                    {fullView === index ? "Read Less" : "Read More"}
                  </button>
                  {fullView === index && (
                    <div>
                      <button
                        onClick={() =>
                          acceptBargain(notification?.docId?._id || 0, toggleExpandedView)
                        }
                        className="accept"
                      >
                        {isAccepting ? "Accepting" : "Accept"}
                      </button>
                      <button
                        onClick={() =>
                          rejectBargain(notification?.docId?._id || 0, toggleExpandedView)

                        }
                        className="reject"
                      >
                        {isRejecting ? "Rejecting" : "Reject"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        )
      ) : (
        <div>
          <p>No Notifications to show yet.</p>
        </div>
      )}
    </section>
  );
};
