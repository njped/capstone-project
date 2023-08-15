function getToken() {
  // retrieve user token
  return localStorage.getItem('id_token');
}

function setToken(idToken) {
  localStorage.setItem('id_token', idToken);

}

export {getToken, setToken}