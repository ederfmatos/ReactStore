import React, { Component } from 'react';
import { FaInstagram, FaPinterest, FaFacebook, FaTumblr } from 'react-icons/fa';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="subscribe">
          <input
            type="text"
            name="email"
            placeholder="Digite seu email"
            data-label="Inscreva-se para receber nossas novidades"
          />
          <button>Inscrever</button>
        </div>
        <ul className="media-socials">
          <li>
            <FaInstagram />
            <span>Instagram</span>
          </li>
          <li>
            <FaPinterest />
            <span>Pinterest</span>
          </li>
          <li>
            <FaFacebook />
            <span>Facebook</span>
          </li>
          <li>
            <FaTumblr />
            <span>Tumblr</span>
          </li>
        </ul>
        <div className="copyright">
          Copyright ©2020 Todos os direitos reservados
        </div>
      </footer>
    );
  }
}
