import "./index.scss";
import { FC, useEffect, useState } from "react";
import arrowup from "./assets/arrow up.svg";
import arrowright from "./assets/arrow right.svg";
// import { result } from "./components/result";
import { Search } from "../home/components/search";
import { useNavigate, useParams } from "react-router-dom";
// import { responseMessage } from "../../utils/toast";
import like from "./assets/like.svg";
import star from "./assets/star.svg";
import ballet from "./assets/ballet.png";
import SearchResults from "../../apis/SearchResults";

 interface SearchDetailsState {
  _id: number | null
  img: string | null
  bio: string | null
  firstName: string | null
  lastName: string | null
  status: string | null
  skills: string | null
 }

const SearchResult: FC = () => {
  const [countryValue, setCountryValue] = useState("");
  const [hourlyValue, setHourlyValue] = useState("");

  const { searchId } = useParams();
  const navigate = useNavigate();

  const { searchDetails, searchOriginalDetails, searchResult, setSearchDetails, loading} = SearchResults();

  
  useEffect(() => {
    searchResult(searchId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seeMoreUser = (userId: number) => {
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
              type="text"
              value={countryValue}
              onChange={(e) => setCountryValue(e.target.value)}
              placeholder="eg, Spain"
            />
            <button onClick={() => filterResultsByLocation(countryValue)}>
              Filter by Location
            </button>
            {/* </form> */}
            <label htmlFor="any" onClick={() => searchResult(searchId)}>
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
            <label htmlFor="Mixed" onClick={() => searchResult(searchId)}>
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
            <label htmlFor="Any-hour" onClick={() => searchResult(searchId)}>
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
            onSearch={searchResult}
            className="result__bar"
          />
          <div className="items">
            {loading ? (
              <div>
                <p>Loading....</p>
              </div>
            ) : searchDetails && searchDetails.length > 0 ? (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              searchDetails.map((results: SearchDetailsState | any, index: number) => {
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
