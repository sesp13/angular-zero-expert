export interface DirectionsResponse {
  routes:    Route[];
  waypoints: Waypoint[];
  code:      string;
  uuid:      string;
}

export interface Route {
  weight_name: string;
  weight:      number;
  duration:    number;
  distance:    number;
  legs:        Leg[];
  geometry:    Geometry;
}

export interface Geometry {
  coordinates: Array<number[]>;
  type:        string;
}

export interface Leg {
  via_waypoints: any[];
  admins:        Admin[];
  weight:        number;
  duration:      number;
  steps:         Step[];
  distance:      number;
  summary:       string;
}

export interface Admin {
  iso_3166_1_alpha3: string;
  iso_3166_1:        string;
}

export interface Step {
  intersections: Intersection[];
  maneuver:      Maneuver;
  name:          string;
  duration:      number;
  distance:      number;
  driving_side:  string;
  weight:        number;
  mode:          string;
  geometry:      Geometry;
}

export interface Intersection {
  bearings:           number[];
  entry:              boolean[];
  mapbox_streets_v8?: MapboxStreetsV8;
  is_urban?:          boolean;
  admin_index:        number;
  out?:               number;
  geometry_index:     number;
  location:           number[];
  weight?:            number;
  traffic_signal?:    boolean;
  turn_duration?:     number;
  turn_weight?:       number;
  duration?:          number;
  in?:                number;
}

export interface MapboxStreetsV8 {
  class: Class;
}

export enum Class {
  Primary = "primary",
  Secondary = "secondary",
  Street = "street",
}

export interface Maneuver {
  type:           string;
  instruction:    string;
  bearing_after:  number;
  bearing_before: number;
  location:       number[];
  modifier?:      string;
}

export interface Waypoint {
  distance: number;
  name:     string;
  location: number[];
}
