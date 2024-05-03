export type CatalogItemProps = {
  id: number;
  value: number;
  name: string;
  stock: string;
  price: string;
  priceBottom: string;
  size: string;
  img: string;
  category: string;
}

export type ItemProps = {
  name: string;
  id: number;
  value: number;
  img: string;
  quantity: number;
  category: string;
}

export type MainPageCollectionProps = {
  sizeFrom: string;
  sizeTo: string;
  urlName: string;
  price: string;
  firstImage: string;
  secondImage: string;
}

export type HeaderProps = {
  backgroundOnOff: boolean;
}
