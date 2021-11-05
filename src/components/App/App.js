import React from 'react';
import './App.css';
import {
  Route, Switch, Redirect, useHistory,
} from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Registration from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';

function App() {
  const [loginIn, setloginIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Вадим',
    email: 'hocice5682@ecofreon.com',
  });
  const log = true;
  const history = useHistory();

  const handleSignUp = (data) => {
    setCurrentUser({
      name: 'Имя',
      email: data.email,
    });
    setloginIn(true);
    history.push('/movies');
  };

  const handleSignOut = () => {
    setloginIn(false);
  };

  const handleSignIn = () => {
    setloginIn(true);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Main loggedIn={log}
          />
        </Route>
        <Route exact path="/movies">
          <Movies loggedIn={log} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies loggedIn={log} />
        </Route>
        <Route exact path="/signup">
          <Registration onLogIn={handleSignUp} />
        </Route>
        <Route exact path="/signin">
          <Login onLogIn={handleSignIn} />
        </Route>
        <Route exact path="/profile">
          <Profile loggedIn={log} currentUser={currentUser} onSignOut={handleSignOut} />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Route exact path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
