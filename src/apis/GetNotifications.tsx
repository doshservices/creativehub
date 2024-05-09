import { useState } from "react";
import { authHeader } from "../utils/headers";
import { useSelector } from "react-redux";
import axios from "axios";
import { api } from "../utils/config";

interface AuthState {
  auth: {
    authToken: string | null
  }
}

export default function GetNotifications() {
    const [notifications, setNotifications] = useState([]);
    const token = useSelector((state: AuthState) => state?.auth?.authToken);

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
return { getAllNotifications, notifications }
}
