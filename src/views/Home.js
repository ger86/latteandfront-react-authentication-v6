import {Link} from 'react-router-dom';
import {LOGIN, PRIVATE} from 'config/router/paths';
import {useAuthContext} from 'contexts/authContext';

export default function Home() {
  const {isAuthenticated} = useAuthContext();
  return (
    <div>
      <h1>💛 Let's get the party started</h1>
      <p>
        {isAuthenticated ? (
          <Link to={PRIVATE}>Sección privada</Link>
        ) : (
          <Link to={LOGIN}>Iniciar sesión</Link>
        )}
      </p>
    </div>
  );
}
