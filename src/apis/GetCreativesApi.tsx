import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

interface AuthState {
    auth: {
        authToken: string | null;
    }
}

export default function GetCreativesApi() {
    const token = useSelector((state: AuthState) => state?.auth?.authToken);
    const [creativesDetails, setCreativesDetails] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const getCreatives = async () => {
        const url = `https://creativehub-endpoints-production.up.railway.app/api/creatives`;
        setLoading(true);
        try {
          const response = await axios.get(url, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          setCreativesDetails(response.data.data.creatives);
          setLoading(false);
        } catch (error) {
          setError(true);
          setLoading(false);
        }
      };
  return { getCreatives, creativesDetails, loading, error }
}
