import "./style.scss";
import search from "../assets/search.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface attributes {
  placeholder: string;
  className: string;
}

export const Search = (props: attributes) => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    navigate(`/search/${searchValue}`);
  };

  return (
    <div id="home__search" className={props.className}>
      <div id="home__search__bar">
        <img src={search} alt="search" />
        <input
          type="search"
          name=""
          placeholder={props.placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch} type="submit">Search</button>
      </div>
      <div className="top__searched">
        <p>Top Searched:</p>
        <div>
          <button>Dancers</button>
          <button>Sound Engineers</button>
          <button>Female Singers</button>
        </div>
      </div>
    </div>
  );
};
