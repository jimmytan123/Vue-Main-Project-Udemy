export default {
  async login(context, payload) {
    // API Docs https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClpNQfc6yi6e1fdMcpEP9QJ1ZpRDAYTNM',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);

      const error = new Error(
        responseData.message || 'Failed to authenticate.'
      );

      throw error;
    }

    console.log('responseData: ', responseData);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  async signup(context, payload) {
    // API Docs https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClpNQfc6yi6e1fdMcpEP9QJ1ZpRDAYTNM',
      {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData);

      const error = new Error(
        responseData.message || 'Failed to authenticate.'
      );

      throw error;
    }

    /*
    idToken	string	A Firebase Auth ID token for the newly created user.
    email	string	The email for the newly created user.
    refreshToken	string	A Firebase Auth refresh token for the newly created user.
    expiresIn	string	The number of seconds in which the ID token expires.
    localId	string	The uid of the newly created user.
    */
    console.log('responseData: ', responseData);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
  logout(context) {
    // No need to send http request for logout since the server does not store any login info
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },
};
