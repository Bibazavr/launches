import "./App.css";

import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Typography from "@material-ui/core/Typography";

import API from "./API";
import { withAPI } from "./hoc/withAPI";
import { Launch } from "./components/Launch";
import { ILaunch } from "./types";
import { getLaunchSites, getRockets } from "./utils";
import { Selector } from "./components/Selector";

interface AppProps {
  API: typeof API;
}

/**
 * Main App
 * @param {AppProps} props
 * @return {React.ReactElement}
 */
function App(props: AppProps): React.ReactElement {
  const [loading, setLoading] = React.useState<boolean>(true);

  const [launches, setLaunches] = React.useState<ILaunch[]>([]);
  const [filteredLaunches, setFilteredLaunches] = React.useState<ILaunch[]>([]);
  const [launchSites, setLaunchSites] = React.useState<string[]>([]);
  const [rockets, setRockets] = React.useState<string[]>([]);

  const [site, setSite] = React.useState<string>("");
  const [rocket, setRocket] = React.useState<string>("");

  useEffect(() => {
    props.API.loadLaunches().then((r) => {
      setLaunches(r);
      setFilteredLaunches(r);
      setLaunchSites(getLaunchSites(r));
      setRockets(getRockets(r));
      setLoading(false);
    });
  }, [props.API]);

  useEffect(() => {
    let newFilterLaunches = launches;
    if (rocket) {
      newFilterLaunches = launches.filter(
        (launch) => launch.rocket.rocket_name === rocket
      );
    }

    if (site) {
      newFilterLaunches = launches.filter(
        (launch) => launch.launch_site.site_name === site
      );
    }
    setFilteredLaunches(newFilterLaunches);
  }, [site, rocket]);
  return (
    <div className="App">
      <Typography className={"header"} variant={"h2"}>
        Launches
      </Typography>
      <div className={"selectors"}>
        <Selector
          label={"Launch Site"}
          value={site}
          values={launchSites}
          onChange={setSite}
        />
        <Selector
          label={"Rocket"}
          value={rocket}
          values={rockets}
          onChange={setRocket}
        />
      </div>
      {loading && (
        <div className={"loader"}>
          <CircularProgress />
        </div>
      )}
      {filteredLaunches.map((launch, index) => {
        return <Launch key={"launch" + index} launch={launch} />;
      })}
    </div>
  );
}

export default withAPI(App);
