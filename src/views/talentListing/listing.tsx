/* eslint-disable @typescript-eslint/no-explicit-any */
import "./listing.scss";
import search from "./assets/search.svg";
// import { result } from "../searchResult/components/result";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import like from "./assets/like.svg";
import star from "./assets/star.svg";
import ballet from "./assets/ballet.png";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  const [creativesDetails, setCreativesDetails] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const token = useSelector((state: any) => state?.auth?.authToken);

  const getCreatives = async () => {
    const url = `https://creativehub-endpoints-production.up.railway.app/api/creatives`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data.data.creatives);
      setCreativesDetails(response.data.data.creatives);
    } catch (error: any) {
      // console.log(error);
      // errorMessage(error.response.data.message)
    }
  };
  useEffect(() => {
    getCreatives();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("creatives: ", creativesDetails);

  const seeMoreUser = (userId: any) => {
    navigate(`/talentinfo/${userId}`);
  };

  const handleSearch = () => {
    navigate(`/search/${searchValue}`);
    // onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <section id="listing">
      <div id="listing__intro">
        <div>
          <h2>Get Top Dancers To Hire</h2>
          <p>
            These experienced dancers are available to for hire and are trusted
            to give in their best.
          </p>
        </div>
      </div>
      <div id="listing__dancers">
        <form onSubmit={handleSearch} className="search">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Try 'Mombasa'"
          />
          <img src={search} alt="" />
          <button type="submit">Filter</button>
        </form>
        <div className="dancers">
          {creativesDetails.map((results: object | any, index: number) => {
            return (
              <div
                className="dancer cursor"
                onClick={() => seeMoreUser(results._id)}
                key={index}
              >
                <div className="col">
                  <div>
                    {results.img ? (
                      <img src={ballet} alt="talent" />
                    ) : (
                      <img src={ballet} alt="talent" />
                    )}
                  </div>
                  <div className="desc">
                    {results.skills && (
                      <h5 className="skill">{results.skills[0]?.skill}</h5>
                    )}
                    <div className="name">
                      {results.firstName && (
                        <p>
                          {results.firstName} {results.lastName},{" "}
                          <span>{results.country}</span>
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
                  </div>
                </div>
                <p>{results.bio}</p>
              </div>
            );
          })}
        </div>
        <button className="showmore">Show more</button>
      </div>
    </section>
  );
};

export default Listing;
