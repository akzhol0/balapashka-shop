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

export interface MainPageCollectionProps {
  sizeFrom: string;
  sizeTo: string;
  urlName: string;
  price: string;
  firstImage: string;
  secondImage: string;
}

export interface HeaderProps {
  backgroundOnOff: boolean;
}
