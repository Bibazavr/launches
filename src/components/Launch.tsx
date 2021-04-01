import "./Launch.css";

import React from "react";

import { ILaunch } from "../types";

interface ILaunchProps {
  launch: ILaunch;
}
export const Launch = (props: ILaunchProps): React.ReactElement => {
  const launch = props.launch;
  return (
    <div className={"container"}>
      <img
        className={"img"}
        src={launch.links.mission_patch_small}
        alt={launch.mission_name}
      />
      <div className={"content"}>
        <div className={"header"}>
          <div>{launch.mission_name}</div>
          <div>{launch.launch_date_local}</div>
        </div>
        <div className={"details"}>{launch.details || launch.upcoming}</div>
      </div>
    </div>
  );
};
