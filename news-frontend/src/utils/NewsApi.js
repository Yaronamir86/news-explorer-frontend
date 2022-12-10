class NewsApi {
  constructor({ baseUrl, key }) {
    this.baseUrl = baseUrl;
    this.key = key;
    this.time = new Date();
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  _getLastWeek() {
    return new Date(
      this.time.getFullYear(),
      this.time.getMonth(),
      this.time.getDate() - 7
    );
  }

  getArticles(query) {
    const lastWeek = this._getLastWeek();
    return fetch(
      `${this.baseUrl}?q=${query}&from=${lastWeek}&to=${this.time}&pageSize=90&apiKey=${this.key}`
    ).then(this._checkResponse);
  }
}

const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
  key: "c5836cc8560b4a4893a609920efadb75",
});

export default newsApi;
