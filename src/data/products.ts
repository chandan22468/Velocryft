export interface Product {
  id: string;
  name: string;
  price: string;
  limitedEdition: boolean;
}

export const products: Product[] = [
  { id: '1', name: 'BMW M4 CSL Wall Frame', price: '$1,200', limitedEdition: true },
  { id: '2', name: 'Porsche 911 GT3 RS Wall Frame', price: '$1,450', limitedEdition: true },
  { id: '3', name: 'Nissan GTR R35 Wall Frame', price: '$1,100', limitedEdition: true },
  { id: '4', name: 'Lamborghini Huracan STO Wall Frame', price: '$1,800', limitedEdition: true },
  { id: '5', name: 'Ferrari SF90 Wall Frame', price: '$2,100', limitedEdition: true },
  { id: '6', name: 'McLaren P1 Wall Frame', price: '$2,500', limitedEdition: true },
];
