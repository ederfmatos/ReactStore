import React, { Component } from 'react';
import { FaUserAlt, FaPhone, FaMailBulk } from 'react-icons/fa';
import { Select, Button, Input, TextArea } from '../../components';

import './styles.scss';

export default class Contact extends Component {
  getSelectOptions() {
    const options = [
      {
        label: 'Atraso no pedido',
      },
      {
        label: 'Problemas com pagamento',
      },
      {
        label: 'Tamanho incorreto',
      },
    ];

    return <Select label="Assunto" options={options} />;
  }

  render() {
    return (
      <div className="u-fullPage screen">
        <div className="image">
          <img
            src="https://colorlib.com/etc/cf/ContactFrom_v12/images/img-01.png"
            alt=""
          />
        </div>

        <form action="">
          <Input label="Nome" Icon={FaUserAlt} />

          <Input label="Telefone" Icon={FaPhone} />

          <Input label="Email" Icon={FaMailBulk} />

          {this.getSelectOptions()}

          <TextArea label="Mensagem" />

          <div className="mt-1">
            <Button label="Enviar" />
          </div>
        </form>
      </div>
    );
  }
}
