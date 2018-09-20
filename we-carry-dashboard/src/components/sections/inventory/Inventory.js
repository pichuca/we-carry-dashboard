import React from 'react';
import Section from '../../commons/section/Section';
import Table from '../../commons/table/Table';

import './Inventory.css';

class Inventory extends React.Component {
  render() {
    const config = {
      className: 'ui-inventory',
      name: 'Inventario',
      content: <Table />,
    };
    return (
      <Section {...config} />
    );
  }
}

export default Inventory;
