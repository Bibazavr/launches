export interface BaseCallResult {
  status: number;
  error: null;
}

interface ICore {
  core_serial: string; // 'Merlin1A',
  flight: number; // 1,
  block: null;
  gridfins: boolean; // false,
  legs: false;
  reused: false;
  land_success: null;
  landing_intent: boolean; // false,
  landing_type: null;
  landing_vehicle: null;
}

interface IPayload {
  payload_id: string; // 'FalconSAT-2',
  norad_id: [];
  reused: false;
  customers: string[]; // ["DARPA"],
  nationality: string; // "United States",
  manufacturer: string; // "SSTL",
  payload_type: string; // "Satellite",
  payload_mass_kg: number; // 20,
  payload_mass_lbs: number; // 43,
  orbit: string; // "LEO",
  orbit_params: {
    reference_system: string; // "geocentric",
    regime: string; // "low-earth",
    longitude: null;
    semi_major_axis_km: null;
    eccentricity: null;
    periapsis_km: number; // 400,
    apoapsis_km: number; // 500,
    inclination_deg: number; // 39,
    period_min: null;
    lifespan_years: null;
    epoch: null;
    mean_motion: null;
    raan: null;
    arg_of_pericenter: null;
    mean_anomaly: null;
  };
}

interface ILinks {
  mission_patch: string; // "https://images2.imgbox.com/40/e3/GypSkayF_o.png";
  mission_patch_small: string; // "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png";
  reddit_campaign: null;
  reddit_launch: null;
  reddit_recovery: null;
  reddit_media: null;
  presskit: null;
  article_link: string; // "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html";
  wikipedia: string; // "https://en.wikipedia.org/wiki/DemoSat";
  video_link: string; // "https://www.youtube.com/watch?v=0a_00nJ_Y88";
  youtube_id: string; // "0a_00nJ_Y88";
  flickr_images: [];
}

export interface ILaunch {
  flight_number: number; // 1,
  mission_name: string; // 'FalconSat',
  mission_id: [];
  upcoming: boolean; // false,
  launch_year: string; // '2006',
  launch_date_unix: number; // 1143239400,
  launch_date_utc: string; // '2006-03-24T22:30:00.000Z',
  launch_date_local: string; // '2006-03-25T10:30:00+12:00',
  is_tentative: false;
  tentative_max_precision: string; // 'hour',
  tbd: boolean; // false;
  launch_window: number; // 0,
  rocket: {
    rocket_id: string; // 'falcon1',
    rocket_name: string; // 'Falcon 1',
    rocket_type: string; // 'Merlin A',
    first_stage: {
      cores: ICore[];
    };
    second_stage: {
      block: number; // 1;
      payloads: IPayload[];
    };
    fairings: {
      reused: boolean; // false;
      recovery_attempt: boolean; // false;
      recovered: boolean; // false;
      ship: null;
    };
  };
  ships: [];
  telemetry: { flight_club: null };
  launch_site: {
    site_id: string; // "kwajalein_atoll";
    site_name: string; // "Kwajalein Atoll";
    site_name_long: string; // "Kwajalein Atoll Omelek Island";
  };
  launch_success: boolean; // false;
  launch_failure_details: {
    time: number; // 33;
    altitude: null;
    reason: string; // "merlin engine failure";
  };
  links: ILinks;
  details: string; // "Engine failure at 33 seconds and loss of vehicle";
  static_fire_date_utc: string; // "2006-03-17T00:00:00.000Z";
  static_fire_date_unix: number; // 1142553600;
  timeline: {
    webcast_liftoff: number; // 54
  };
  crew: null;
}
