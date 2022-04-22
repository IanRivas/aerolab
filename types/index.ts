export interface Product {
  _id: string;
  category: string;
  cost: number;
  img: ImgProduct;
  name: string;
}

interface ImgProduct {
  hdUrl: string;
  url: string;
}

export interface User {
  __v: number;
  _id: string;
  createDate: string;
  name: string;
  points: number;
  redeemHistory: string[];
}
