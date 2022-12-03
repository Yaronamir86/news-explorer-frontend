import newsApi from "../utils/NewsApi";
import mainApi from "../utils/MainApi";
import { useLoggedIn } from "./LoggedInContext";

const { createContext, useContext, useState, useEffect } = require("react");
const ArticlesContext = createContext();

const ArticleContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [toShowMore, setToShowMore] = useState(3);
  const [isSaveCards, setIsSaveCards] = useState([]);

  const { token, isLoggedIn } = useLoggedIn();

  //////////////////////////////////INITIALL-USE-EFFECTS/////////////////////

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!isLoggedIn) {
      setIsSaveCards([]);
      //console.log(token)
      return;
    } 
    mainApi.getSavedArticles(token)
    .then((res) => {
      setIsSaveCards(res);
      console.log(res)
    });
  }, [isLoggedIn, token]);

 // useEffect(() => {
 //   const token = localStorage.getItem("jwt");
 //   console.log(token)
 //   if (token) {
//      mainApi
  //      .getSavedArticles(token)
 //       .then((res) => {
 //         setIsSaveCards(res);
 //         console.log(res)
 //       })
 //       .catch((err) => console.log(err));
 //   } else {
 //     setIsSaveCards([]);
 //   }
//  }, [token]);

  /////////////////////////SAVING ARTICLE/////////////////////////////////////

  const handleSaveCard = (article) => {
    const token = localStorage.getItem("jwt");
    const isSaveCard = checkIfIsSaveCard(article, token);
    if (!isSaveCard) {
      console.log(token)
      mainApi
        .saveArticle(article, token)
        .then((res) => {
          console.log(isSaveCards)
          setIsSaveCards([...isSaveCards, res]);
          console.log('saved!');
        })
        .catch((err) => console.log(err));
    } 
  };

  const checkIfIsSaveCard = (article) => {
    isSaveCards.find((a) => a.link === article.url);
  };


  ///////////////////ARTICLE-SEARCH-BY-KEYWORD(NEWS-API)/////////////////////////////
  const getCardsByKeyWord = (query) => {
    handleIsLoading();
    newsApi
      .getArticles(query)
      .then((res) => {
        if (res.articles) {
          setCards(res.articles);
          setKeyword(query);
        } else {
          handleNotFound();
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        handleRemoveIsLoading();
      });
  };

  ////////////////////////////////DELETE-ARTICLE////////////////////////////////

  const handleDeleteCard = (article) => {
    mainApi
      .deleteArticle(article._id)
      .then((res) => {
        const newIsSavecard = isSaveCards.filter(
          (isSaveCard) => newIsSavecard.id !== article._id
        );
        setIsSaveCards(newIsSavecard);
      })
      .catch((err) => console.log(err));
  };


  //////////////////////////DIFFERENT-HANDLERS//////////////////////////

  const handleNotFound = () => {
    setNotFound(true);
    setCards([]);
  };

  const handleIsLoading = () => {
    setIsLoading(true);
    setNotFound(false);
    setCards([]);
  };
  const handleRemoveIsLoading = () => setIsLoading(false);

 

  return (
    <ArticlesContext.Provider
      value={{
        cards,
        setCards,
        getCardsByKeyWord,
        keyword,
        setKeyword,
        notFound,
        setNotFound,
        isLoading,
        setIsLoading,
        toShowMore,
        setToShowMore,
        handleSaveCard,
        handleDeleteCard,
        isSaveCards,
        setIsSaveCards,
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticleContextProvider;

export const useArticles = () => {
  const articles = useContext(ArticlesContext);

  return articles;
};
