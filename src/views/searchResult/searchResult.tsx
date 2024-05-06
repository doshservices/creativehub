/* eslint-disable @typescript-eslint/no-explicit-any */
import "./index.scss";
import { FC, useEffect, useState } from "react";
import arrowup from "./assets/arrow up.svg";
import arrowright from "./assets/arrow right.svg";
// import { result } from "./components/result";
import { Search } from "../home/components/search";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import { responseMessage } from "../../utils/toast";
import like from "./assets/like.svg";
import star from "./assets/star.svg";
import ballet from "./assets/ballet.png";

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

const SearchResult: FC = () => {
  const [searchDetails, setSearchDetails] = useState<SearchResultItem[]>([]);
  const [searchOriginalDetails, setSearchOriginalDetails] = useState<
    SearchResultItem[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [countryValue, setCountryValue] = useState("");
  const [hourlyValue, setHourlyValue] = useState("");

  const { searchId } = useParams();
  const navigate = useNavigate();
  const token = useSelector((state: any) => state?.auth?.authToken);

  const onSearch = async (searchId: any) => {
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
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      // errorMessage(error.response.data.message)
    }
  };
  useEffect(() => {
    onSearch(searchId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seeMoreUser = (userId: any) => {
    navigate(`/talentinfo/${userId}`);
  };

  const filterResultsByGender = (gender: string) => {
    const filteredResults = searchOriginalDetails.filter(
      (result) => result.gender === gender
    );
    setSearchDetails(filteredResults);
  };

  const filterResultsByLocation = (country: string) => {
    const filteredResults = searchOriginalDetails.filter(
      (result) => result.country === country
    );
    setSearchDetails(filteredResults);
    setCountryValue("");
  };

  const filterByHourlyRate = (hourlyRate: string) => {
    const filteredResults = searchOriginalDetails.filter(
      (result) => result.hourlyRate === hourlyRate
    );
    setSearchDetails(filteredResults);
    setHourlyValue("");
  };
  const filterBy10kbelow = () => {
     const filteredResults = searchOriginalDetails.filter(
      (result) => result.hourlyRate && parseInt(result.hourlyRate) <= 10000
    );
    setSearchDetails(filteredResults);
    setHourlyValue("");
  };
  const filterBy101kabove = () => {
    const filteredResults = searchOriginalDetails.filter(
     (result) => result.hourlyRate && parseInt(result.hourlyRate) >= 101000
   );
   setSearchDetails(filteredResults);
   setHourlyValue("");
 };
 const filterBetween11kAnd50k = () => {
  const filteredResults = searchOriginalDetails.filter(
      (result) => {
          if (result.hourlyRate) {
              const rate = parseInt(result.hourlyRate);
              return rate >= 11000 && rate <= 50000;
          }
          return false;
      }
  );
  setSearchDetails(filteredResults);
  setHourlyValue("");
};
const filterBetween51kAnd100k = () => {
  const filteredResults = searchOriginalDetails.filter(
      (result) => {
          if (result.hourlyRate) {
              const rate = parseInt(result.hourlyRate);
              return rate >= 51000 && rate <= 100000;
          }
          return false;
      }
  );
  setSearchDetails(filteredResults);
  setHourlyValue("");
};

  console.log("search: ", searchDetails);
  return (
    <section id="search">
      <h2>
        Creatives Hub <img src={arrowright} alt="" /> {searchId}{" "}
        <img src={arrowright} alt="" /> {searchDetails.length}
      </h2>
      <div>
        <section className="filter__results">
          <h3>Filter Results</h3>
          <div className="location">
            <h4>
              <span>Location</span>
              {/* <img src={arrowup} alt="" /> */}
            </h4>
            {/* <form action=""> */}
            <input
              type="number"
              value={countryValue}
              onChange={(e) => setCountryValue(e.target.value)}
              placeholder="eg, Spain"
            />
            <button onClick={() => filterResultsByLocation(countryValue)}>
              Filter by Location
            </button>
            {/* </form> */}
            <label htmlFor="any" onClick={() => onSearch(searchId)}>
              <input type="radio" id="any" name="location" />
              Any Location
            </label>
            <label
              htmlFor="Nigeria"
              onClick={() => filterResultsByLocation("Nigeria")}
            >
              <input type="radio" id="Nigeria" name="location" />
              Nigeria
            </label>
            <label
              htmlFor="Spain"
              onClick={() => filterResultsByLocation("Spain")}
            >
              <input type="radio" id="Spain" name="location" />
              Spain
            </label>
            <label
              htmlFor="South-Africa"
              onClick={() => filterResultsByLocation("South Africa")}
            >
              <input type="radio" id="South-Africa" name="location" />
              South Africa
            </label>
          </div>
          <div className="location">
            <h4>
              <span>Talent Gender</span>
              {/* <img src={arrowup} alt="" /> */}
            </h4>
            {/* <input type="text" placeholder="Mombasa" /> */}
            <label htmlFor="Male" onClick={() => filterResultsByGender("MALE")}>
              <input type="radio" id="Male" name="gender" value="Male" />
              Male
            </label>
            <label
              htmlFor="Female"
              onClick={() => filterResultsByGender("FEMALE")}
            >
              <input type="radio" id="Female" name="gender" value="Female" />
              Female
            </label>
            <label htmlFor="Mixed" onClick={() => onSearch(searchId)}>
              <input type="radio" id="Mixed" name="gender" value="Mixed" />
              Mixed
            </label>
          </div>
          <div className="location">
            <h4>
              <span>Hourly Rate</span>
              <img src={arrowup} alt="" />
            </h4>
            <input
              type="number"
              value={hourlyValue}
              onChange={(e) => setHourlyValue(e.target.value)}
              placeholder="Input rate"
            />
            <button onClick={() => filterByHourlyRate(hourlyValue)}>
              Filter by Rate
            </button>
            <label htmlFor="Any-hour" onClick={() => onSearch(searchId)}>
              <input type="radio" id="Any-hour" name="hour" />
              Any hourly rate
            </label>
            <label htmlFor="below-10k" onClick={filterBy10kbelow}>
              <input type="radio" name="hour" id="below-10k" />
              ₦10k and below
            </label>
            <label htmlFor="11and50" onClick={filterBetween11kAnd50k}>
              <input type="radio" name="hour" id="11and50" />
              ₦11k - ₦50k
            </label>
            <label htmlFor="51and100" onClick={filterBetween51kAnd100k}>
              <input type="radio" name="hour" id="51and100" />
              ₦51k - ₦100k
            </label>
            <label htmlFor="101above" onClick={filterBy101kabove}>
              <input type="radio" id="101above" name="hour" />
              ₦101k and above
            </label>
          </div>
        </section>
        <div className="search__results">
          <Search
            placeholder="eg. Singer"
            onSearch={onSearch}
            className="result__bar"
          />
          <div className="items">
            {loading ? (
              <div>
                <p>Loading....</p>
              </div>
            ) : searchDetails && searchDetails.length > 0 ? (
              searchDetails.map((results: object | any, index: number) => {
                return (
                  <div
                    className="results cursor"
                    onClick={() => seeMoreUser(results._id)}
                    key={index}
                  >
                    {results.img ? <img src={ballet} /> : <img src={ballet} />}
                    <div>
                      {results.skills && <h5>{searchId}</h5>}
                      <div className="name">
                        {results.firstName && (
                          <p>
                            {results.firstName} {results.lastName}
                            {/* <span>{results.country}</span> */}
                          </p>
                        )}
                        <img src={like} alt="" />
                      </div>
                      <div className="stars">
                        <div>
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          <img src={star} alt="" />
                          {/* {results.number && <p>{results.number}</p>} */}
                        </div>
                        <p
                          className={
                            results.status === "ACTIVE" ? "online" : "offline"
                          }
                        >
                          {results.status}
                        </p>
                      </div>
                      {results.bio && <p>{results.bio}</p>}
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <p>No search results for {searchId} found </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
