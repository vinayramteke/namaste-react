//useRestroList : to get the list of restaurent using api call
import { useState, useEffect } from "react";
import { RESTRO_API } from "./constants";

const useRestroList = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  useEffect(() => {
    fetchRestoList();
  }, []);
  const fetchRestoList = async () => {
    const res = await fetch(RESTRO_API);
    const data = await res.json();
    const resListData =
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestro(resListData || []);
  };

  return listOfRestro;
};
export default useRestroList;
