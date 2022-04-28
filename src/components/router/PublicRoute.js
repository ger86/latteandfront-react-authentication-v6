import {Navigate, Outlet} from 'react-router-dom';
import {PRIVATE} from 'config/router/paths';
import {useAuthContext} from 'contexts/authContext';

export default function PublicRoute() {
  const {isAuthenticated} = useAuthContext();

  if (isAuthenticated) {
    return <Navigate to={PRIVATE} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
