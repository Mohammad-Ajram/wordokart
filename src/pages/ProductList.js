import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBooksByGenre, getBooksByAuthor } from "../functions/index";
import ProductCard from "../components/cards/ProductCard";
import LoadingCard from "../components/cards/LoadingCard";

const ProductList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  let { slug, q } = useParams();

  useEffect(() => {
    const loadBooks = () => {
      setLoading(true);
      if (q === "0")
        getBooksByGenre(slug)
          .then((res) => {
            setLoading(false);
            if (res.data.success === "1") {
              setBooks(res.data.books);
            }
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      else if (q === "1")
        getBooksByAuthor(slug)
          .then((res) => {
            setLoading(false);
            if (res.data.success === "1") {
              setBooks(res.data.books);
            }
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
    };
    loadBooks();
  }, [slug, q]);

  return (
    <>
      <h2 className="section-title">Books List</h2>
      <div className="container-fluid">
        {q === "0" && (
          <div className="row section-row">
            {loading ? (
              <LoadingCard
                count={8}
                classValue="col-6 col-md-4 col-lg-3 p-1 product-card-wrapper"
              />
            ) : (
              books.length > 0 &&
              books.map((item, i) =>
                item.books.map((it) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 p-1 product-card-wrapper"
                    key={i}
                  >
                    <ProductCard
                      id={it.book_id}
                      name={it.book_name}
                      img={it.image}
                      discountedPrice={it.discounted_price}
                      discount={it.offer}
                      price={it.price}
                    />
                  </div>
                ))
              )
            )}
          </div>
        )}
        {q === "1" && (
          <div className="row section-row">
            {loading ? (
              <LoadingCard
                count={8}
                classValue="col-6 col-md-4 col-lg-3 p-1 product-card-wrapper"
              />
            ) : (
              books.length > 0 &&
              books.map((item, i) => (
                <div
                  className="col-6 col-md-4 col-lg-3 p-1 product-card-wrapper"
                  key={i}
                >
                  <ProductCard
                    id={item.book_id}
                    name={item.book_name}
                    author={item.author_name}
                    img={item.image}
                    discountedPrice={item.discounted_price}
                    discount={item.offer}
                    price={item.price}
                  />
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductList;
