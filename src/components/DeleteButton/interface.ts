export interface DeleteButtonProps{
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick: any;
}