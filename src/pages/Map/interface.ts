export interface StorageProps {
  id: number;
  name: string;
  lat:number;
  lon: number;
  address: { zip: string; street: string; numberStreet: string; district: string;
    complement?: string; city: string; uf: string;
  }
}
