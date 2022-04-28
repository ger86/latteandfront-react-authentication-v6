import {useState} from 'react';
import {MAGIC_WORD} from 'consts/magicWord';
import {useAuthContext} from 'contexts/authContext';

function Login() {
  const {login} = useAuthContext();
  const [magicWord, setMagicWord] = useState('');

  function handleInputChange(event) {
    setMagicWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (magicWord === MAGIC_WORD) {
      login();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
