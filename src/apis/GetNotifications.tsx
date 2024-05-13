import { useState } from "react";
import { authHeader } from "../utils/headers";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { api } from "../utils/config";
import { saveNotification } from "../state/slice/notificationSlice";

interface AuthState {
  auth: {
    authToken: string | null;
  };
}

export default function GetNotifications() {
  const token = useSelector((state: AuthState) => state?.auth?.authToken);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [notifications, setNotifications] = useState([]);
  

  const dispatch = useDispatch();
  const notificationRedux = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.notification.notification
  );

  const getAllNotifications = async () => {
    console.log("api: ", api);
    setLoading(true);
    try {
      const response = await axios.get(
        `https://creativehub-endpoints-production.up.railway.app/api/notifications`,
        {
          headers: authHeader(`${token}`),
        }
      );
      console.log(response.data.data.notifications);
      setNotifications(response.data.data.notifications);
      dispatch(saveNotification(response.data.data.notifications));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };
  return { getAllNotifications, notifications, notificationRedux, loading, error };
}
