import { PharmacyMapDivStyled } from "./styled";
import { Map } from "../../components/Map";
import { MapProps } from "../../components/Map/interface";
import { LoadingScreen } from "../../components/LoadingScreen";
import { useEffect, useState } from "react";

function PharmacyMap() {
  const [pharmacies, setPharmacies] = useState<MapProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedPharmaciesData = localStorage.getItem("itemPharmacyData");

    if (storedPharmaciesData) {
      setPharmacies(JSON.parse(storedPharmaciesData));
    }

    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {pharmacies.length > 0 ? (
            <Map pharmacies={pharmacies} /> 
          ) : (
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