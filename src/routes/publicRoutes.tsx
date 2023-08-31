import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { UserRegistration } from "../pages/userregistration"
import { LoginHeader } from "../components/LoginHeader";
import { LoginFooter } from "../components/LoginFooter";

const PublicRoutes = () => {
  return (
    <>
      <LoginHeader />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userRegistration" element={<UserRegistration />} />
      </Routes>
      <LoginFooter />
    </>
  )
}

export { PublicRoutes };