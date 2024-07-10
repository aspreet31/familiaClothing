import React, { useContext } from "react";
import "../ProductDisplay/ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <img src={product.image} alt="" />
      </div>
      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(150)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description"></div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span>T-Shirt , Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
