import "./App.css";

import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Typography from "@material-ui/core/Typography";

import API from "./API";
import { withAPI } from "./hoc/withAPI";
import { Launch } from "./components/Launch";
import { ILaunch } from "./types";

interface AppProps {
  API: typeof API;
}

/**
 * Main App
 * @param {AppProps} props
 * @return {React.ReactElement}
 */
function App(props: AppProps): React.ReactElement {
  const [launches, setLaunches] = React.useState<ILaunch[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  useEffect(() => {
    props.API.loadLaunches().then((r) => {
      setLaunches(r);
      setLoading(false);
    });
  }, [props.API]);
  return (
    <div className="App">
      <Typography className={"header"} variant={"h2"}>
        Launches
      </Typography>
      <div className={"loader"}>{loading && <CircularProgress />}</div>
      {launches.map((launch, index) => {
        return <Launch key={"launch" + index} launch={launch} />;
      })}
    </div>
  );
}

export default withAPI(App);
