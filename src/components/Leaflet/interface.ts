import { LatLngExpression } from "leaflet";

export interface LeafletProps {
  storages: any,
  position: LatLngExpression,
  address: {
    zip: string;
    street: string;
    numberStreet: string;
    district: string;
    complement?: string;
    city: string;
    uf: string;
  }
}