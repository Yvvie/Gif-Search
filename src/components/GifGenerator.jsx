import React, { useState, useEffect } from "react";
import axios from "axios";

const getData = JSON.parse(localStorage.getItem("gif"));

export function GifGenerator() {
  const [data, setData] = useState(getData);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    localStorage.setItem("gif", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (localStorage.getItem("gif") == null) {
      setData([]);
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = async () => {
    setError(false);
    if (search.trim().length == 0) {
      console.log("input field is empty");
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }

    try {
      const result = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "kZqTd209EslvRGMbHxYS4VWkcRW9pr7K",
          q: search,
          limit: 5,
        },
      });
      setData(result.data.data);
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="container">
      <form className="search-container" onSubmit={(e) => e.preventDefault()}>
        <input
          className={!isEmpty ? "input-field" : "input-empty"}
          type="text"
          placeholder={!isEmpty ? "Search for GIF" : "Search field is empty"}
          onChange={handleSearchChange}
          value={search}
        />
        <button type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div className="gif-container">
        {error ? (
          <div>Unable to get Gif, please try again in a few minutes</div>
        ) : (
          <div className="gifs">
            {data.map((el) => {
              return (
                <div className="gif" key={el.id}>
                  <img src={el.images.fixed_height.url} alt="gif" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
