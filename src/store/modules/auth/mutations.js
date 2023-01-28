export default {
  setUser(state, payload) {
    // Update the Auth state
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
