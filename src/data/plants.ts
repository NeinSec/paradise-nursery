export type Plant = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
};

export const plants: Plant[] = [
  {
    id: 1,
    name: "Monstera",
    category: "Tropical",
    price: 25.99,
    image: "/plants/monstera.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    category: "Suculenta",
    price: 15.99,
    image: "/plants/snake.jpg",
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Medicinal",
    price: 10.99,
    image: "/plants/aloe.jpg",
  },
  {
    id: 4,
    name: "Pothos",
    category: "Colgante",
    price: 12.99,
    image: "/plants/pothos.jpg",
  },
  {
    id: 5,
    name: "Peace Lily",
    category: "Floración",
    price: 18.99,
    image: "/plants/lily.jpg",
  },
  {
    id: 6,
    name: "Fiddle Leaf Fig",
    category: "Árbol",
    price: 30.99,
    image: "/plants/fig.jpg",
  },
];
