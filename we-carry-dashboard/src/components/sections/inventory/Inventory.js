import React from 'react';
import Section from '../../commons/section/Section';
import Table from '../../commons/table/Table';

import './Inventory.css';

class Inventory extends React.Component {
  render() {
    const tableHeads = [
      { 
        title: 'Nombre',
        isNumeric: false,
      },
      { 
        title: 'SKU',
        isNumeric: true, 
      },
      {
        title: 'Disponible en deposito',
        isNumeric: true,
      },
      {
        title: 'Pedidos',
        isNumeric: true,
      },

    ];
    const config = {
      className: 'ui-inventory',
      name: '',
      content: <Table tableHeads={tableHeads} />,
    };
    return (
      <Section {...config} />
    );
  }
}

export default Inventory;
