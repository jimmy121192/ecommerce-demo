import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.scss";

const CollectionPreview = ({ id, ...otherProps }) => {
  return (
    <div className="collection-preview">
      <div className="preview">
        <CollectionItem key={id} {...otherProps} />
      </div>
    </div>
  );
};

export default CollectionPreview;
