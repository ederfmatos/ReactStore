export const menuItems = [
  { label: 'Inicio', key: 'home', location: '/' },
  {
    label: 'Produtos',
    key: 'shop',
    location: '/produtos',
    subitems: [
      {
        label: 'Moda Masculina',
        value: '1',
      },
      {
        label: 'Moda Feminina',
        value: '1',
      },
      {
        label: 'Moda Infantil',
        value: '1',
      },
      {
        label: 'Novidades',
        value: '1',
      },
    ],
  },
  { label: 'Sobre', key: 'about', location: '/sobre' },
  { label: 'Novidades', key: 'blog', location: '/blog' },
  { label: 'Contato', key: 'contact', location: '/contato' },
];
