export interface catalogCardProps {
  id: number;
  value: number;
  name: string;
  stock: string;
  price: string;
  priceBottom: string;
  size: string;
  img: string;
}

export interface cartItemsProps {
  name: string;
  id: number;
  value: number;
  img: string;
  quantity: number;
}
