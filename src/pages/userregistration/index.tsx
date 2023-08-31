import { useState } from "react";
import { InputField } from "../../components/InputField";
import { LinkToLoginDivStyled, UserRegistrationAlertDivStyled, UserRegistrationDivContainerStyled, UserRegistrationDivStyled } from "./styled";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

function UserRegistration() {
  // User data array
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: ''    
  });

  // Alerts
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

    // Check if required fields are filled
    if (!form.email ||
      !form.password ||
      !form.confirmPassword) {
        setAlerts((previousData) => ({
          ...previousData,
          alert: 'Please fill in all required fields.'
        }));   
      }
      // Check if passwords match
      else if (
        form.password !== form.confirmPassword
      ) {
      setAlerts((previousData) => ({
        ...previousData,
        alert: 'Passwords does not match.'
      }));
      return;
      // Check if e-mail has "@.com"
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      setAlerts((previousData) => ({
        ...previousData,
        alert: 'Please, type a valid e-mail.',
      }));
      return;
      // Check if password has at least 8 characters, including letters and numbers.
      } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
      setAlerts((previousData) => ({
        ...previousData,
        alert: 'Password must have at least 8 characters, including letters and numbers.',
      }));
      return;
    }
    else {
      // New user data array
      try {
        const newUser = {
          email: form.email,
          password: form.password,          
        };

        // Get existing user data array from localStorage
        const existingUser = JSON.parse(localStorage.getItem('userData') || '[]');

        // Check if the new user data is already registered
        const isUserAlreadyRegistered = existingUser.some(
          (user: any) =>
            user.email === newUser.email
        );

        if (isUserAlreadyRegistered) {
          // Show alert if user data is already registered
          setAlerts((previousData) => ({
            ...previousData,
            alert: 'E-mail already registered.',
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
            email: '',
            password: '',
            confirmPassword: '',            
          })
        }
        setTimeout(() => clearAlerts(), 3500);
        return;
      } catch (error) {
        // Show registration error alert
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
                label="E-mail"
                type="email"
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
              <InputField
                label="Confirm your password"
                type="password"
                name="password"
                id="password"
                value={form.confirmPassword}
                onChange={(value) => setForm({...form, confirmPassword: value})}
                placeholder="Type your Password again"
              />
            <Button type='submit'>Register</Button>
          </form>
        <UserRegistrationAlertDivStyled $success={alerts.success}>
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