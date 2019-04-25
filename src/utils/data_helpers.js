export const API_BASE = "http://history.muffinlabs.com/date/01/01"
// export const API_BASE = "https://api.github.com/users/misterrodger?access_token=72f21f76c68988867e1df798d69bc1ff2cf9dee5"

const checkResponse = response => {
  if (response.status !== 200) {
    console.log((`Error with the request ${response.status}`));
    return;
  }
  return response.json();
  // return response;
}

export const getData = url => {
  return fetch(`http://history.muffinlabs.com/date/01/01`)
  // return fetch(`https://api.github.com/users/misterrodger?access_token=72f21f76c68988867e1df798d69bc1ff2cf9dee5`)
  .then(checkResponse)
  .catch(err => {
    throw new Error (`fetch getUserData failed ${err}`);
  })
}
