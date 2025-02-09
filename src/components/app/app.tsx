import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddReview from '../../pages/AddReview/AddReview';
import MainPage from '../../pages/MainPage/MainPage';
import SignIn from '../../pages/SignIn/SignIn';
import MyList from '../../pages/MyList/MyList';
import MoviePage from '../../pages/MoviePage/MoviePage';
import Player from '../../pages/Player/Player';
import NotFound from '../../pages/NotFound/NotFound';
import { AuthorizationStatus } from '../../constants/const';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<SignIn />} />
        <Route
          path='/mylist'
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path='/films/:id' element={<MoviePage />} />
        <Route path='/films/:id/review' element={<AddReview />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
