import React from 'react';
import Section from '../../commons/section/Section';

import './Inventory.css';

class Inventory extends React.Component {
  render() {
    const itemList = (<div className="ui-inventory-items-list">
      <ul>
        <li>Item</li>
      </ul>
    </div>);
    const config = {
      className: 'ui-inventory',
      name: 'Inventario',
      content: itemList,
    };
    return (
      <Section {...config} />
    );
  }
}

export default Inventory;
