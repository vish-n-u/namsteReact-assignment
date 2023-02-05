import { React } from "react";
const ReactDOM = require("react-dom/client");
import { zomatoData } from "./zomatoData";

// const ReactDOM = ReactDOM;

const AppLayout = () => {
  return (
    <>
      <Heading />
      <Body />
      {/* <Footer />*/}
    </>
  );
};

const Heading = () => {
  return (
    <div id="heading">
      <img
        id="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDagEdwRDWZP8M7nBE2lEjiYNj4husTUFM9CosnABWooap7mHwCa9pwG4k051PEioM4Rg&usqp=CAU"
        alt="companyLogo"
      ></img>
      <h3 id="title">Batman ka Dhaba</h3>
      <ul>
        <li>Search</li>
        <li>Offer</li>
        <li>Help</li>
        <li>sign-in</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <div id="restaurantLists">
      {zomatoData.SECTION_SEARCH_RESULT.map((rs) => {
        console.log("RS >>>>>>>>>>>>>>>>> ", { ...rs });
        return <RestaurantCard {...rs} />;
      })}
    </div>
  );
};
//img
//restaurant Name
// cuisines
// rating      delivery time
const RestaurantCard = (props) => {
  return (
    <div>
      <img id="restaurantImg" src={props.info.image.url}></img>
      <h3>{props.info.name}</h3>
      <ul>
        <li>{props.info.rating.aggregate_rating}</li>
        <li>{props.order.deliveryTime}</li>
      </ul>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
