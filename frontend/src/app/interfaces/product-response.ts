export interface IProductResponse {
  message: string;
  data: {
    id: number;
    title: string;
    price: number;
    status: string;
    category: string;
    description: string;
    imageBase64: string;
  };
}
