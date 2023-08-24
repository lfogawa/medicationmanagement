import {useState, useEffect} from "react"
import { PharmacyMapDivStyled } from "./styled";
import { Map } from "../../components/Map"
import { MapProps } from "../../components/Map/interface";

function PharmacyMap() {
  const [ pharmacies, setPharmacies ] = useState<MapProps[]>([])

  useEffect(() => {
      const storedPharmaciesData = localStorage.getItem('itemPharmacyData');

      if (storedPharmaciesData) {
        setPharmacies([JSON.parse(storedPharmaciesData)]);
      }
    }, []);
  
  return (
    <>
      {
        pharmacies.length > 0 ?
        pharmacies.map((pharmacy: MapProps, index: number) => (
          <>
            <Map key={index} pharmacies={pharmacy} />
          </>
          )
        )
      :
      <PharmacyMapDivStyled>
        <h2>Sorry, there's no pharmacy registered.</h2>
      </PharmacyMapDivStyled>
      }     
    </>
  )
}

export { PharmacyMap };