import { restaurantImg_CDN_Link } from "./constants"
const { Link } = require("react-router-dom");


const RestaurantCard = ({cloudinaryImageId:img,name,avgRating:rating,deliveryTime,cuisines,costForTwoString:cost,id}) =>{
    return (
        <Link to={"/menucard/"+id }>
        <div id="restaurantCard" key="restaurantCard">
            <img src={restaurantImg_CDN_Link+img} id="img" key ="img" ></img>
            <h2 className="widthMaintain">{name}</h2>
            <h4 id ="cuisines" className="widthMaintain">{cuisines}</h4>
            <ul id ="restElem" key="restElem" className="widthMaintain">
                <li key="rating">{rating+"⭐"}</li>
                <li key="deliveryTime">{deliveryTime+"min"}</li>
                <li key="cost">{cost}</li>
            </ul>
        </div>
        </Link>

    )
}

export default RestaurantCard