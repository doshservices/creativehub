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

const SearchResult: FC = () => {
  const [searchDetails, setSearchDetails] = useState([]);
  const [loading, setLoading] = useState(false);
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
      setLoading(false);
      // dispatch(setUser(response?.data?.data?.user))
      // dispatch(setAuthToken(response?.data?.data?.token))
      //   responseMessage(`Search for ${searchId} Succesful`)
      // window.location.reload()
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
              <img src={arrowup} alt="" />
            </h4>
            <input type="text" placeholder="eg, Spain" />
            <label htmlFor="">
              <input type="checkbox" />
              Any Location
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              Mombasa
            </label>
          </div>
          <div className="location">
            <h4>
              <span>Talent Gender</span>
              {/* <img src={arrowup} alt="" /> */}
            </h4>
            {/* <input type="text" placeholder="Mombasa" /> */}
            <label htmlFor="Male">
              <input type="radio" id="Male" name="gender" value="Male" />
              Male
            </label>
            <label htmlFor="Female">
              <input type="radio" id="Female" name="gender" value="Female" />
              Female
            </label>
            <label htmlFor="Mixed">
              <input type="radio" id="Mixed" name="gender" value="Mixed" />
              Mixed
            </label>
          </div>
          <div className="location">
            <h4>
              <span>Hourly Rate</span>
              <img src={arrowup} alt="" />
            </h4>
            <input type="text" placeholder="Input rate" />
            <label htmlFor="">
              <input type="checkbox" />
              Any hourly rate
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              $10 and below
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              $11 - 50$
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              $50 - $100
            </label>
            <label htmlFor="">
              <input type="checkbox" />
              $100 and above
            </label>
          </div>
        </section>
        <div className="search__results">
          <Search
            placeholder="Dancers"
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
