import React, { createContext, useState, useEffect, useCallback } from "react";

let logoutTimer: ReturnType<typeof setTimeout>;

export interface AuthcontextInterface {
  name: string;
  surname: string;
  id: number;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthcontextInterface>({
  name: "",
  surname: "",
  isLoggedIn: false,
  id: 0,
  login: () => { },
  logout: () => { }
});

interface Props {
  children: string | JSX.Element | JSX.Element[];
};

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("User");

  const logoutHandler = useCallback(() => {
    setUserIsLoggedIn(false);
  }, []);

  const loginHandler = (id: number, name: string) => {
    setUserId(id);
    setUserName(name);
    setUserIsLoggedIn(true);
  };

  const contextValue = {
    id: userId,
    name: userName,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
