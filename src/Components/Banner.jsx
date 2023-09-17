import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "../requests";
import axios from "../axios";
function Banner() {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request?.data.results[
					Math.floor(Math.random() * request.data.results.length) // it's the index num 20 times by randome num
				]
			);
			return request;
		}
		fetchData(); 
	}, []);
	// console.log(movie);

	function turncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	return (
		<>
			<header
				className="banner"
				style={{
					backgroundSize: "cover",
					backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
					backgroundPosition: "center center",
				}}
			>
				<div className="banner__contents">
					<h2 className="banner__title">
						{movie?.title || movie?.name || movie.original_name}
						
					</h2>
					<div className="banner__buttons">
						<button className="banner__button">Play</button>
						<button className="banner__button">My List</button>
					</div>
					<h1 className="banner__description">
						{turncate(movie?.overview, 150)}
					</h1>
				</div>
				<div className="banner__fadeBottom"></div>
			</header>
		</>
	);
}

export default Banner;
