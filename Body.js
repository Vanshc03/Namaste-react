
import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";



const Body = () => {

const [listOfRestaurants, setListOfRestaurants] = useState([]);

useEffect(()=>{
    fetchData();
},[]);


const fetchData = async ()=>{
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.04074699828537&lng=72.86890773658763&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
};


if(listOfRestaurants == 0) {
    return  <Shimmer/>

}

return(
    <div className="body">
        <div className="search">search</div>
        <div className="filter">
            <button className="filter-on" 
            onClick={()=>{
               const filteredList = listOfRestaurants.filter(
                (res)=> res.info.avgRating > 4.5
                );

                setListOfRestaurants(filteredList);

            }}>Top rated restaurants 
            </button>
        </div>
        <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
                <RestaurantCard resData={restaurant}/>
            ))}
        </div>
    </div>
);
};




export default Body;