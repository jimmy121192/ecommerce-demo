import React from "react";

import "./cart-item.styles.scss";

const CartItem = ({ item: { images, metadata, name, quantity } }) => (
  <div className="cart-item">
    <img src={images[0]} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x $
        {metadata["Sale price"]
          ? metadata["Sale price"]
          : metadata["Original price"]}
      </span>
    </div>
  </div>
);

export default CartItem;
