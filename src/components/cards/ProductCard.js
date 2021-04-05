import Heart from "../../images/icons/heartBold.svg";
import { useHistory } from "react-router-dom";

const ProductCard = ({
  name,
  img,
  price,
  discountedPrice,
  discount,
  id,
  author,
}) => {
  const history = useHistory();

  const goToProductDetails = () => {
    history.push(`/product-details/${id}`);
  };

  //   let icon = Heart;
  //   if (customer && customer.wishlist) {
  //     for (let i = 0; i < customer.wishlist.length; i++) {
  //       if (id !== undefined) {
  //         if (id === customer.wishlist[i].product_id) {
  //           icon = HeartFilled;
  //           break;
  //         }
  //       }
  //     }
  //   }

  const addItemToWishlist = (e) => {
    e.stopPropagation();

    // addToWishlist(id, weight, customer.token)
    //   .then((res) => {
    //     if (res.data.success === "1") {
    //       // toast.success("Item added to wishlist");
    //       getWishlist(customer.token).then((res) => {
    //         if (res.data.success === "1") {
    //           dispatch({
    //             type: "GET_WISHLIST",
    //             payload: { ...customer, wishlist: res.data.fav_items },
    //           });
    //         } else {
    //           dispatch({
    //             type: "GET_WISHLIST",
    //             payload: { ...customer, wishlist: undefined },
    //           });
    //         }
    //       });
    //     } else if (
    //       res.data.success === "0" &&
    //       res.data.message === "item already in favourites"
    //     ) {
    //       // toast.info("Item removed from wishlist");

    //       removeWishlistItem(id, customer.token).then((res) => {
    //         if (res.data.success === "1")
    //           getWishlist(customer.token).then((res) => {
    //             if (res.data.success === "1") {
    //               dispatch({
    //                 type: "GET_WISHLIST",
    //                 payload: { ...customer, wishlist: res.data.fav_items },
    //               });
    //             } else {
    //               dispatch({
    //                 type: "GET_WISHLIST",
    //                 payload: { ...customer, wishlist: undefined },
    //               });
    //             }
    //           });
    //       });
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="product-card pointer" onClick={goToProductDetails}>
      <div className="product-image">
        {img && (
          <img
            src={process.env.REACT_APP_API + img}
            alt="cake"
            className="product-card-image"
          />
        )}
        <div className="save-btn" onClick={addItemToWishlist}>
          <img
            src={Heart}
            alt="cake"
            className="save-btn-icon"
            width="16px"
            height="16px"
          />
        </div>
      </div>
      <div className="product-info p-2">
        <h6 className="product-title">
          {name}
          <small>
            <strong> by {author}</strong>
          </small>
        </h6>
        <div className="price-details">
          <span className="discounted-price">₹{discountedPrice} </span>
          <span className="original-price"> ₹{price}</span>
          {discount && (
            <span className="float-right discount">{discount}% off</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
