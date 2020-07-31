export function fetchQuarterbacks() {
  return (dispatch) => {
    dispatch({ type: "START_LOADING_QUARTERBACKS_REQUEST" });
    fetch("http://127.0.0.1:8000/api/quarterback/")
      .then((resp) => resp.json())
      .then((quarterbacks) =>
        dispatch({ type: "LOAD_QUARTERBACKS", quarterbacks })
      );
  };
}
