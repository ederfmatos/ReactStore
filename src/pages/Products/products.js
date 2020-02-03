const products = [];

for (let i = 0; i < 120; i += 1) {
  products.push({
    type: 'women',
    category: 'Sun',
    img: 'https://colorlib.com/preview/theme/violet/img/products/img-1.jpg',
    name: 'Green Dress with details',
    price: '22.90',
    id: i,
  });
}

export const getProducts = ({ page }) => {
  return new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          products: products.slice((page - 1) * 20, page * 20),
          currentPage: page,
          totalPages: products.length / 20,
        }),
      2000
    );
  });
};
