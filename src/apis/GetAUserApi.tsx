import axios from "axios";
import { useState } from "react";

interface UserDetails {
  firstName: string;
  lastName: string;
  _id: string;
  location: string;
  country: string;
  state: string;
  bio: string;
  skills: string[];
}

export default function GetAUserApi() {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loadingGetUser, setLoadingGetUser] = useState<boolean>(false);
  const [errorGetUser, setErrorGetUser] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getUser = async (userId: any) => {
    const url = `https://creativehub-endpoints-production.up.railway.app/api/users/${userId}`;
    setLoadingGetUser(true);
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUserDetails(response.data.data.user);
      setLoadingGetUser(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // console.log(error);
      setLoadingGetUser(false);
      setErrorGetUser(true);
    }
  };
  return { getUser, userDetails, loadingGetUser, errorGetUser };
}
