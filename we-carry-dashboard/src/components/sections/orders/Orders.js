import React from 'react';
import Section from '../../commons/section/Section';
import Table from '../../commons/table/Table';

class Orders extends React.Component {
  render() {
    const tableName = 'Pedidos';
    const tableHeads = [
      { 
        label: '# de referencia',
        isNumeric: false,
      },
      { 
        label: 'Comprador',
        isNumeric: true, 
      },
      {
        label: 'Productos',
        isNumeric: true,
      },
      {
        label: 'Tracking',
        isNumeric: true,
      },
      {
        label: 'Estado',
        isNumeric: true,
      }

    ];
    const config = {
      className: 'ui-orders',
      name: '',
      content: <Table tableHeads={tableHeads} tableName={tableName} cols={5} />,
    };
    return (
      <Section {...config} />
    );
  }
}

export default Orders;
