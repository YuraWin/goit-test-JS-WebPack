const API_KEY = "5fdf360460fb4a5cbc09014c3a1d10aa";
const BASE_URL = 'http://newsapi.org/v2';
const options = {
    headers: {
        ['X-Api-Key']: API_KEY,
    }
};
        
export default class NewsApiService{
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        const url = `${BASE_URL}/everything?q=${this.searchQuery}&pageSize=5&page=${this.page}`;
    
        return fetch(url, options)
            .then(response => response.json())
            .then(({articles}) => {
                this.incrementPage();
                return articles;
            });    
    };

    incrementPage() {
         this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searchQuery;
    };
    set query(newQuery) {
        this.searchQuery = newQuery;
    };
}