export const createProject = (project) => (dispatch, getState) => {

 //make async call
 return dispatch({
  type: 'ADD_PROJECT',
  project: project
 });

}