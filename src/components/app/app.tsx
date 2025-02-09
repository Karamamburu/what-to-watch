import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddReview from '../../pages/AddReview/AddReview';
import MainPage from '../../pages/MainPage/MainPage';
import HeadGuest from '../../pages/HeadGuest/HeadGuest';
import MoviePage from '../../pages/MoviePage/MoviePage';
import MoviePageDetails from '../../pages/MoviePageDetails/MoviePageDetails';
import MoviePageInList from '../../pages/MoviePageInList/MoviePageInList';
import MoviePageReviews from '../../pages/MoviePageReviews/MoviePageReviews';
import MyList from '../../pages/MyList/MyList';
import NotFound from '../../pages/NotFound/NotFound';
import Player from '../../pages/Player/Player';
import PlayerPause from '../../pages/PlayerPause/PlayerPause';
import SignIn from '../../pages/SignIn/SignIn';
import SignInError from '../../pages/SignInError/SignInError';
import SignInMessage from '../../pages/SignInMessage/SignInMessage';

function App(): JSX.Element {
  return (
    <MainPage />
  );
}

export default App;
