import { useEffect } from "react";

import { swiggyMenuApi } from "../constants";

async function getDetails(id, setDetails, setFilteredRestaurant) {
  console.log("useEffect:");
  const data = await fetch(swiggyMenuApi + id);
  const jsonData = await data.json();
  console.log(jsonData);
  setDetails(jsonData);
  setFilteredRestaurant(jsonData.data.menu.items);
}

const useGetMenuDetail = (id, setDetails, setFilteredRestaurant) => {
  useEffect(() => {
    getDetails(id, setDetails, setFilteredRestaurant);
  }, []);
};

export default useGetMenuDetail;
