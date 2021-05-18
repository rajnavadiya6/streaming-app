import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { CircularProgress } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Header from "../Header";
import { ToastContainer, toast } from "react-toastify";

import { BASE_TMDB_IMAGE_URL, MOVIE_APIURL } from "../../store/Actions";

import "react-toastify/dist/ReactToastify.css";

const AllGridList = ({ data, SearchMovie }) => {
  return data.map((item) => (
    <Grid item xs={12} sm={12} md={2} key={item.id} onClick={() => SearchMovie(item.original_title)}>
      <img className="thum-img" src={`${BASE_TMDB_IMAGE_URL}${item.poster_path}`} alt={item.original_title} />
      <p className="title">{item.original_title ? item.original_title : item.original_name}</p>
    </Grid>
  ));
};

function Movies({ topRated_data, popular_data, treanding_Data }) {
  const history = useRouter();
  const [search, setsearch] = useState("");
  const [isloading, setisloading] = useState(false);

  const SearchMovie = (search) => {
    setisloading(true);
    axios
      .get(`${MOVIE_APIURL}/Search/${search}`)
      .then((respose) => {
        setisloading(false);
        if (respose.data[0]) {
          history.push(`/player?movieURl=${respose.data[0]}`, "player");
        }
      })
      .catch((error) => {
        toast.error(error.response?.data, {
          position: toast.POSITION.TOP_CENTER,
        });
        setisloading(false);
      });
  };

  return (
    <div>
      <Header SearchMovie={SearchMovie} search={search} setsearch={setsearch} />
      {isloading && (
        <div style={{ textAlign: "center" }}>
          <CircularProgress style={{ marginTop: "50px", color: "#38ef7d" }} size={50} thickness={5} />
        </div>
      )}

      {/* {movieURl && (
        <div style={{ textAlign: "center" }}>
          <h6 style={{ color: "#FFFFFF" }}>Link :- {movieURl}</h6>
        </div>
      )} */}
      <Grid container className="movie-grid">
        <AllGridList SearchMovie={SearchMovie} data={popular_data} />
        <AllGridList SearchMovie={SearchMovie} data={topRated_data} />
        <AllGridList SearchMovie={SearchMovie} data={treanding_Data} />
      </Grid>

      <ToastContainer />
    </div>
  );
}

export default Movies;
