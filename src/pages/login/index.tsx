import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { InputField } from '../../components/InputField';
import { LoginAlertDivStyled, LoginDivContainerStyled, LoginDivStyled, LinkToUserRegistrationDivStyled } from './styled';
import { Button } from '../../components/Button';

function Login() {
  // User data
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // Alerts
  const [alert, setAlert] = useState({
    alert: '',
  })

  const clearAlerts = () => {
    setAlert((previousData) => ({
      ...previousData,
      alert: '',
    }))
  };

  // Get user data array from localStorage if it exists
  const existingUser = JSON.parse(localStorage.getItem('userData') || '[]');
  const [userList, setUserList] = useState(existingUser);  

  useEffect(() => {
    setUserList(existingUser);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearAlerts();

    // Check if fields are being correctly filled
    if (!form.email && !form.password) {
      setAlert((previousData) => ({
        ...previousData,
        alert: 'Please, type your e-mail and password.'
      }));
    } else if (!form.email) {
      setAlert((previousData) => ({
        ...previousData,
        alert: 'Please, type your e-mail.'
      }));
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      setAlert((previousData) => ({
        ...previousData,
        alert: 'Please, type a valid e-mail.',
      }));
    } else if (!form.password) {
      setAlert((previousData) => ({
        ...previousData,
        alert: 'Please, type your password.'
      }));
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
      setAlert((previousData) => ({
        ...previousData,
        alert: 'Password must have at least 8 characters, including letters and numbers.',
      }));
    }
    // If the e-mail and password are correct, an "user" will be added to localstorage, allowing private routes access
    else if (userList.some((user: { email: string; password: string; }) => user.email === form.email && user.password === form.password)) {
      localStorage.setItem('user', JSON.stringify(form));
      location.href = '/pharmacyMap';
    } else {
      setAlert((previousData) => ({
        ...previousData,
        alert: 'E-mail and/or password incorrect.',
      }));
    }

    setTimeout(clearAlerts, 3500);

  };

  return (
    <>
      <LoginDivContainerStyled>
        <LoginDivStyled>
          <h2>Login</h2>
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
            <Button type='submit'>
              Login
            </Button>
          </form>
          <LoginAlertDivStyled>
            <p>{alert.alert}</p>
          </LoginAlertDivStyled>
          <LinkToUserRegistrationDivStyled>
            <Link to="/userRegistration" >Don't have an account? Click here.</Link>
          </LinkToUserRegistrationDivStyled>
        </LoginDivStyled>
      </LoginDivContainerStyled>
    </>
  );
}

export { Login };