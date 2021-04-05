import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingCard from "../components/cards/LoadingCard";
import { getBookById } from "../functions/index";

import { Modal } from "antd";

const ProductDetails = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  //   const [discount, setDiscount] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { slug } = useParams();

  //   const loadProducts = (c) => {
  //     setLoading(true);
  //     getProductsByCategory(
  //       c === "Wedding & Anniversary" || c === "Wedding & Anniversary "
  //         ? "Wedding%20%26%20Anniversary%20"
  //         : c
  //     )
  //       .then((res) => {
  //         setLoading(false);
  //         if (res.data.success === "1") setProducts(res.data.Products);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setLoading(false);
  //       });
  //   };

  useEffect(() => {
    const loadBook = () => {
      setLoading(true);
      getBookById(slug)
        .then((res) => {
          setLoading(false);
          if (res.data.success === "1") {
            setBook(res.data.book);

            setDiscountedPrice(res.data.book.discounted_price);
            setPrice(res.data.book.price);
            // setDiscount(
            //   Math.round(
            //     100 -
            //       (res.data.book.discounted_price / res.data.book.price) * 100
            //   )
            // );
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    loadBook();
  }, [slug]);

  const addItemToCart = () => {
    // if (customer && customer.token) {
    //   addToCart(
    //     product.product_id,
    //     flavour,
    //     weight,
    //     discountedPrice,
    //     customer.token
    //   )
    //     .then((res) => {
    //       if (res.data.success === "1") {
    //         toast.success("Item added to cart");
    //         getCartDetails(customer.token)
    //           .then((response) => {
    //             if (response.data.success === "1")
    //               dispatch({
    //                 type: "GET_CART",
    //                 payload: {
    //                   ...customer,
    //                   cartItems: response.data.cart_items,
    //                 },
    //               });
    //           })
    //           .catch((err) => console.log(err));
    //       } else if (
    //         res.data.success === "0" &&
    //         res.data.message === "Item already in cart"
    //       )
    //         toast.error("Item already in the cart");
    //     })
    //     .catch((err) => console.log(err));
    // } else {
    //   history.push({
    //     pathname: "/login",
    //     state: { from: history.location.pathname },
    //   });
    // }
  };

  const addItemToWishlist = () => {
    // addToWishlist(product.product_id, weight, customer.token)
    //   .then((res) => {
    //     if (res.data.success === "1") toast.success("Item added to wishlist");
    //     else if (
    //       res.data.success === "0" &&
    //       res.data.message === "item already in favourites"
    //     )
    //       toast.info("Item already in wishlist");
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      <Modal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        className="image-modal"
      >
        <img
          src={book.prof_img ? process.env.REACT_APP_API + book.prof_img : ""}
          alt="cake"
          style={{ width: "100%" }}
        />
      </Modal>
      <h2 className="section-title">Book Details</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-md-3 p-lg-5">
            <div>
              {loading ? (
                <LoadingCard count={1} classValue="product-detail-image" />
              ) : (
                <div className="product-image-container">
                  <img
                    src={
                      book.prof_img
                        ? process.env.REACT_APP_API + book.prof_img
                        : ""
                    }
                    alt="cake"
                    className="product-detail-image pointer"
                    onClick={showModal}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 pt-lg-5 pt-md-3 product-details">
            {loading ? (
              <LoadingCard count={1} classValue="" />
            ) : (
              <>
                <h3 className="mb-lg-3 mb-md-2 mb-sm-1 product-detail-title">
                  {book.book_name}
                  <div className="price-details">
                    <span className="discounted-price">
                      ₹{Math.round(discountedPrice)}{" "}
                    </span>
                    <span className="original-price">
                      {" "}
                      ₹{Math.round(price)}
                    </span>
                    {book.discount && (
                      <span className="float-right discount">
                        {book.discount}% off
                      </span>
                    )}
                  </div>
                </h3>
                <br />
                <label className="p-d-label">Author Name</label>

                <span className="p-d-text">{book.author_name}</span>
                <br />
                <br />
                <label className="p-d-label">Genre</label>

                <span className="p-d-text">{book.genre_name}</span>
                <br />
                <br />
                <label className="p-d-label">Description</label>
                <span className="p-d-text">{book.description}</span>
                <br />
                <br />

                <button
                  className="btn my-btn-primary btn-block"
                  onClick={addItemToCart}
                >
                  Add to Cart
                </button>
                <br />
                <button
                  className="btn my-btn-secondary btn-block"
                  onClick={addItemToWishlist}
                >
                  Move to wishlist
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <hr />
      {/* <h2 className="section-title">View Similar Cakes</h2>
      <div className="container-fluid">
        <div className="row section-row">
          {loading ? (
            <LoadingCard
              count={4}
              classValue="col-6 col-md-4 col-lg-3 p-1 product-card-wrapper"
            />
          ) : (
            products.length > 0 &&
            products
              .filter(
                (item, i) => i < 8 && item.product_id !== product.product_id
              )
              .map((item, i) => (
                <div
                  className="col-6 col-md-4 col-lg-3 p-1 product-card-wrapper"
                  key={i}
                >
                  <ProductCard
                    name={item.product_name}
                    img={item.prof_img}
                    id={item.product_id}
                    discountedPrice={item.discounted_price}
                    discount={item.offer}
                    price={item.price}
                    weight={item.weight}
                  />
                </div>
              ))
          )}
        </div>
      </div> */}
    </>
  );
};

export default ProductDetails;
