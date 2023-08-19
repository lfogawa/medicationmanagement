import { LatLngExpression } from "leaflet";

export interface LeafletProps {
  pharmacy: any,
  position: LatLngExpression,
  id?: number,
  corporateName?: string,
  cnpj?: number,
  tradeName?: string,
  companyEmail?: string,
  companyPhone?: number,
  companyCellphone?: number,
  zipCode?: number,
  street?: string,
  number?: number,
  neighborhood?: string,
  city?: string,
  state?: string,
  complement?: string,
  geolocationLatitude?: number,
  geolocationLongitude?: number,
}