const INIT_STATE = {
  projects: [{
      id: '1',
      title: 'help me find peach',
      content: 'blah blah blah'
    },
    {
      id: '2',
      title: 'collect all the stars',
      content: 'blah blah blah'
    },
    {
      id: '3',
      title: 'egg hunt with yoshi',
      content: 'blah blah blah'
    }
  ]
};
const projectReducer = (state = INIT_STATE, action) => {

  switch (action.type) {
    case 'ADD_PROJECT': {

      console.log('created project', action.project);

      return state;

    }
    case 'ADD_PROJECT_ERROR': {
      console.log('created project error ', action.err);
      return state;
    }


    default:
      return state;
  }


}

export default projectReducer;