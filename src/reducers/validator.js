const defaultAppState = {
  success: false,
  attempted: false
};

export function verify(state = defaultAppState, action) {
  switch (action.type) {
    case "SAVE_VALIDATION":
      console.log({ ...state, ...action.payload });
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
