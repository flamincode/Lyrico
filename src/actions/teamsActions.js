export function addTeam(id, name) {
  return {
    type: 'ADD_TEAM',
    payload: {
      id,
      name,
    }
  }
}