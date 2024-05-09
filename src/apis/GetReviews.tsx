import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

interface AuthState {
  auth: {
    authToken: string | null;
    user: {
      _id: string;
    } | null;
  };
}

export default function GetReviewsApi() {
  const [searchReviews, setSearchReviews] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const token = useSelector((state: AuthState) => state?.auth?.authToken);
  const user = useSelector((state: AuthState) => state?.auth?.user);

  const getReviews = async () => {
    const userId = user?._id;
    const url = `https://creativehub-endpoints-production.up.railway.app/api/creatives/review?userId=${userId}`;
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("reviews: ", response.data.data);
      setSearchReviews(response.data.data.reviews);
      setLoading(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any ) {
      setLoading(true);
      setError(error);
    }
  };
  return { getReviews, searchReviews, loading, error };
}
