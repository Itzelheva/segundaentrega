import React from 'react';
import Item from '../Item/Item';
import itemList from './itemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="item-list-container">
      <div className="item-list">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

