import React, { Component } from 'react';

import { Select, ProductItem, Spinner } from '../../components';

import { getProducts } from './products';
import './styles.scss';

export default class Products extends Component {
  state = {
    orderBy: 'name',
    products: [],
    currentPage: 0,
    totalPages: 1,
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await this.loadProducts();
    this.setState({ loading: false });
  }

  async loadProducts() {
    const { products, currentPage } = this.state;

    const data = await getProducts({ page: currentPage + 1 });

    this.setState({
      products: [...products, ...data.products],
      currentPage: data.currentPage,
      totalPages: data.totalPages,
    });
  }

  render() {
    const { products, currentPage, totalPages, loading } = this.state;

    const options = [
      { label: 'Valor', value: 'price' },
      { label: 'Nome', value: 'price' },
      { label: 'Mais vendidos', value: 'price' },
      { label: 'Menos vendidos', value: 'price' },
    ];

    if (loading) {
      return (
        <div className="u-fullPage u-fullCentered">
          <Spinner />
        </div>
      );
    }

    return (
      <>
        <section className="center-screen">
          <div className="indicators">
            <Select
              options={options}
              label="Ordenar por"
              onUpdate={({ value }) => this.setState({ orderBy: value })}
            />

            <span className="counter">{products.length} Produtos</span>
          </div>

          <div className="grid">
            <ul>
              {products.map((item, index) => (
                <ProductItem key={`product-${index}`} product={item} />
              ))}
            </ul>
          </div>

          {totalPages > currentPage && (
            <button className="loadMore" onClick={this.loadProducts.bind(this)}>
              Ver mais
            </button>
          )}
        </section>
      </>
    );
  }
}
