import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import CounterInput from 'react-counter-input';

import { ProductItem, Spinner, Button } from '../../components';
import './styles.scss';

export default class ProductDetail extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const product = await this.getProduct();
    this.setState({ product, loading: false });
  }

  getProduct() {
    return new Promise(resolve =>
      setTimeout(
        () =>
          resolve({
            type: 'women',
            category: 'Sun',
            img:
              'https://colorlib.com/preview/theme/violet/img/products/img-1.jpg',
            name: 'Green Dress with details',
            price: '22.90',
            relatedProducts: [
              {
                type: 'women',
                category: 'Sun',
                img:
                  'https://colorlib.com/preview/theme/violet/img/products/img-1.jpg',
                name: 'Green Dress with details',
                price: '22.90',
                id: 5,
              },
              {
                type: 'women',
                category: 'Sun',
                img:
                  'https://colorlib.com/preview/theme/violet/img/products/img-1.jpg',
                name: 'Green Dress with details',
                price: '22.90',
              },
              {
                type: 'women',
                category: 'Sun',
                img:
                  'https://colorlib.com/preview/theme/violet/img/products/img-1.jpg',
                name: 'Green Dress with details',
                price: '22.90',
              },
              {
                type: 'women',
                category: 'Sun',
                img:
                  'https://colorlib.com/preview/theme/violet/img/products/img-1.jpg',
                name: 'Green Dress with details',
                price: '22.90',
              },
            ],
            rating: 3.5,
            tags: ['Sun', 'Women'],
            stock: 4,
            description:
              'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. ',
          }),
        1000
      )
    );
  }

  render() {
    const { loading, product, quantity } = this.state;

    if (loading) {
      return (
        <div className="u-fullPage u-fullCentered">
          <Spinner />
        </div>
      );
    }

    return (
      <div className="center-screen">
        <div className="navigation">
          <a className="nav-prev">Anterior</a>
          <a className="nav-next">Próximo</a>
        </div>

        <div className="product-detail">
          <div className="product-images">
            <img src={product.img} alt="" />
          </div>

          <div className="product-info">
            <span className="name">{product.name}</span>
            <span className="price">R$ {product.price}</span>

            <div className="note">
              <StarRatings
                rating={product.rating}
                starRatedColor="yellow"
                numberOfStars={5}
                starDimension="30px"
                name="rating"
              />
              white
            </div>

            <p className="description">{product.description}</p>

            <div className="category">
              <span className="title">Categoria: </span>
              <span>{product.category}</span>
            </div>

            <div className="tags">
              <span className="title">Tags: </span>
              <span>{product.tags.join(', ')}</span>
            </div>

            <div className="actions">
              <div className="counter">
                <CounterInput
                  min={0}
                  max={product.stock}
                  onCountChange={quantity => this.setState({ quantity })}
                />
              </div>

              <Button
                label="Adicionar ao carrinho"
                onClick={() => alert('clicous')}
                enable={quantity > 0 && quantity <= product.stock}
              />
            </div>

            <div className="more-info">
              <span>Comentarios</span>
              <span>Especificações</span>
            </div>
          </div>
        </div>

        <div className="related-products">
          <span className="title">Produtos relacionados</span>

          <ul className="grid">
            {product.relatedProducts.map((item, index) => (
              <ProductItem key={`related-product-${index}`} product={item} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
