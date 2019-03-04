const defaultAppState = {
  isLoading: false,
  success: false,
  attempted: false,
  error: null
};

export function verify(state = defaultAppState, action) {
  switch (action.type) {
    case "VALIDATOR_IS_APPROVING":
      return { ...state, attempted: false, isLoading: true, success: false, error: null };
    case "VALIDATOR_SUCCESS":
      return { ...state, attempted: true, isLoading: false, success: action.payload };
    case "VALIDATOR_ERROR":
      return { ...state, attempted: true, isLoading: false, success: false, error: action.payload };
    default:
      return state;
  }
}
