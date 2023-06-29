import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios"; // instance yalnew in axios
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";
// console.log(base_url);

function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState("");

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl); // fetchUrl malet instead of putting https:.... ke app.jsx yametanat nech
			// console.log(request.data.results);

			setMovies(request.data.results);
			return request;
		} 
		fetchData();
	}, [fetchUrl]);

	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.title || movie?.name || movie.original_name) // this movieTrailer returns a url
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search); // to separate
					setTrailerUrl(urlParams.get("v")); //video id malet new
				})
				.catch((error) => console.log(error));
		}
	};

	// console.log(movies);
	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row_posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row_poster ${isLargeRow && "row_posterLarge"}`} // take the first class name but when you find isLargeRow add the sec one
						src={`${base_url}${
							isLargeRow ? movie?.poster_path : movie?.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>

			<div style={{ padding: "40px" }}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	);
}

export default Row;
