import newsApi from "../utils/NewsApi";

const { createContext, useContext, useState } = require("react");

const ArticlesContext = createContext();


const ArticleContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [toShowMore, setToShowMore] = useState(3);

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

  const getCardsByKeyWord = (query) => {
    handleIsLoading();
    newsApi.getArticles(query)
    .then((res) => {
      if (res.articles) {
        setCards(res.articles);
        setKeyword(query);
      } else {
        handleNotFound();
      }
    })
    .catch((err) => console.log(err))
      .finally(()=> {
      handleRemoveIsLoading()
  })
  };

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
        setToShowMore
      }}
    >
      {children}
    </ArticlesContext.Provider>
  );
};

export default ArticleContextProvider;

export const useArticles = () => {
  const cards = useContext(ArticlesContext);

  return cards;
};
