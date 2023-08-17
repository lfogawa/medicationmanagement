import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Map } from '../pages/Map'
import { Login } from '../pages/Login'
import { PharmacyRegistration } from '../pages/PharmacyRegistration'
import { MedicineRegistration } from '../pages/MedicineRegistration'
import { MedicineList } from '../pages/MedicineList'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PrivateRoutes } from './privateRoutes'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />} />
          <Route path="/map" element={< Map />} />
          <Route path="/pharmacyRegistration" element={< PharmacyRegistration />} />
          <Route path="/medicineRegistration" element={< MedicineRegistration />} />
          <Route path="/medicineList" element={< MedicineList />} />        
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export { RoutesApp }