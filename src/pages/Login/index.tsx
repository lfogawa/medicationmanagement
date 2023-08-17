import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { InputField } from '../../components/InputField';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailAlert, setEmailAlert] = useState('');
  const [passwordAlert, setPasswordAlert] = useState('');
  const [emailPasswordAlert, setEmailPasswordAlert] = useState('');

  const clearAlerts = () => {
    setEmailAlert('');
    setPasswordAlert('');
    setEmailPasswordAlert('');
  };

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearAlerts();

    if (!email && !password) {
      setEmailPasswordAlert('Please, type your e-mail and password!');
    } else if (!email) {
      setEmailAlert('Please, type your e-mail!');
    } else if (!password) {
      setPasswordAlert('Please, type your password!');
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailAlert('Please, type a valid e-mail!');
    } else {
      navigate('/map');
    };

    setTimeout(clearAlerts, 3500);

  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="E-mail"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={setEmail}
            placeholder="Type your E-mail"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={setPassword}
            placeholder="Type your Password"
          />
          <button type='submit'>Login</button>
        </form>
      </div>
      <div>
        <p>{emailAlert}</p>
        <p>{passwordAlert}</p>
        <p>{emailPasswordAlert}</p>
      </div>
    </>
  );
}

export { Login };