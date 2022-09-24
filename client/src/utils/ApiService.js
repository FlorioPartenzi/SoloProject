import { SEVRER_BASE_URL } from './utils';

export async function loginRequest(idToken) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { authToken: idToken },
    };

    const user = await (
      await fetch(`${SEVRER_BASE_URL}/login`, requestOptions)
    ).json();

    if (user.id) return user;
    return false;
  } catch (error) {
    console.log('ERROR in ApiService while fetching login request: ', error);
  }
}

export async function registerRequest(name, email, idToken) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { authToken: idToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email }),
    };
    const user = await (
      await fetch(`${SEVRER_BASE_URL}/register`, requestOptions)
    ).json();

    if (user.id) return user;
    return null;
  } catch (error) {
    console.log('ERROR in ApiService while fetching register request: ', error);
  }
}

export async function postNewLocation(
  title,
  description,
  housenumber,
  street,
  city,
  postcode,
  country,
  lon,
  lat,
  imgUrl,
  idToken
) {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { authToken: idToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        housenumber: housenumber,
        street: street,
        city: city,
        postcode: postcode,
        country: country,
        lon: lon,
        lat: lat,
        imgUrl: imgUrl,
      }),
    };
    const location = await (
      await fetch(`${SEVRER_BASE_URL}/newPlace`, requestOptions)
    ).json();

    if (location) return location;
    return null;
  } catch (error) {
    console.log('ERROR in ApiService while fetching post new Place: ', error);
  }
}

export async function getAllLocations(idToken) {
  try {
    const requestOptions = {
      method: 'GET',
      headers: { authToken: idToken },
    };
    const allLocations = await (
      await fetch(`${SEVRER_BASE_URL}/places`, requestOptions)
    ).json();
    if (allLocations) return allLocations;
    return null;
  } catch (error) {
    console.log(
      'ERROR in ApiService while fetching get all locations: ',
      error
    );
  }
}
