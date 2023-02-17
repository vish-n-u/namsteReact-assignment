import { useEffect, useState } from "react";

import { swiggyMenuApi, swiggyRestaurantApi } from "./constants";
import RestaurantCard from "./restaurantCard";
import ShimmerUI from "./shimmerUI";
import useRestaurant from "./utils/useRestaurant";


function getFilteredData(keyword, restaurants) {
  return restaurants.filter((rs) => {
    if (rs?.data?.name?.toLowerCase().includes(keyword.toLowerCase()))
      return rs;
  });
}

const Body = () => {
  // create a search bar
  // create ShimmerUI
  //create two state variables filterData and restaurantData
  let [filterSearch, setFilterSearch] = useState([]);
  let [searchText, setSearchText] = useState("search");
  let [restaurants, setRestaurants] = useState([]);
  useRestaurant(setRestaurants, setFilterSearch);
  return (
    <div id="body" key="body">
      <div id="searchBar" key="searchBar">
        <input
          id="bar"
          key="bar"
          type="text"
          placeholder={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          id="search"
          key="search"
          onClick={(e) => {
            let filterData = searchText;
            let filteredData = getFilteredData(filterData, restaurants);
            setFilterSearch(filteredData);
          }}
        >
          Search
        </button>
      </div>

      <div id="cards" key="cards">
        {restaurants.length == 0 ? (
          <ShimmerUI />
        ) : (
          filterSearch.map((rs) => {
            return <RestaurantCard {...rs.data} key={rs.data.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
