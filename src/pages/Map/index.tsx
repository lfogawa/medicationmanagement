import {useState, useEffect} from "react"
import { PageStorageMain } from "./styled"
import { Leaflet } from "../../components/Leaflet"
import { LeafletProps } from "../../components/Leaflet/interface";

function Map() {
  const [ pharmacy, setPharmacy ] = useState<LeafletProps[]>([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
      setLoading(true)
      const storedPharmacyData = localStorage.getItem('itemPharmacyData');

      if (storedPharmacyData) {
        setPharmacy([JSON.parse(storedPharmacyData)]);
      }
  
      setLoading(false);
    }, []);

  if(loading) {
    return (
      <p>Carregando...</p>
    )
  }

  return (
    <>
     <PageStorageMain>
        {pharmacy.length > 0 ? (
          pharmacy.map(({ corporateName, cnpj, tradeName }) => (
            <div key={cnpj}>
              <p>Corporate Name: {corporateName}</p>
              <p>CNPJ: {cnpj}</p>
              <p>Trade Name: {tradeName}</p>
              {/* Renderizar outros dados aqui */}
            </div>
          ))
        ) : (
          <p>Não há dados de farmácia armazenados</p>
        )}
      </PageStorageMain>
      {/* Renderizar o componente Leaflet com os dados da farmácia */}
      <Leaflet pharmacy={pharmacy} />
    </>
  );
}

export { Map };