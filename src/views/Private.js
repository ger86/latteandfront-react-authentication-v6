import {Link, useLoaderData} from 'react-router-dom';
import {LOGOUT} from 'config/router/paths';

function Private() {
  const loader = useLoaderData();
  console.log(loader);
  return (
    <div>
      Mi ruta privada
      <Link to={LOGOUT}>Cerrar sesión</Link>
    </div>
  );
}

export default Private;
