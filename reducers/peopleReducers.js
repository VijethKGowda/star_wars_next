export const peopleReducers = (state, action) => {
  switch (action.type) {
    case "ADD_PEOPLE":
      return { ...state, people: action.payload }
    case "ADD_NEXT_PAGE":
      return { ...state, next_page: action.payload }
    default:
      break;
  }
}