export const createProject = (project) => (dispatch, getState, {
 getFirebase,
 getFirestore
}) => {

 //make async call

 const firestore = getFirestore();
 firestore.collection('projects').add({
  ...project,
  authorFirstName: 'Belaifa',
  authorLastName: 'El Hussein',
  authorId: 12345,
  createdAt: new Date()

 }).then(() => {

  return dispatch({
   type: 'ADD_PROJECT',
   project: project
  });

 }).catch(err => {

  return dispatch({
   type: 'ADD_PROJECT_ERROR',
   err: err
  });


 });

}