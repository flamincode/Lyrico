import { NAMEONE, NAMETWO } from "./teams.types";

const INITIAL_STATE = {
  nameOne: '',
  nameTwo: ''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAMEONE:
      return {
        ...state, nameOne: action.nameOne,
      };
    
    case NAMETWO:
      return {
        ...state, nameTwo: action.nameOne,
      };
    default: return state;
  }
};

export default reducer;
