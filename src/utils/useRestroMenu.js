// So I will create a customise react hook to get data for restro menu from api call and send it back
/* from RestroMenu component i will get restroId
and i have to send back restroInfo*/

import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestroMenu = (restroId) => {
  const [restroInfo, setRestroInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  //api call using fetch()
  const fetchMenu = async () => {
    //step 1:fetching of data
    const data = await fetch(MENU_API + restroId);
    //step 2:convert into json
    const json = await data.json();
    //step 3:send the data to the state varible or update the data to state varible
    setRestroInfo(json?.data);
  };
  return restroInfo; //What i need to return
};
export default useRestroMenu;
