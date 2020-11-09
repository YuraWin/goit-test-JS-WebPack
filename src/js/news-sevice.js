export default class NewsApiService{
    constructor()
    { this.searchQuery = ''; }

    fetchArticles(searchQuery) {
    const options = {
        headers: {
            ['X-Api-Key']: "5fdf360460fb4a5cbc09014c3a1d10aa"
        }
    };

    const url = `http://newsapi.org/v2/everything?q=${this.searchQuery}&pageSize=5&page=1`;
    
    fetch(url, options)
        .then(r => r.json())
        .then(console.log);
    };

    get query() {
        return this.searchQuery;
    };
    set query(newQuery) {
        this.searchQuery = newQuery;
    };
}