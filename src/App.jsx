import { useState } from 'react';

function App() {
  const [passord, setPassord] = useState('');
  const [TheRequest, setTheRequest] = useState(false);

  function generatePassword() {
    if (TheRequest) {
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let password = '';
      for (let i = 0; i < 26; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
        setPassord(password);
      }
      console.log(password);
      return password;
    } else {
      alert('нажмите  на  чек');
    }
  }

  return (
    <div>
      <span>{passord}</span>
      <input type='checkbox' name='' id='' onChange={() => setTheRequest(!TheRequest)} checked={TheRequest} />
      <button
        onClick={() => {
          generatePassword();
        }}
      >
        {' '}
        генерация ключа рандом{' '}
      </button>
    </div>
  );
}

export default App;
