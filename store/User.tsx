import {createContext, useContext} from "react";

import useFetch from "hooks";

type userState = ReturnType<typeof useFetch>;

const defaultState: userState = {
  data: null,
  setData: null,
  error: null,
  loading: false,
};

const userContext = createContext<userState>(defaultState);

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const state = useFetch("https://coding-challenge-api.aerolab.co/user/me");

  return <userContext.Provider value={state}>{children}</userContext.Provider>;
};

export default UserProvider;

export const useCurrentUser = () => useContext(userContext);
