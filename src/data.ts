export interface MenuItem {
  name: string
  description: string
  price: string
}

export interface MenuCategory {
  title: string
  items: MenuItem[]
}

// Sample content: replace with the real menu when the cafe provides it.
export const MENU: MenuCategory[] = [
  {
    title: 'Cafés',
    items: [
      { name: 'Espresso', description: 'Tueste propio, intenso y cremoso.', price: '1,40 €' },
      { name: 'Cortado', description: 'Espresso con un toque de leche.', price: '1,60 €' },
      { name: 'Latte', description: 'Leche cremosa y café suave.', price: '2,60 €' },
      { name: 'Café con hielo', description: 'Para los días de calor.', price: '2,40 €' },
    ],
  },
  {
    title: 'Desayunos',
    items: [
      { name: 'Tostada con tomate', description: 'Pan de masa madre, tomate y aceite de oliva.', price: '3,20 €' },
      { name: 'Croissant de mantequilla', description: 'Recién horneado cada mañana.', price: '2,10 €' },
      { name: 'Tostada de aguacate', description: 'Con huevo poché y semillas.', price: '5,50 €' },
    ],
  },
  {
    title: 'Dulces',
    items: [
      { name: 'Tarta de queso', description: 'Receta de la casa, cremosa y horneada.', price: '4,20 €' },
      { name: 'Bizcocho de limón', description: 'Esponjoso, con glaseado ligero.', price: '3,00 €' },
      { name: 'Galleta de chocolate', description: 'Con chips y sal en escamas.', price: '1,90 €' },
    ],
  },
]

export const HOURS = [
  { days: 'Lunes a viernes', time: '7:30 – 20:00' },
  { days: 'Sábados', time: '8:30 – 21:00' },
  { days: 'Domingos', time: '9:00 – 15:00' },
]
