import { useParams } from "react-router-dom";
import { menuItemsImg_CDN_Link, swiggyMenuApi } from "./constants";
import { useEffect, useState } from "react";

import { menuImg_CDN_Link } from "./constants";

async function getDetails(id, setDetails, setFilteredRestaurant) {
  console.log("useEffect:");
  const data = await fetch(swiggyMenuApi + id);
  const jsonData = await data.json();
  console.log(jsonData);
  setDetails(jsonData);
  setFilteredRestaurant(jsonData.data.menu.items);
}

const MenuCard = () => {
  let { id } = useParams();

  let [details, setDetails] = useState(null);
  let [filteredRestaurant, setFilteredRestaurant] = useState(null);
  useEffect(() => {
    console.log("run useEffect()");
    getDetails(id, setDetails, setFilteredRestaurant);
  }, []);
  {
    console.log("first");
  }
  return details == null ? (
    <p>null</p>
  ) : (
    <>
      <MenuCss {...details} />
      <FilterMenu data={details} filterRes={setFilteredRestaurant} />
      <div id="menuParent" key={"menuParent"}>
        {Object.values(filteredRestaurant).map((rs) => {
          return (
            <div className="menuBody" key={rs.id}>
              <div className="namePrice">
                <h2>{rs.name}</h2>
                <h3>{+rs.price / 100}</h3>
                <span>{rs.description}</span>
              </div>
              <div className="menuImgPositioning">
                {rs.cloudinaryImageId == "" ||
                rs.cloudinaryImageId == undefined ? (
                  <></>
                ) : rs.inStock == 1 ? (
                  <img
                    className="imgMenuCard"
                    src={menuItemsImg_CDN_Link + rs.cloudinaryImageId}
                    alt="img"
                  ></img>
                ) : (
                  <NotInStock {...rs} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const MenuCss = ({ data }) => {
  //img
  // restaurantName
  // cuisines
  //ratings , deliverytime,cost
  //search

  return (
    <>
      <div id="headerForMenu" key="header">
        <img
          src={menuImg_CDN_Link + data.cloudinaryImageId}
          alt="restaurantImg"
        ></img>
        <div id="underTitle" key="underTitle">
          <h1>{data.name}</h1>
          <span>{data.cuisines.join(" ")}</span>
          <ul key="otherElem">
            <li>{data.avgRating + "⭐"}</li>
            <li>{data.costForTwoMsg}</li>
            <li>{data.sla.deliveryTime + "min"}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
const NotInStock = ({ cloudinaryImageId, nextAvailableAtMessage }) => {
  return (
    <>
      <img
        className="imgMenuCard"
        id="imgMenuCardColor"
        src={menuItemsImg_CDN_Link + cloudinaryImageId}
        alt="img"
      ></img>{" "}
      <span>{nextAvailableAtMessage}</span>
    </>
  );
};

const FilterMenu = (props) => {
  let [filterSearch, setFilterSearch] = useState("search");
  console.log("FilterMenu:", props);
  const details = props.data.data;
  console.log(details);
  const setFilteredRestaurant = props.filterRes;
  return (
    <>
      <input
        type="text"
        placeholder={filterSearch}
        onChange={(e) => {
          setFilterSearch(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          console.log("details.menu.items:", details.menu.items);
          let filteredData = Object.values(details.menu.items).filter((rsx) => {
            console.log("rsx", rsx.name);

            if (rsx.name.toLowerCase().includes(filterSearch.toLowerCase()))
              return rsx;
          });
          setFilteredRestaurant(filteredData);
          console.log("filter", filteredData);
        }}
      >
        Search
      </button>
    </>
  );
};
export default MenuCard;
