//make api call for restro card data
import { useState, useEffect } from "react";
import { RESTRO_API } from "./constants";

const useRestroCard = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  useEffect(() => {
    fetchData();
  }, []); //load ones

  //api call fetch data
  const fetchData = async () => {
    //for api call of api created by me

    // const data = await fetch("https://api.npoint.io/eaa947b5059e46c7d650");
    // const json = await data.json();
    // setListOfRestro(json.restaurants);
    // setFilteredRestro(json.restaurants);

    //swigy api path
    //data.cards[2].card.card.gridElements.infoWithStyle.restaurants

    const data = await fetch(RESTRO_API);
    const json = await data.json();
    setListOfRestro(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestro;
};
export default useRestroCard;
