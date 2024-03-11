
import {IMG_URL} from "../utils/constants.js";
 
const RestaurantCard = (props) =>{
    const {resData} = props;

    const {
        cloudinaryImageId,name,avgRating,cuisines,costForTwo
          } = resData?.info;

    return(
        <div className="res-card">
            <img className="food"
             alt= "res-logo"
             src= {IMG_URL + cloudinaryImageId} />
        

        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        </div>
    );   
    };

    export default RestaurantCard;