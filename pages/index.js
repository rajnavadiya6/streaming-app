import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { LiveTv, MusicVideo, Movie } from "@material-ui/icons";
import {
  fetch_Livetv_data,
  fetch_Popular_Movie,
  fetch_TopRated_Movie,
  fetch_Treanding_Movie,
  BASE_TMDB_IMAGE_URL,
  MOVIE_APIURL,
} from "../store/Actions";

import LiveTV from "../components/LiveTV/index";
import Movies from "../components/Movies/index";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(fetch_Livetv_data());
    dispatch(fetch_Popular_Movie());
    dispatch(fetch_TopRated_Movie());
    dispatch(fetch_Treanding_Movie());
  }, []);

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab style={{ color: "white" }} icon={<LiveTv />} label="Live TV" />
        <Tab style={{ color: "white" }} icon={<Movie />} label="Movies" />
        <Tab style={{ color: "white" }} icon={<MusicVideo />} label="Music" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LiveTV />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Movies BASE_TMDB_IMAGE_URL={BASE_TMDB_IMAGE_URL} API_url={MOVIE_APIURL} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Music
      </TabPanel>
    </div>
  );
}

export default App;
