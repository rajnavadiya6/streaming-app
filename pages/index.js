import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { LiveTv, MusicVideo, Movie } from "@material-ui/icons";
import {
  fetch_Livetv_data,
  fetch_Popular_Movie,
  fetch_TopRated_Movie,
  fetch_Treanding_Movie,
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

function App({ liveTvData, popular_data, topRated_data, treanding_Data }) {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab style={{ color: "white" }} icon={<LiveTv />} label="Live TV" />
        <Tab style={{ color: "white" }} icon={<Movie />} label="Movies" />
        <Tab style={{ color: "white" }} icon={<MusicVideo />} label="Music" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <LiveTV liveTvData={liveTvData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Movies popular_data={popular_data} topRated_data={topRated_data} treanding_Data={treanding_Data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Music
      </TabPanel>
    </div>
  );
}

export async function getStaticProps() {
  const liveTvData = await fetch_Livetv_data()
  const popular_data = await fetch_Popular_Movie();
  const topRated_data = await fetch_TopRated_Movie();
  const treanding_Data = await fetch_Treanding_Movie();
  return {
    props: {
      liveTvData, popular_data, topRated_data, treanding_Data
    },
  }
}

export default App;
