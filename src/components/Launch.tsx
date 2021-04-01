import "./Launch.css";

import React from "react";
import dayjs from "dayjs";
import Typography from "@material-ui/core/Typography";

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
          <Typography variant={"h5"} color={"textPrimary"}>
            {launch.mission_name}
          </Typography>
          <Typography color={"textSecondary"}>
            {dayjs(launch.launch_date_local).format("DD.MM.YYYY")}
          </Typography>
        </div>
        <Typography className={"details"}>
          {launch.details || "upcoming"}
        </Typography>
      </div>
    </div>
  );
};
