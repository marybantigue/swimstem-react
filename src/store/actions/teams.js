import { addTeam } from '../../services/api';
// import { addError } from "./errors";
import { LOAD_TEAMS, REMOVE_TEAM } from '../actionTypes';

export const loadTeams = teams => ({
  type: LOAD_TEAMS,
  teams
});

export const remove = id => ({
  type: REMOVE_TEAM,
  id
});

// export const removeTeam = (user_id, team_id) => {
//   return dispatch => {
//     return apiCall("delete", `/api/users/${user_id}/teams/${team_id}`)
//       .then(() => dispatch(remove(team_id)))
//       // .catch(err => {
//       //   addError(err.team);
//       // });
//   };
// };

// export const fetchTeams = () => {
//   return dispatch => {
//     return apiCall("GET", "/api/teams")
//       .then(res => {
//         dispatch(loadTeams(res));
//       })
//       // .catch(err => {
//       //   dispatch(addError(err.team));
//       // });
//   };
// };

export const postNewTeam = team => {
  // let { currentUser } = getState();
  // const id = currentUser.user.id;
  console.log('posting new team');
  return addTeam(team);
  // .then(res => console.log(res))
  // .catch(err => {
  //   console.log(err);
  // });
};

// export const
