import uuid from "uuid"


export default function manageBand(state = {
  bands: [],
}, action) {
  // console.log(action)
  switch(action.type) {
    case "ADD_BAND":

    const bandName = 
    { 
    id: uuid(),
    name: action.name
    }
    // debugger
      return {bands: state.bands.concat(bandName)}
    default:
      return state
  
  }
};
