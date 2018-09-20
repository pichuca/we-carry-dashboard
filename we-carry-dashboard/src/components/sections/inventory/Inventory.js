import React from 'react';
import Section from '../../commons/section/Section';
import Table from '../../commons/table/Table';

import './Inventory.css';

class Inventory extends React.Component {
  render() {
    const tableName = 'Inventario';
    const tableHeads = [
      { 
        label: 'Nombre',
        isNumeric: false,
      },
      { 
        label: 'SKU',
        isNumeric: true, 
      },
      {
        label: 'Disponible en deposito',
        isNumeric: true,
      },
      {
        label: 'Pedidos',
        isNumeric: true,
      },

    ];
    const config = {
      className: 'ui-inventory',
      name: '',
      content: <Table tableHeads={tableHeads} tableName={tableName} />,
    };
    return (
      <Section {...config} />
    );
  }
}

export default Inventory;
