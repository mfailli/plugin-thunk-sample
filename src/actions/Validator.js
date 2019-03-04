export function initiateValidation(number) {
  const cleanNumber = number.replace("+", "");
  const serviceURL = `https://harlequin-pademelon-1782.twil.io/verify?From=${encodeURIComponent(cleanNumber)}`;

  return dispatch => {
    fetch(serviceURL, { method: "POST" })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => {
        return response.json();
      })
      .then(json => {
        dispatch({ type: "SAVE_VALIDATION", payload: { success: json.success, attempted: true } });
      })
      .catch(err => {
        console.error(err);
      });
  };
}
