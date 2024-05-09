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

export default function RejectBargain() {
    const token = useSelector((state: AuthState) => state?.auth?.authToken);
    const [isRejecting, setIsRejecting] = useState(false);
    const { getAllNotifications } = GetNotifications();

    const rejectBargain = async (id: number) => {
      setIsRejecting(true);
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
        setIsRejecting(false);
      } catch (error) {
        console.log(error);
        setIsRejecting(false);
      }
    };
  return { rejectBargain, isRejecting }
}
