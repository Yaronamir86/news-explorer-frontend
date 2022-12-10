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
      return;
    }
    mainApi
      .getSavedArticles(token)
      .then((res) => {
        setIsSaveCards(res);
      })
      .catch((err) => console.log(err));
  }, [isLoggedIn, token]);

  /////////////////////////SAVING ARTICLE/////////////////////////////////////

  const handleSaveCard = (article) => {
    const token = localStorage.getItem("jwt");
    const savedCard = checkIfSave(article);
    if (!savedCard) {
      mainApi
        .saveArticle(article, token)
        .then((res) => {
          setIsSaveCards([...isSaveCards, res]);
          console.log("saved!");
        })
        .catch((err) => console.log(err));
    } else {
      handleDeleteCard(savedCard._id);
      console.log("deleted!");
    }
  };

  const checkIfSave = (article) =>
    isSaveCards.find((a) => a.link === article.link);

  ///////////////////ARTICLE-SEARCH-BY-KEYWORD(NEWS-API)/////////////////////////////
  const getCardsByKeyWord = (query) => {
    handleIsLoading();
    newsApi
      .getArticles(query)
      .then((res) => {
        if (res.articles.length > 0) {
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

  const handleDeleteCard = (articleId) => {
    const token = localStorage.getItem("jwt");
    mainApi
      .deleteArticle(articleId, token)
      .then((res) => {
        const newIsSaveCard = isSaveCards.filter(
          (isSaveCard) => isSaveCard._id !== articleId
        );
        setIsSaveCards(newIsSaveCard);
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
