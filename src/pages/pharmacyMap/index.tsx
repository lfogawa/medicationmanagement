import { PharmacyMapDivStyled } from "./styled";
import { Map } from "../../components/Map";
import { MapProps } from "../../components/Map/interface";
import { LoadingScreen } from "../../components/LoadingScreen";
import { useEffect, useState } from "react";

function PharmacyMap() {
  const [pharmacies, setPharmacies] = useState<MapProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get pharmacy data array from localStorage if it exists
  useEffect(() => {
    const storedPharmaciesData = localStorage.getItem("itemPharmacyData");

    if (storedPharmaciesData) {
      setPharmacies(JSON.parse(storedPharmaciesData));
    }

    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Loading screen while waiting pharmacies content in map to be loaded */}
      {isLoading ? (
        <LoadingScreen />
      ) :
        // Loades pharmacies content in map
        (
        <>
          {pharmacies.length > 0 ? (
            <Map pharmacies={pharmacies} /> 
          ) : 
          // If there's no pharmacy data array from localstorage, message below will appear
          (
            <PharmacyMapDivStyled>
              <p>Sorry, there's no pharmacy registered.</p>
            </PharmacyMapDivStyled>
          )}
        </>
      )}
    </>
  );
}

export { PharmacyMap };