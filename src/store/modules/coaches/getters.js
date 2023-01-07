export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    // returns a boolean value to represent whether there are coaches or not
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    // To check if the current user is a coach already, returns a boolean value
    const coaches = getters.coaches;
    const userId = rootGetters.userId;

    return coaches.some((coach) => coach.id === userId);
  },
};
