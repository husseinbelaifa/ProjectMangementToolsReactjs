import {
 auth
} from "firebase";

export const createProject = (project) => (dispatch, getState, {
 getFirebase,
 getFirestore
}) => {

 //make async call


 const firestore = getFirestore();
 const profile = getState().firebase.profile;
 const authorId = getState().firebase.auth.uid;

 firestore.collection('projects').add({
  ...project,
  authorFirstName: profile.firstName,
  authorLastName: profile.lastName,
  authorId: authorId,
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