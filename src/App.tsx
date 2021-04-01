import React, { useEffect } from "react";
import API from "./API";
import "./App.css";
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
  useEffect(() => {
    props.API.loadLaunches().then((r) => setLaunches(r));
  }, [props.API]);
  return (
    <div className="App">
      <h1 className={"header"}>Launches</h1>
      {launches.map((launch, index) => {
        return <Launch key={"launch" + index} launch={launch} />;
      })}
    </div>
  );
}

export default withAPI(App);
