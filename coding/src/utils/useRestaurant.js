import { useEffect } from "react";

import { swiggyRestaurantApi } from "../constants";


async function getData(setRestaurants, setFilterSearch) {
  const data = await fetch(swiggyRestaurantApi);
  const jsonData = await data.json();
  //   console.log(jsonData.data.cards[2].data.data.cards);
  setRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  setFilterSearch(jsonData?.data?.cards[2]?.data?.data?.cards);
}

const useRestaurant = (setRestaurants, setFilterSearch) => {
  useEffect(() => {
    getData(setRestaurants, setFilterSearch);
  }, []);
};

export default useRestaurant;
