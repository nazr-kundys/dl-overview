import type { Route } from "next";

export const routes = {
  home: "/" satisfies Route,
  characters: "/characters" satisfies Route,
  infected: "/infected" satisfies Route,
  locations: "/locations" satisfies Route,
  factions: "/factions" satisfies Route,
} as const;
