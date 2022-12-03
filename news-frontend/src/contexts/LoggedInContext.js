import { useContext, useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import mainApi from "../utils/MainApi";
import { useUser } from "./UserContext"

const LoggedInContext = createContext();

const LoggedInContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [values, setValues] = useState({});
  const [loggedinError, setLoggedInError] = useState('');
  const { setCurrentUser } = useUser();
  const history = useHistory();

  ////////////////////////INITIAL-USE-EFFECT/////////////////////


  useEffect(() => {
    const checkToken = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      mainApi
        .getUsersInfo(token)
        .then((res) => {
          if (res._id) {
            setIsLoggedIn(true);
            setCurrentUser(res);
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  checkToken();
  },[ history, token, setCurrentUser ]);
  console.log(isLoggedIn, token);

  //////////////////////////////REGISTER-HANDLINGS////////////////

  function handleRegister({name, email, password}) {
    if (!email || !password || !name) {
      return;
    }
    setLoggedInError('');
    mainApi
      .register({name, email, password})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.code === 409) {
          setLoggedInError('this user is already registered')
        }
        else {
          setLoggedInError('something went wrong');
        }
      });
  };

  //////////////////////////////LOGING-HANDLINGS////////////////

  function handleLogin({email, password}) {
    if (!email || !password) {
      return;
    }
    setLoggedInError('');
    mainApi
      .login({email, password})
      .then((res) => {
        if (res.token) {
          setValues(res);
          setCurrentUser(res.data);
          setIsLoggedIn(true);
          setToken(res.token);
          console.log(res.token);
          localStorage.setItem("jwt", res.token);
          history.push("/");
        }
      })
      .catch((err) => {
        setLoggedInError('incorrect email or password')
      });
  };

  

  const handleLogOut = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn)
    setValues({});
    setSavedCards([]);
    localStorage.removeItem('token');
    history.push("/");
  };

  return (
    <LoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        values,
        setValues,
        handleLogOut,
        setCurrentUser,
        savedCards,
        handleRegister,
        handleLogin,
        token,
        setToken,
        loggedinError,
        setLoggedInError,
      }}
    >
      {children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;

 const useLoggedIn = () => {
  const context = useContext(LoggedInContext);
  return context;
};

export { useLoggedIn };