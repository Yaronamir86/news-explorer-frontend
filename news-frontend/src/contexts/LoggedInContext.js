import { useContext, useState, createContext } from "react";
import { useHistory } from "react-router-dom";

const LoggedInContext = createContext();

const LoggedInContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [savedCards, setCards] = useState([]);
  const [user, setUser] = useState({
    email: "yaron@gmail.com",
    firstName: "Yaron",
    lastName: "amir",
  });

  const history = useHistory();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setUser({});
    setCards([]);
    history.push("/");
  };

  const setCurrentUser = (values) => {
    setUser({ ...values });
};

  return (
    <LoggedInContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, user, setUser, handleLogOut, setCurrentUser, savedCards }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;

export const useLoggedIn = () => {
  const isLoggedIn = useContext(LoggedInContext);
  return isLoggedIn;
};
