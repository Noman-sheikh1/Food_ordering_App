import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const[listOfRestuaurants,setListOfRestuaurant]=useState([]);

  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async()=>{
    const data=await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json=await data.json();
    console.log(json);
    const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestuaurant(restaurants);
    console.log(listOfRestuaurants);
   
  }; 

   
  
   

    return (
      <div className="flex flex-row flex-wrap ml-20 mr-30 pt-36">
       
      {listOfRestuaurants.map(restaurant => (
        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
    );
}

export default Body;
