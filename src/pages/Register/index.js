import React, { Component } from 'react';
import { FaUserAlt, FaMailBulk, FaPhone, FaSatellite } from 'react-icons/fa';
import { Input, Button } from '../../components';

import './styles.scss';

export default class Register extends Component {
  render() {
    return (
      <div className="u-fullPage screen">
        <form action="">
          <Input label="Nome" Icon={FaUserAlt} />

          <div>
            <Input label="Telefone" Icon={FaPhone} />

            <Input label="Email" Icon={FaMailBulk} />
          </div>

          <div>
            <Input label="Endereço" Icon={FaMailBulk} />
            <Input label="Bairro" Icon={FaMailBulk} />
          </div>

          <div>
            <Input label="Cidade" Icon={FaSatellite} />
            <Input label="Estado" Icon={FaMailBulk} />
          </div>

          <div className="mt-4">
            <Button label="Cadastrar" />
          </div>
        </form>

        <div className="image">
          <img
            src="https://colorlib.com/etc/cf/ContactFrom_v12/images/img-01.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}
