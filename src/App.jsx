import { useState } from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<div className="App">
				<Nav />
				<Banner />
				<Row
					title="NETFLIX ORIGINALS"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
				<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
				<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
				<Row title="Comedy Movies" fetchUrl={requests.findComedyMovies} />
				<Row title="AdventureMovies" fetchUrl={requests.findAdventureMovies} />
				<Row title="Romance Movies" fetchUrl={requests.findRomanceMovies} />
				<Row
					title="Documentaries Movies"
					fetchUrl={requests.fetchDocumentaries}
				/>
				<Footer />
			</div>
		</>
	);
}

export default App;
