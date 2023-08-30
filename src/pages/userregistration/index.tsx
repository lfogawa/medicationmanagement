import { useState } from "react";
import { InputField } from "../../components/InputField";
import { LinkToLoginDivStyled, UserRegistrationAlertDivStyled, UserRegistrationDivContainerStyled, UserRegistrationDivStyled } from "./styled";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

function UserRegistration(){
  const [form, setForm] = useState({
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const [alerts, setAlerts] = useState({
    alert: '',
    success: false
  });
  
  const clearAlerts = () => {
    setAlerts((previousData) => ({
      ...previousData,
      alert: '',
      success: false
    }))
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    clearAlerts();

    if (!form.login ||
      !form.password ||
      !form.confirmPassword ||
      !form.email) {
        setAlerts((previousData) => ({
          ...previousData,
          alert: 'Please fill in all required fields.'
        }));   
      }
      else if (
        form.password !== form.confirmPassword
      ) {
      setAlerts((previousData) => ({
        ...previousData,
        alert: 'Passwords does not match.'
      }));
      return;
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      setAlerts((previousData) => ({
        ...previousData,
        alert: 'Please, type a valid e-mail.',
      }));
      return;
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
      setAlerts((previousData) => ({
        ...previousData,
        alert: 'Password must have at least 8 characters, including letters and numbers.',
      }));
      return;
    }
    else {
      try {
        const newUser = {
          login: form.login,
          password: form.password,
          email: form.email
        };

        // Get existing user data array from localStorage
        const existingUser = JSON.parse(localStorage.getItem('userData') || '[]');

        // Check if the new user data is already registered
        const isUserAlreadyRegistered = existingUser.some(
          (user: any) =>
            user.login === newUser.login ||
            user.email === newUser.email
        );

        if (isUserAlreadyRegistered) {
          // Show alert if user data is already registered
          setAlerts((previousData) => ({
            ...previousData,
            alert: 'Login or e-mail already registered.',
          }))
        } else {
          // Update localStorage with the updated array (appending new data)
          localStorage.setItem('userData', JSON.stringify([...existingUser, newUser]));

          // Show success alert
          setAlerts((previousData) => ({
            ...previousData,
            alert: 'Registration successfull.',
            success: true
          }))

          // Reset form
          setForm({
            login: '',
            password: '',
            confirmPassword: '',
            email: ''
          })
        }
        setTimeout(() => clearAlerts(), 3500);
        return;
      } catch (error) {
        console.error("Error during registration:", error);
        setAlerts((previousData) => ({
          ...previousData,
          alert: 'Registration failure.',
        }))
        return;
      }
    }

    setTimeout(() => clearAlerts(), 3500);
  };


  return (
    <UserRegistrationDivContainerStyled>
      <UserRegistrationDivStyled>
        <h2>User Registration</h2>
          <form onSubmit={handleSubmit}>
              <InputField
                label="Login"
                type="text"
                name="login"
                id="login"
                value={form.login}
                onChange={(value) => setForm({...form, login: value})}
                placeholder="Type your Login"
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
              <InputField
                label="Confirm your password"
                type="password"
                name="password"
                id="password"
                value={form.confirmPassword}
                onChange={(value) => setForm({...form, confirmPassword: value})}
                placeholder="Type your Password again"
              />
              <InputField
                label="E-mail"
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={(value) => setForm({...form, email: value})}
                placeholder="Type your E-mail"
              />
            <Button type='submit'>Register</Button>
          </form>
        <UserRegistrationAlertDivStyled success={alerts.success}>
          <p>{alerts.alert}</p>
        </UserRegistrationAlertDivStyled>
        <LinkToLoginDivStyled>
            <Link to="/" >Already have an account? Click here.</Link>
        </LinkToLoginDivStyled>
      </UserRegistrationDivStyled>
    </UserRegistrationDivContainerStyled>
  )
}

export { UserRegistration }