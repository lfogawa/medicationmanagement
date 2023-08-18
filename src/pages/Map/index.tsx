import {useState, useEffect} from "react"
import {api} from "../../services/api"
import { StorageProps } from "./interface"
import { PageStorageMain } from "./styled"
import { Leaflet } from "../../components/Leaflet"

function Map() {
  const [ storages, setStorages ] = useState<StorageProps[]>([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const response = await api.get("/storages")
      console.log(response)
      setStorages(response.data)
      setLoading(false)
    }
    load()
  }, [])

  if(loading) {
    return (
      <p>Carregando...</p>
    )
  }

  return (
    <>
      <PageStorageMain>
        {storages.length > 0 ? (
          storages.map(({ name, id, lat, lon }) => (
            <div key={id}>
              <p>Id: {id}</p>
              <p>Nome do depósito: {name}</p>
              <p>Latitude: {lat}</p>
              <p>Longitude: {lon}</p>
            </div>
          ))
        ) : (
          <p>Não tem depósitos cadastrados</p>
        )}
      </PageStorageMain>
      <Leaflet storages={storages} />
    </>
  );
}

export { Map };