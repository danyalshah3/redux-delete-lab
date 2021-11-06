import uuid from "uuid"


export default function manageBand(state = {
  bands: [],
}, action) {
//  console.log(action.name)
  switch(action.type) {
    case "ADD_BAND":

 const bandName =  { id: uuid(), name: action.name }
    // debugger
      return {...state, bands: [...state.bands, bandName]}
    default:
      return state
  
  }
};
