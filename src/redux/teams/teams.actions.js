import { NAMEONE, NAMETWO } from "./teams.types";

export const nameTeamOne = (name) => {
  return {
    type: NAMEONE,
    nameOne: name
  };
};

export const nameTeamTwo = (name) => {
  return {
    type: NAMETWO,
    nameTwo: name
  };
};
