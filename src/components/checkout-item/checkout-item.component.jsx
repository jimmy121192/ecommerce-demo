import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, images, metadata, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={images[0]} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className={`${cartItem.quantity === 1 ? "disable" : ""} arrow`}
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">
        $
        {metadata["Sale price"]
          ? metadata["Sale price"]
          : metadata["Original price"]}
      </span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
