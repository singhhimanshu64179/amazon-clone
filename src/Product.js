import React from 'react';
import "./Product.css"
import { useStateValue } from './StateProvider';

function Product({id,image,title,price,rating}) {

    const [{ basket }, dispatch] = useStateValue();

    const addToCart = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
            },
          });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt=""/>

            <button onClick={addToCart}>
                <strong>Add to Cart</strong>
            </button>
        </div>
    )
}

export default Product

