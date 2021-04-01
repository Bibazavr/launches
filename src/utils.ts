import { ILaunch } from "./types";

export const getLaunchSites = (launches: ILaunch[]): string[] => {
  const launchSites: string[] = [];
  launches.forEach((launch) => {
    if (launchSites.includes(launch.launch_site.site_name)) {
      return;
    }
    launchSites.push(launch.launch_site.site_name);
  });
  return launchSites;
};

export const getRockets = (launches: ILaunch[]): string[] => {
  const rockets: string[] = [];
  launches.forEach((launch) => {
    if (rockets.includes(launch.rocket.rocket_name)) {
      return;
    }
    rockets.push(launch.rocket.rocket_name);
  });
  return rockets;
};
