export type Product = {
  id: number;
  vendor: string;
  name: string;
  image_src: string[];
  price: string;
  tag: string;
  compare_at_price: string;
  options: Option;
};

export type Option = {
  id: string;
  name: string;
  value: string;
};
