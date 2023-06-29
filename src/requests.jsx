const API_KEY = "c22fa93f652cfa3e2d1d0bfa09da5258";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	findComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	findAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
	findRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
