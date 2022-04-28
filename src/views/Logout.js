import {useEffect} from 'react';
import {useAuthContext} from 'contexts/authContext';

function Logout() {
  const {logout} = useAuthContext();
  useEffect(() => logout());
  return null;
}

export default Logout;
