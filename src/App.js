import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateRoute from 'components/router/PrivateRoute';
import PublicRoute from 'components/router/PublicRoute';
import {LOGIN, LOGOUT, PRIVATE} from 'config/router/paths';
import AuthContextProvider from 'contexts/authContext';
import Home from 'views/Home';
import Login from 'views/Login';
import Logout from 'views/Logout';
import Private from 'views/Private';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route index element={<Private />} />
            <Route path={LOGOUT} element={<Logout />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
