class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (res.ok) return res.json();
    return Promise.reject(res.status);
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }).then((res) => this._getResponseData(res))
      .then((data) => {
        localStorage.setItem('token', data.token);
        return data;
      });
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._getResponseData(res));
  }

  updateUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(data),
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => this._getResponseData(res));
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => this._getResponseData(res));
  }

  likeMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(movie),
    })
      .then((res) => this._getResponseData(res));
  }

  dislikeMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => this._getResponseData(res));
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://norlip.movie.nomoredomains.monster',

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default mainApi;
