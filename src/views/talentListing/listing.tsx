/* eslint-disable @typescript-eslint/no-explicit-any */
import "./listing.scss";
import search from "./assets/search.svg";
import { useEffect, useState } from "react";
import like from "./assets/like.svg";
import star from "./assets/star.svg";
import ballet from "./assets/ballet.png";
import { useNavigate } from "react-router-dom";
import GetCreativesApi from "../../apis/GetCreativesApi";

const Listing = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const { getCreatives, creativesDetails, loading, error } = GetCreativesApi();

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
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error in fetching details</div>
          ) : creativesDetails.map((results: object | any, index: number) => {
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
