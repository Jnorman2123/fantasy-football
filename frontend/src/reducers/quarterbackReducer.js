export default function quarterbackReducer(
  state = { quarterbacks: [], requesting: false },
  action
) {
  switch (action.type) {
    case "START_LOADING_QUARTERBACKS_REQUEST":
      return {
        ...state,
        quarterbacks: [...state.quarterbacks],
        requesting: true,
      };
    case "LOAD_QUARTERBACKS":
      return {
        ...state,
        quarterbacks: action.quarterbacks,
        requesting: false,
      };
    default:
      return state;
  }
}
