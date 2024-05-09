import { useSelector } from "react-redux";
import { responseMessage } from "../utils/toast";
import { useState } from "react";
import axios from "axios";
import GetNotifications from "./GetNotifications";

interface AuthState {
    auth: {
      authToken: string | null
    }
  }

export default function AcceptBargain() {
    const token = useSelector((state: AuthState) => state?.auth?.authToken);
    const [isAccepting, setIsAccepting] = useState(false);
    const { getAllNotifications } = GetNotifications();

    const acceptBargain = async (id: number) => {
        setIsAccepting(true);
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
          window.location.reload();
          setIsAccepting(false);
        } catch (error) {
          console.log(error);
          setIsAccepting(false);
        }
      };
  return { acceptBargain, isAccepting }
}
