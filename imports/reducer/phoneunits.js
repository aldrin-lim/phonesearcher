

export default (state = [], action) => {
  switch(action.type){
    case 'SET_PHONEUNITS':
      return state.concat(action.payload);
    default: 
      return state;
  }
};