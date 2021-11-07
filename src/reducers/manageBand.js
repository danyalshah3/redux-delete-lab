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

      case "DELETE_BAND":
        // const filteredArray = state.bands.filter((band) => band.id !== action.id)
      // return {filteredArray};
      return {bands: state.bands.filter((band) => band.id !== action.id)}
    default:
      return state
  
  }
};
