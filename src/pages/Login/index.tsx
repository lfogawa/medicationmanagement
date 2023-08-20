import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { InputField } from '../../components/InputField';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [alerts, setAlerts] = useState({
    emailAlert: '',
    passwordAlert: '',
    emailPasswordAlert: '',
  })

  const clearAlerts = () => {
    setAlerts((previousData) => ({
      ...previousData,
      emailAlert: '',
      passwordAlert: '',
      emailPasswordAlert: '',
    }))
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearAlerts();

    if (!form.email && !form.password) {
      setAlerts((previousData) => ({
        ...previousData,
        emailPasswordAlert: 'Please, type your e-mail and password.'
      }));
    } else if (!form.email) {
      setAlerts((previousData) => ({
        ...previousData,
        emailAlert: 'Please, type your e-mail.'
      }));
    } else if (!form.password) {
      setAlerts((previousData) => ({
        ...previousData,
        passwordAlert: 'Please, type your password.'
      }));
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      setAlerts((previousData) => ({
        ...previousData,
        emailAlert: 'Please, type a valid e-mail.',
      }));
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
      setAlerts((previousData) => ({
        ...previousData,
        passwordAlert: 'Password must have at least 8 characters, including letters and numbers.',
      }));
    } else {
      navigate('/map');

      localStorage.setItem('user', JSON.stringify(form));
    }

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
            value={form.email}
            onChange={(value) => setForm({...form, email: value})}
            placeholder="Type your E-mail"
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={(value) => setForm({...form, password: value})}
            placeholder="Type your Password"
          />
          <button type='submit'>Login</button>
        </form>
      </div>
      <div>
        <p>{alerts.emailAlert}</p>
        <p>{alerts.passwordAlert}</p>
        <p>{alerts.emailPasswordAlert}</p>
      </div>
    </>
  );
}

export { Login };