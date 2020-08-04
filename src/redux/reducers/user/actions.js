export const Action = {
  REQUIRED_AUTHORIZATION: `Required authorization`,
  ERROR_AUTHORIZATION: `Error authorization `,
  SET_USER_DATA: `Set user data`,
};

export const Creator = {
  requireAuthorization: (status) => ({
    type: Action.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  errorAuthorization: (code) => ({
    type: Action.ERROR_AUTHORIZATION,
    payload: code,
  }),

  setUserData: (userData) => ({
    type: Action.SET_USER_DATA,
    payload: userData,
  })
};