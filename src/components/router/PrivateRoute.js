import {Navigate, Outlet} from 'react-router-dom';
import {LOGIN} from 'config/router/paths';
import {useAuthContext} from 'contexts/authContext';

export default function PrivateRoute() {
  const {isAuthenticated} = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
