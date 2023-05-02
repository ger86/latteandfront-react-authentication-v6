import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PrivateRoute from 'components/router/PrivateRoute';
import PublicRoute from 'components/router/PublicRoute';
import getUsers from 'config/router/loaders/getUsers';
import {LOGIN, LOGOUT, PRIVATE} from 'config/router/paths';
import AuthContextProvider from 'contexts/authContext';
import Home from 'views/Home';
import Login from 'views/Login';
import Logout from 'views/Logout';
import Private from 'views/Private';

const router = createBrowserRouter([
  {
    path: PRIVATE,
    element: <PrivateRoute />,
    children: [
      {
        index: true,
        loader: getUsers,
        element: <Private />
      },
      {
        path: LOGOUT,
        element: <Logout />
      }
    ]
  },
  {
    path: '/',
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: LOGIN,
        element: <Login />
      }
    ]
  }
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
