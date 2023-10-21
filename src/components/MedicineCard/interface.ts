export interface MedicineCardProps{
  medicineName: string,
  labName: string,
  dosage?: number,
  description?: string,
  unitPrice?: number,
  type?: string
  onDelete: () => void;
}