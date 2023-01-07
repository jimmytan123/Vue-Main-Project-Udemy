export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId;
    // Only show the request for the current user
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
