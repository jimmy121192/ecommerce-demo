import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../button/custom-button.component";
import { ReactComponent as Loader } from "../../assets/loading.svg";
import "./collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  console.log(item);
  const { name, metadata, images } = item;
  return (
    <div className="collection-item">
      {!images ? (
        <Loader className="loader" />
      ) : (
        <div
          className="image"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
      )}

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">
          {metadata && metadata["Sale price"] ? metadata["Sale price"] : ""}
        </span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
