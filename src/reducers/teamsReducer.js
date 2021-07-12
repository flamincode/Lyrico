export default function reducer(state={
  teams: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_TEAMS": {
      return {...state, fetching: true}
    }
    case "FETCH_TEAMS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_TEAMS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        teams: action.payload
      }
    }
    case "ADD_TEAM": {
      return {
        ...state,
        teams: [...state.teams, action.payload]
      }
    }
  }

}