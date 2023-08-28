import { Route, Routes, Navigate } from "react-router-dom";
import { PharmacyMap } from "../pages/pharmacyMap";
import { PharmacyRegistration } from "../pages/pharmacyRegistration";
import { MedicineRegistration } from "../pages/medicineRegistration";
import { MedicineList } from "../pages/medicineList";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function PrivateRoutes () {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/pharmacyMap" element={<PharmacyMap />} />
        <Route path="/pharmacyRegistration" element={<PharmacyRegistration />} />
        <Route path="/medicineRegistration" element={<MedicineRegistration />} />
        <Route path="/medicineList" element={<MedicineList />} />
        <Route path="*" element={<Navigate to="/pharmacyMap"/>} />
      </Routes>
      <Footer />
    </>
  )
};

export { PrivateRoutes };