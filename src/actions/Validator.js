export const validatorIsApproving = () => {
  return {
    type: "VALIDATOR_IS_APPROVING"
  };
};

export const validatorSuccess = bool => {
  return {
    type: "VALIDATOR_SUCCESS",
    payload: {
      success: bool
    }
  };
};

export const validatorError = error => {
  return {
    type: "VALIDATOR_ERROR",
    payload: error
  };
};

export function validatorFetch(number) {
  // randomly returns true or false with a small delay.  Also, if false, includes error message
  const serviceURL = "https://copper-pekingese-7544.twil.io/random-bool";

  return dispatch => {
    try {
      dispatch(validatorIsApproving());

      fetch(serviceURL) //, { method: "POST" }
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
          if (json.success) {
            dispatch(validatorSuccess(json.success));
          } else {
            dispatch(validatorError(json.message));
          }
        })
        .catch(err => {
          console.error(err);
          dispatch(validatorError(err.message));
        });
    } catch (error) {
      console.log(error);
    }
  };
}
