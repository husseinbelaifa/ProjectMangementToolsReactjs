export const createProject = (project) => (dispatch) => {

 //make async call
 return dispatch({
  type: 'ADD_PROJECT',
  project: project
 });

}