import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

interface SearchResultItem {
    _id: string;
    img?: string;
    firstName?: string;
    lastName?: string;
    skills?: string[];
    status?: string;
    bio?: string;
    gender?: string;
    country?: string;
    hourlyRate?: string;
  }
  interface AuthState {
    auth: {
        authToken: string
    } | null
  }

export default function SearchResults() {
    const [searchDetails, setSearchDetails] = useState<SearchResultItem[]>([]);
  const [searchOriginalDetails, setSearchOriginalDetails] = useState<
    SearchResultItem[]
  >([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state: AuthState) => state?.auth?.authToken);

    const searchResult = async (searchId: any) => {
        const url = `https://creativehub-endpoints-production.up.railway.app/api/creatives/search?skill=${searchId}&location=&country=&gender=`;
        setLoading(true);
        try {
          const response = await axios.get(url, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data.data.creatives);
          setSearchDetails(response.data.data.creatives);
          setSearchOriginalDetails(response.data.data.creatives);
          setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
          console.log(error);
          setLoading(false);
          // errorMessage(error.response.data.message)
        }
      };
  return { searchDetails, searchResult, searchOriginalDetails, setSearchDetails, setSearchOriginalDetails, loading }
}
