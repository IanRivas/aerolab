import {createContext, useContext, useState} from "react";

import type {User} from "../types";

const dataContext = createContext(null);

type props = {
  children: JSX.Element[] | JSX.Element;
  user: User;
};

const Data = ({children, user: u}: props) => {
  const [user, setUser] = useState(u);

  return <dataContext.Provider value={{user, setUser}}>{children}</dataContext.Provider>;
};

export default Data;

export const useGetData = () => useContext(dataContext);
