export const createProject = (project) => (dispatch, getState, {
 getFirebase,
 getFirestore
}) => {

 //make async call



 return dispatch({
  type: 'ADD_PROJECT',
  project: project
 });

}